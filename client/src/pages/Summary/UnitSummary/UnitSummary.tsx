import { useHistory } from "react-router"
import { Tab } from "@headlessui/react"

import GoldIcon from "../../../assets/gold.png"
import StigmaIcon from "../../../assets/stigma.png"
import MolagoraIcon from "../../../assets/molagora.png"

import { useAppDispatch } from "../../../redux/hooks"
import { editAwakening, editSkillEnhancement, toggleTotalCatalyst, toggleTotalRune, toggleTotalGold, toggleTotalStigma, toggleTotalMolagora } from "../../../redux/actions/unitsReducer"
import { TrackedAwakening, TrackedSkill } from "../../../redux/types"
import { TrackableResourceListItem } from "../../components/TrackableResourceListItem"

type UnitSummaryProps = {
    unitId: number,
    unitName: string,
    unitCode: string,
    awakenings: TrackedAwakening,
    skills: TrackedSkill[]
}

const tabClasses = (selected: boolean, isDisabled: boolean) => {
    console.log(isDisabled);
    
    return `w-full py-2.5 text-sm leading-5 font-medium
    ${selected ? "bg-transparent text-blue-600 border-b-2 border-blue-600" : 
        isDisabled ? "cursor-not-allowed text-white text-opacity-30"
            : "text-white hover:text-opacity-90"
    }`
}

const calculateDefaultTab = (awakenings: TrackedAwakening) => {
    const awakeningTabIdx = 0
    const skillsTabIdx = 1

    if(isAwakeningsValid(awakenings)) {
        return awakeningTabIdx
    } else {
        return skillsTabIdx
    }
}

const isAwakeningsValid = (awakenings: TrackedAwakening) => {
    return awakenings !== null && awakenings !== undefined
}

const isSkillsValid = (skills: TrackedSkill[]) => {
    return skills.length !== 0
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
            className="bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-full md:w-1/4 max-w-4xl text-sm my-2 md:mx-2"
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
                <Tab.Group defaultIndex={calculateDefaultTab(awakenings)}>
                    <Tab.List className="flex space-x-1 border-b border-white border-opacity-30">
                        <Tab className={({selected}) => tabClasses(selected, !isAwakeningsValid(awakenings))} disabled={!isAwakeningsValid(awakenings)}>Awakenings</Tab>
                        <Tab className={({selected}) => tabClasses(selected, !isSkillsValid(skills))} disabled={!isSkillsValid(skills)}>Skills</Tab>
                    </Tab.List>
                    <Tab.Panel>
                    {
                    isAwakeningsValid(awakenings) ? 
                    <>
                        {
                            awakenings.trackedCatalysts.map((catalyst) => {
                                return (
                                    <TrackableResourceListItem
                                        key={catalyst.id}
                                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                        imageAlt={`${catalyst.code}'s icon`}
                                        resourceName={catalyst.name}
                                        desiredCount={catalyst.count.required}
                                        isTracked={catalyst.count.isTracked}
                                        onItemToggled={() => {
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
                                    <TrackableResourceListItem
                                        key={rune.id}
                                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${rune.code}.png`}
                                        imageAlt={`${rune.name}'s icon`}
                                        resourceName={rune.name}
                                        desiredCount={rune.count.required}
                                        isTracked={rune.count.isTracked}
                                        onItemToggled={() => {
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
                    </>
                    : <></>
                    } 
                    </Tab.Panel>
                    <Tab.Panel>
                    {
                    isSkillsValid(skills) &&
                    skills.map((skill) => {
                        return (
                            <div key={skill.id} className="p-2">
                                <h2 className="text-white text-opacity-60 mt-2">{`Skill ${skill.type}`}</h2>
                                {skill.trackedCatalysts.map((catalyst) => {
                                    return (
                                        <TrackableResourceListItem
                                            key={catalyst.id}
                                            imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                            imageAlt={`${catalyst.code}'s icon`}
                                            resourceName={catalyst.name}
                                            desiredCount={catalyst.count.required}
                                            isTracked={catalyst.count.isTracked}
                                            onItemToggled={() => {
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
                                <TrackableResourceListItem
                                    imageSourcePath={GoldIcon}
                                    imageAlt={"Gold icon"}
                                    desiredCount={skill.trackedGold.required}
                                    resourceName={"Gold"}
                                    isTracked={skill.trackedGold.isTracked}
                                    onItemToggled={() => {
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
                                    <TrackableResourceListItem
                                        imageSourcePath={StigmaIcon}
                                        imageAlt={"Stigma icon"}
                                        desiredCount={skill.trackedStigma.required}
                                        resourceName={"Stigma"}
                                        isTracked={skill.trackedStigma.isTracked }
                                        onItemToggled={() => {
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
                                    <TrackableResourceListItem
                                        imageSourcePath={MolagoraIcon}
                                        imageAlt={"Molagora icon"}
                                        desiredCount={skill.trackedMolagora.required}
                                        resourceName={"Molagora"}
                                        isTracked={skill.trackedMolagora.isTracked}
                                        onItemToggled={() => {
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
                    </Tab.Panel>
                </Tab.Group>


            </div>
        </div>
    )
}