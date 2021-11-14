import GoldIcon from "../../../assets/gold.png"
import StigmaIcon from "../../../assets/stigma.png"
import MolagoraIcon from "../../../assets/molagora.png"

import { useHistory } from "react-router"
import { useAppDispatch } from "../../../redux/hooks"
import { editAwakening, editSkillEnhancement, toggleTotalCatalyst, toggleTotalRune, toggleTotalGold, toggleTotalStigma, toggleTotalMolagora } from "../../../redux/actions/unitsReducer"
import { TrackedAwakening, TrackedSkill } from "../../../redux/types"
import { EditableResourceListItem } from "../../components/EditableResourceListItem"

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
    const history = useHistory();

    return (
        <div 
            id={unitId.toString()}
            className="flex-1 bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-full md:w-1/4 max-w-4xl text-sm my-2 md:mx-2"
        >
            <div className="row border-b border-black border-opacity-20 py-1">
                <img 
                    className="object-contain cursor-pointer"
                    width={40}
                    src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unitCode}.png`} 
                    alt={`${unitName}'s icon`}
                    onClick={() => history.push(`/unit/${unitId}`)}
                />
                <span className="text-2xl px-2 text-center">
                    {unitName}
                </span>
            </div>
            <div className="p-2">
                {
                    awakenings !== null && awakenings !== undefined ? 
                    <div className="grid grid-cols-resource md:grid-cols-resource-full items-center">
                        <h2 className="text-white text-opacity-60" style={{gridColumn: "1 / -1"}}>Awakenings</h2>
                        {
                            awakenings.trackedCatalysts.map((catalyst) => {
                                return (
                                    <EditableResourceListItem
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
                                                            isTracked: !catalystCopy.count.isTracked
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

                                            dispatch(
                                                toggleTotalCatalyst(catalyst)
                                            )
                                        }}
                                    />  
                                )
                            })
                        }
                        {
                            awakenings.trackedRunes.map((rune) => {
                                return (
                                    <EditableResourceListItem
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
                                                            isTracked: !runeCopy.count.isTracked
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

                                            dispatch(
                                                toggleTotalRune(rune)
                                            )
                                        }}
                                    />  
                                )
                            })
                        }
                    </div>
                    : <></>
                } 
                {
                    skills.length !== 0 &&
                    skills.map((skill) => {
                        return (
                            <div key={skill.id} className="grid grid-cols-resource md:grid-cols-resource-full items-center">
                                <h2 className="text-white text-opacity-60 mt-2" style={{gridColumn: "1 / -1"}}>{`Skill ${skill.type}`}</h2>
                                {skill.trackedCatalysts.map((catalyst) => {
                                    return (
                                        <EditableResourceListItem
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
                                                                isTracked: !catalystCopy.count.isTracked
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

                                                dispatch(
                                                    toggleTotalCatalyst(catalyst)
                                                )
                                            }}
                                        />
                                    )
                                })}
                                <EditableResourceListItem
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
                                                isTracked: !skill.trackedGold.isTracked
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

                                        dispatch(
                                            toggleTotalGold(skill.trackedGold)
                                        )
                                    }}
                                />
                                {
                                    skill.trackedStigma.required !== 0 ?
                                    <EditableResourceListItem
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
                                                    isTracked: !skill.trackedStigma.isTracked
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

                                            dispatch(
                                                toggleTotalStigma(skill.trackedStigma)
                                            )
                                        }}
                                    />
                                    :
                                    <EditableResourceListItem
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
                                                    isTracked: !skill.trackedMolagora.isTracked
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

                                            dispatch(
                                                toggleTotalMolagora(skill.trackedMolagora)
                                            )
                                        }}
                                    />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}