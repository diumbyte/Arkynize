import { useEffect, useState } from "react"
import { Enhancement } from "../../../generated/graphql"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { clearUnitTrackedSkill, editSkillEnhancement, editTotalFromSkill, TrackedSkillPayload } from "../../../redux/actions/unitsReducer"
import { TrackedSkill } from "../../../redux/types"
import { LocalTrackedResource } from "../types"
import GoldIcon from "../../../assets/gold.png"
import MolagoraIcon from "../../../assets/molagora.png"
import StigmaIcon from "../../../assets/stigma.png"

import { TrackableResourceListItem } from "../../components/TrackableResourceListItem"
import { calculateTotalSkillEnhancementsCosts } from "../../../util/calculateCosts"

type SkillEnhancementCostProps = {
    unitId: number,
    unitCode: string,
    unitName: string,
    skillId: number,
    type: number,
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
    type,
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
        type,
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
            className="py-6" 
            onSubmit={(e) => e.preventDefault()}
        >
        {
            totalEnhancementsCost.trackedCatalysts.map(catalystCost => {
                return (
                    <TrackableResourceListItem
                        key={catalystCost.id}
                        resourceName={catalystCost.name}
                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`}
                        imageAlt={catalystCost.code}
                        desiredCount={catalystCost.count.required}
                        isTracked={catalystCost.count.isTracked}
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
        <TrackableResourceListItem
            resourceName={"Gold"}
            imageSourcePath={GoldIcon}
            imageAlt={"Gold icon"}
            isTracked={totalEnhancementsCost.trackedGold.isTracked}
            desiredCount={totalEnhancementsCost.trackedGold.required}
            onItemUntracked={() => {
                setGoldCount(prev => ({...prev, isTracked: false}))
            }}
        />
        {
            totalEnhancementsCost.trackedMolagora.required !== 0 ?
                <TrackableResourceListItem
                    resourceName={"Molagora"}
                    imageSourcePath={MolagoraIcon}
                    imageAlt={"Molagora icon"}
                    isTracked={molagoraCount.isTracked}
                    desiredCount={totalEnhancementsCost.trackedMolagora.required}
                    onItemUntracked={() => {
                        setMolagoraCount(prev => ({...prev, isTracked: false}))
                    }}
                />
            :
                <TrackableResourceListItem
                    resourceName={"Stigma"}
                    imageSourcePath={StigmaIcon}
                    imageAlt={"Stigma icon"}
                    isTracked={stigmaCount.isTracked}
                    desiredCount={totalEnhancementsCost.trackedStigma.required}
                    onItemUntracked={() => {
                        setStigmaCount(prev => ({...prev, isTracked: false}))
                    }}
                />
        }
        </form>
        <div className="w-full row items-center">
            <button 
                className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2"
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

                    dispatch(
                        editTotalFromSkill(totalEnhancementsCost)
                    )

                    setModalOpen(false)
                }}
            >
                Track
            </button>
            <div
                className="cursor-pointer ml-4 p-4 bg-red-500 rounded-lg text-center border-black border-opacity-20 border-2 outline-none w-1/2 md:w-1/5"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(clearUnitTrackedSkill({unitId: unitId as number, skillId: skillId as number}))

                    setModalOpen(false)
                }}
            >
                Reset
            </div>
        </div>
        </>
    )
}