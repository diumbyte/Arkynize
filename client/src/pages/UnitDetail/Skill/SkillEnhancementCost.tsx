import { useEffect, useState } from "react"
import { Enhancement } from "../../../generated/graphql"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { editSkillEnhancement, TrackedSkillPayload } from "../../../redux/actions/unitsReducer"
import { TrackedSkill } from "../../../redux/types"
import { LocalTrackedResource } from "../types"
import GoldIcon from "../../../assets/gold.png"
import MolagoraIcon from "../../../assets/molagora.png"
import StigmaIcon from "../../../assets/stigma.png"

import { ResourceListItem } from "../../components/ResourceListItem"
import { calculateTotalSkillEnhancementsCosts } from "../../../util/calculateCosts"

type SkillEnhancementCostProps = {
    unitId: number,
    unitCode: string,
    unitName: string,
    skillId: number,
    currentEnhancementId: number,
    desiredEnhancementId: number,
    setModalOpen: Function,
    enhancements: Enhancement[]
}

const buildDispatchData = (
    unitId: number, 
    unitName: string, 
    unitCode: string, 
    totalSkillCosts: TrackedSkill
    ): TrackedSkillPayload => {
        
    return {
        unitId,
        unitName,
        unitCode,
        skill: {
            ...totalSkillCosts
        }
    }
}

export const SkillEnhancementCost = ({
    unitId,
    unitName,
    unitCode,
    skillId,
    currentEnhancementId,
    desiredEnhancementId,
    setModalOpen,
    enhancements
}: SkillEnhancementCostProps) => {
    const { trackedUnits } = useAppSelector(state => state.units)
    const dispatch = useAppDispatch()
    
    const [goldCount, setGoldCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [molagoraCount, setMolagoraCount]  = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [stigmaCount, setStigmaCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [basicCatalystCount, setBasicCatalystCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [epicCatalystCount, setEpicCatalystCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})

    // Update local state if materials are already being tracked by global store
    useEffect(() => {
        const unitIdx = trackedUnits.findIndex(unit => unit.id === unitId)
        const foundUnit = trackedUnits[unitIdx]
        
        if (unitIdx !== -1) {
            const skillIdx = foundUnit.trackedSkills.findIndex(skill => skill.id === skillId)
            const foundSkill = foundUnit.trackedSkills[skillIdx]
            if(skillIdx !== -1) {
                // Update local states
                foundSkill.trackedCatalysts.forEach(catalyst => {
                    if(catalyst.isEpic) {
                        setEpicCatalystCount({
                            currentCount: catalyst.count.current,
                            isTracked: catalyst.count.isTracked
                        })
                    }  else {
                        setBasicCatalystCount({
                            currentCount: catalyst.count.current,
                            isTracked: catalyst.count.isTracked
                        })
                    }
                })
                setGoldCount({
                    currentCount: foundSkill.trackedGold.current,
                    isTracked: foundSkill.trackedGold.isTracked
                })
                setMolagoraCount({
                    currentCount: foundSkill.trackedMolagora.current,
                    isTracked: foundSkill.trackedMolagora.isTracked
                })
                setStigmaCount({
                    currentCount: foundSkill.trackedStigma.current,
                    isTracked: foundSkill.trackedStigma.isTracked
                })
            }
        }
    }, [trackedUnits, unitId, skillId])

    const totalEnhancementsCost = calculateTotalSkillEnhancementsCosts(
        enhancements,
        skillId,
        currentEnhancementId,
        desiredEnhancementId,
        basicCatalystCount,
        epicCatalystCount,
        goldCount,
        molagoraCount,
        stigmaCount
    )

    return (
        <>
        <form 
            className="grid py-6 grid-cols-resource md:grid-cols-resource-full items-center" 
            onSubmit={(e) => e.preventDefault()}
        >
        {
            totalEnhancementsCost.trackedCatalysts.map(catalystCost => {
                return (
                    <ResourceListItem
                        key={catalystCost.id}
                        resourceName={catalystCost.name}
                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`}
                        imageAlt={catalystCost.code}
                        currentCount={catalystCost.isEpic ? epicCatalystCount.currentCount : basicCatalystCount.currentCount}
                        desiredCount={catalystCost.count.required}
                        isTracked={catalystCost.count.isTracked}
                        onCurrentCountChange={(value) => {
                            if(catalystCost.isEpic) {
                                setEpicCatalystCount(prev => ({
                                    currentCount: value,
                                    isTracked: prev.isTracked
                                }))
                            } else {
                                setBasicCatalystCount(prev => ({
                                    currentCount: value,
                                    isTracked: prev.isTracked
                                }))
                            }
                        }}
                        onItemUntracked={() => {
                            if(catalystCost.isEpic) {
                                setEpicCatalystCount(prev => ({...prev, isTracked: false}))
                            } else {
                                setBasicCatalystCount(prev => ({...prev, isTracked: false}))
                            }
                        }}
                    />
                )
            })
        }
        <ResourceListItem
            resourceName={"Gold"}
            imageSourcePath={GoldIcon}
            imageAlt={"Gold icon"}
            isTracked={totalEnhancementsCost.trackedGold.isTracked}
            currentCount={goldCount.currentCount}
            desiredCount={totalEnhancementsCost.trackedGold.required}
            onCurrentCountChange={(value) => {
                setGoldCount(prevState => ({
                    currentCount: value,
                    isTracked: prevState.isTracked
                }))
            }}
            onItemUntracked={() => {
                setGoldCount(prev => ({...prev, isTracked: false}))
            }}
        />
        {
            totalEnhancementsCost.trackedMolagora.required !== 0 ?
                <ResourceListItem
                    resourceName={"Molagora"}
                    imageSourcePath={MolagoraIcon}
                    imageAlt={"Molagora icon"}
                    isTracked={molagoraCount.isTracked}
                    currentCount={molagoraCount.currentCount}
                    desiredCount={totalEnhancementsCost.trackedMolagora.required}
                    onCurrentCountChange={(value) => {
                        setMolagoraCount(prevState => ({
                            currentCount: value,
                            isTracked: prevState.isTracked
                        }))
                    }}
                    onItemUntracked={() => {
                        setMolagoraCount(prev => ({...prev, isTracked: false}))
                    }}
                />
            :
                <ResourceListItem
                    resourceName={"Stigma"}
                    imageSourcePath={StigmaIcon}
                    imageAlt={"Stigma icon"}
                    isTracked={stigmaCount.isTracked}
                    currentCount={stigmaCount.currentCount}
                    desiredCount={totalEnhancementsCost.trackedStigma.required}
                    onCurrentCountChange={(value) => {
                        setStigmaCount(prevState => ({
                            currentCount: value,
                            isTracked: prevState.isTracked
                        }))
                    }}
                    onItemUntracked={() => {
                        setStigmaCount(prev => ({...prev, isTracked: false}))
                    }}
                />
        }
        </form>
        <div className="w-full row">
            <button 
                className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2 mt-2"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                        editSkillEnhancement(
                            buildDispatchData(
                                unitId as number, 
                                unitName as string, 
                                unitCode as string, 
                                totalEnhancementsCost
                            )
                        )
                    )
                    setModalOpen(false)
                }}
            >
                Track!
            </button>
        </div>
        </>
    )
}