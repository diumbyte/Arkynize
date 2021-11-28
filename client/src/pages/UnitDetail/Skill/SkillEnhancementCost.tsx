import { useEffect, useState } from "react"
import { Enhancement } from "../../../generated/graphql"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { toast } from "react-hot-toast"

import { clearUnitTrackedSkill, editSkillEnhancement, editTotalFromSkill, TrackedSkillPayload } from "../../../redux/actions/unitsReducer"
import { SuccessButton, ErrorButton } from "../../components/FormButton"
import { TrackedSkill } from "../../../redux/types"
import GoldIcon from "../../../assets/gold.png"
import MolagoraIcon from "../../../assets/molagora.png"
import StigmaIcon from "../../../assets/stigma.png"

import { TrackableResourceListItem } from "../../components/TrackableResourceListItem"
import { calculateTotalSkillEnhancementsCosts } from "../../../util/calculateCosts"
import { useTrackSkillCostChanges } from "../../../hooks/useSkillEnhancementTracking"

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
    
    const [goldTracked, setGoldTracked] = useState(true)
    const [molagoraTracked, setMolagoraTracked]  = useState(true)
    const [stigmaTracked, setStigmaTracked] = useState(true)
    const [basicCatalystTracked, setBasicCatalystTracked] = useState(true)
    const [epicCatalystTracked, setEpicCatalystTracked] = useState(true)

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
                        setEpicCatalystTracked(catalyst.count.isTracked)
                    }  else {
                        setBasicCatalystTracked(catalyst.count.isTracked)
                    }
                })
                setGoldTracked(foundSkill.trackedGold.isTracked)
                setMolagoraTracked(foundSkill.trackedMolagora.isTracked)
                setStigmaTracked(foundSkill.trackedStigma.isTracked)           
            }
        }
    }, [trackedUnits, unitId, skillId])

    const totalEnhancementsCost = calculateTotalSkillEnhancementsCosts(
        enhancements,
        skillId,
        type,
        currentEnhancementId,
        desiredEnhancementId,
        basicCatalystTracked,
        epicCatalystTracked,
        goldTracked,
        molagoraTracked,
        stigmaTracked
    )

    useTrackSkillCostChanges(
        trackedUnits,
        unitId,
        skillId,
        basicCatalystTracked,
        epicCatalystTracked,
        goldTracked,
        molagoraTracked,
        stigmaTracked,
        () => toast.error("Changes not committed", {
            id: "resourcesModified",
            duration: Infinity
        }), 
        () => toast.dismiss("resourcesModified")
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
                        onItemToggled={() => {
                            if(catalystCost.isEpic) {
                                setEpicCatalystTracked(prev => !prev)
                            } else {
                                setBasicCatalystTracked(prev => !prev)
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
            onItemToggled={() => {
                setGoldTracked(prev => !prev)
            }}
        />
        {
            totalEnhancementsCost.trackedMolagora.required !== 0 ?
                <TrackableResourceListItem
                    resourceName={"Molagora"}
                    imageSourcePath={MolagoraIcon}
                    imageAlt={"Molagora icon"}
                    isTracked={totalEnhancementsCost.trackedMolagora.isTracked}
                    desiredCount={totalEnhancementsCost.trackedMolagora.required}
                    onItemToggled={() => {
                        setMolagoraTracked(prev => !prev)
                    }}
                />
            :
                <TrackableResourceListItem
                    resourceName={"Stigma"}
                    imageSourcePath={StigmaIcon}
                    imageAlt={"Stigma icon"}
                    isTracked={totalEnhancementsCost.trackedStigma.isTracked}
                    desiredCount={totalEnhancementsCost.trackedStigma.required}
                    onItemToggled={() => {
                        setStigmaTracked(prev => !prev) }
                    }
                />
        }
        </form>
        <div className="w-full row items-center justify-around">
            <SuccessButton
                className="w-1/3"
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
            </SuccessButton>
            <ErrorButton 
                className="w-1/3"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(clearUnitTrackedSkill({unitId: unitId as number, skillId: skillId as number}))

                    setModalOpen(false)
                }}
            >
                Reset                
            </ErrorButton>
        </div>
        </>
    )
}