import GoldIcon from "../../../assets/gold.png"
import StigmaIcon from "../../../assets/stigma.png"
import MolagoraIcon from "../../../assets/molagora.png"

import { useAppDispatch } from "../../../redux/hooks"
import { editAwakening, editSkillEnhancement } from "../../../redux/actions/unitsReducer"
import { TrackedAwakening, TrackedSkill } from "../../../redux/types"
import { ResourceListItem } from "../../components/ResourceListItem"

type UnitSummaryProps = {
    unitId: number,
    unitName: string,
    unitCode: string,
    awakenings: TrackedAwakening,
    skills: TrackedSkill[]
}

export const UnitSummary = ({
    unitId,
    unitName,
    unitCode,
    awakenings,
    skills
}: UnitSummaryProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-full md:w-1/2 max-w-4xl">
            <div className="row border-b border-black border-opacity-20 py-1">
                <img 
                    className="object-contain"
                    width={40}
                    src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unitCode}.png`} 
                    alt={`${unitName}'s icon`}
                />
                <span className="text-2xl px-2">
                    {unitName}
                </span>
            </div>
            <div className="p-2 grid grid-cols-resource md:grid-cols-resource-full items-center">
                {
                    awakenings !== null && awakenings !== undefined ? 
                    <>
                        <h2 className="text-white text-opacity-60" style={{gridColumn: "1 / -1"}}>Awakenings</h2>
                        {
                            awakenings.trackedCatalysts.map((catalyst) => {
                                return (
                                    <ResourceListItem
                                        key={catalyst.id}
                                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                        imageAlt={`${catalyst.code}'s icon`}
                                        resourceName={catalyst.name}
                                        currentCount={catalyst.count.current}
                                        desiredCount={catalyst.count.required}
                                        isTracked={catalyst.count.isTracked}
                                        onCurrentCountChange={(value) => {
                                            const trackedCatalystsCopy = awakenings.trackedCatalysts.map(catalystCopy => {
                                                if (catalystCopy.id === catalyst.id) {
                                                    return {
                                                        ...catalystCopy,
                                                        count: {
                                                            ...catalystCopy.count,
                                                            current: value
                                                        }
                                                    }
                                                } else {
                                                    return catalystCopy
                                                }
                                            })

                                            dispatch(
                                                editAwakening({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    awakening: {
                                                        ids: awakenings.ids,
                                                        trackedRunes: awakenings.trackedRunes,
                                                        trackedCatalysts: trackedCatalystsCopy
                                                    }
                                                })
                                            )
                                        }}
                                        onItemUntracked={() => {
                                            const trackedCatalystsCopy = awakenings.trackedCatalysts.map(catalystCopy => {
                                                if (catalystCopy.id === catalyst.id) {
                                                    return {
                                                        ...catalystCopy,
                                                        count: {
                                                            ...catalystCopy.count,
                                                            isTracked: false
                                                        }
                                                    }
                                                } else {
                                                    return catalystCopy
                                                }
                                            })

                                            dispatch(
                                                editAwakening({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    awakening: {
                                                        ids: awakenings.ids,
                                                        trackedRunes: awakenings.trackedRunes,
                                                        trackedCatalysts: trackedCatalystsCopy
                                                    }
                                                })
                                            )
                                        }}
                                    />  
                                )
                            })
                        }
                        {
                            awakenings.trackedRunes.map((rune) => {
                                return (
                                    <ResourceListItem
                                        key={rune.id}
                                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${rune.code}.png`}
                                        imageAlt={`${rune.name}'s icon`}
                                        resourceName={rune.name}
                                        currentCount={rune.count.current}
                                        desiredCount={rune.count.required}
                                        isTracked={rune.count.isTracked}
                                        onCurrentCountChange={(value) => {
                                            const trackedRunesCopy = awakenings.trackedRunes.map(runeCopy => {
                                                if (runeCopy.id === rune.id) {
                                                    return {
                                                        ...runeCopy,
                                                        count: {
                                                            ...runeCopy.count,
                                                            current: value
                                                        }
                                                    }
                                                } else {
                                                    return runeCopy
                                                }
                                            })

                                            dispatch(
                                                editAwakening({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    awakening: {
                                                        ids: awakenings.ids,
                                                        trackedCatalysts: awakenings.trackedCatalysts,
                                                        trackedRunes: trackedRunesCopy
                                                    }
                                                })
                                            )
                                        }}
                                        onItemUntracked={() => {
                                            const trackedRunesCopy = awakenings.trackedRunes.map(runeCopy => {
                                                if (runeCopy.id === rune.id) {
                                                    return {
                                                        ...runeCopy,
                                                        count: {
                                                            ...runeCopy.count,
                                                            isTracked: false
                                                        }
                                                    }
                                                } else {
                                                    return runeCopy
                                                }
                                            })

                                            dispatch(
                                                editAwakening({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    awakening: {
                                                        ids: awakenings.ids,
                                                        trackedCatalysts: awakenings.trackedCatalysts,
                                                        trackedRunes: trackedRunesCopy
                                                    }
                                                })
                                            )
                                        }}
                                    />  
                                )
                            })
                        }
                    </>
                    : <></>
                } 
                {
                    skills.length !== 0 &&
                    skills.map((skill) => {
                        return (
                            <>
                                <h2 className="text-white text-opacity-60 mt-2" style={{gridColumn: "1 / -1"}}>Skills</h2>
                                {skill.trackedCatalysts.map((catalyst) => {
                                    return (
                                        <ResourceListItem
                                            key={catalyst.id}
                                            imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                            imageAlt={`${catalyst.code}'s icon`}
                                            resourceName={catalyst.name}
                                            currentCount={catalyst.count.current}
                                            desiredCount={catalyst.count.required}
                                            isTracked={catalyst.count.isTracked}
                                            onCurrentCountChange={ (value) => {
                                                const skillTrackedCatalystsCopy = skill.trackedCatalysts.map(catalystCopy => {
                                                    if (catalystCopy.id === catalyst.id) {
                                                        return {
                                                            ...catalystCopy,
                                                            count: {
                                                                ...catalystCopy.count,
                                                                current: value
                                                            }
                                                        }
                                                    } else {
                                                        return catalystCopy
                                                    }
                                                })

                                                const skillCopy = {
                                                    ...skill,
                                                    trackedCatalysts: skillTrackedCatalystsCopy
                                                }

                                                dispatch(
                                                    editSkillEnhancement({
                                                        unitId,
                                                        unitCode,
                                                        unitName,
                                                        skill: skillCopy
                                                    })
                                                )
                                            }
                                            }
                                            onItemUntracked={() => {
                                                const skillTrackedCatalystsCopy = skill.trackedCatalysts.map(catalystCopy => {
                                                    if (catalystCopy.id === catalyst.id) {
                                                        return {
                                                            ...catalystCopy,
                                                            count: {
                                                                ...catalystCopy.count,
                                                                isTracked: false
                                                            }
                                                        }
                                                    } else {
                                                        return catalystCopy
                                                    }
                                                })

                                                const skillCopy = {
                                                    ...skill,
                                                    trackedCatalysts: skillTrackedCatalystsCopy
                                                }

                                                dispatch(
                                                    editSkillEnhancement({
                                                        unitId,
                                                        unitCode,
                                                        unitName,
                                                        skill: skillCopy
                                                    })
                                                )
                                            }}
                                        />
                                    )
                                })}
                                <ResourceListItem
                                    imageSourcePath={GoldIcon}
                                    imageAlt={"Gold icon"}
                                    currentCount={skill.trackedGold.current}
                                    desiredCount={skill.trackedGold.required}
                                    resourceName={"Gold"}
                                    isTracked={skill.trackedGold.isTracked}
                                    onCurrentCountChange={ (value) => {
                                        const skillCopy:TrackedSkill = {
                                            ...skill,
                                            trackedGold: {
                                                ...skill.trackedGold,
                                                current: value
                                            } 
                                        }

                                        dispatch(
                                            editSkillEnhancement({
                                                unitId,
                                                unitCode,
                                                unitName,
                                                skill: skillCopy
                                            })
                                        )
                                    }}
                                    onItemUntracked={() => {
                                        const skillCopy:TrackedSkill = {
                                            ...skill,
                                            trackedGold: {
                                                ...skill.trackedGold,
                                                isTracked: false
                                            } 
                                        }

                                        dispatch(
                                            editSkillEnhancement({
                                                unitId,
                                                unitCode,
                                                unitName,
                                                skill: skillCopy
                                            })
                                        )
                                    }}
                                />
                                {
                                    skill.trackedStigma.required !== 0 ?
                                    <ResourceListItem
                                        imageSourcePath={StigmaIcon}
                                        imageAlt={"Stigma icon"}
                                        currentCount={skill.trackedStigma.current}
                                        desiredCount={skill.trackedStigma.required}
                                        resourceName={"Stigma"}
                                        isTracked={skill.trackedStigma.isTracked }
                                        onCurrentCountChange={ (value) => {
                                            const skillCopy:TrackedSkill = {
                                                ...skill,
                                                trackedStigma: {
                                                    ...skill.trackedStigma,
                                                    current: value
                                                } 
                                            }
                                            
                                            dispatch(
                                                editSkillEnhancement({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    skill: skillCopy
                                                })
                                            )
                                        }}
                                        onItemUntracked={() => {
                                            const skillCopy:TrackedSkill = {
                                                ...skill,
                                                trackedStigma: {
                                                    ...skill.trackedStigma,
                                                    isTracked: false
                                                } 
                                            }
                                            
                                            dispatch(
                                                editSkillEnhancement({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    skill: skillCopy
                                                })
                                            )
                                        }}
                                    />
                                    :
                                    <ResourceListItem
                                        imageSourcePath={MolagoraIcon}
                                        imageAlt={"Molagora icon"}
                                        currentCount={skill.trackedMolagora.current}
                                        desiredCount={skill.trackedMolagora.required}
                                        resourceName={"Molagora"}
                                        isTracked={skill.trackedMolagora.isTracked}
                                        onCurrentCountChange={ (value) => {
                                            const skillCopy:TrackedSkill = {
                                                ...skill,
                                                trackedMolagora: {
                                                    ...skill.trackedMolagora,
                                                    current: value
                                                } 
                                            }
        
                                            dispatch(
                                                editSkillEnhancement({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    skill: skillCopy
                                                })
                                            )
                                        }}
                                        onItemUntracked={() => {
                                            const skillCopy:TrackedSkill = {
                                                ...skill,
                                                trackedMolagora: {
                                                    ...skill.trackedMolagora,
                                                    isTracked: false
                                                } 
                                            }
        
                                            dispatch(
                                                editSkillEnhancement({
                                                    unitId,
                                                    unitCode,
                                                    unitName,
                                                    skill: skillCopy
                                                })
                                            )
                                        }}
                                    />
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}