import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"

import { clearUnitTrackedAwakenings, editAwakening, TrackedAwakeningPayload } from "../../../redux/actions/unitsReducer"
import { TrackedAwakening } from "../../../redux/types"
import { LocalTrackedResource } from "../types"
import { Awakening } from "../../../generated/graphql"

import { EditableResourceListItem } from "../../components/EditableResourceListItem"
import { calculateTotalAwakeningsCosts } from "../../../util/calculateCosts"

type RenderAwakeningCostsProps = {
    unitId?: number,
    unitCode?: string,
    unitName?: string,
    currentAwakeningsIdx: number, 
    desiredAwakeningsIdx: number, 
    awakenings: Awakening[],
    setModalOpen: Function
}

const buildDispatchData = (
        unitId: number, 
        unitCode: string, 
        unitName: string, 
        awakeningsCost: TrackedAwakening
    ): TrackedAwakeningPayload => {

    return {
        unitId,
        unitCode,
        unitName,
        awakening: {
            ...awakeningsCost
        }
    }
}

const AwakeningCosts = (
    {
        unitId,
        unitCode,
        unitName,
        currentAwakeningsIdx, 
        desiredAwakeningsIdx, 
        awakenings,
        setModalOpen
    }: RenderAwakeningCostsProps) => 
    {
    const {trackedUnits} = useAppSelector(state => state.units)
    const dispatch = useAppDispatch();


    // Local state management
    const [basicCatalyst, setBasicCatalyst] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [epicCatalyst, setEpicCatalyst] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [basicRune, setBasicRune] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [midRune, setMidRune] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [topRune, setTopRune] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})


    // Update local state if materials are already being tracked and stored in redux store
    useEffect(() => {
        // Check if awakenings exist for current unit id
        const unitIdx = trackedUnits.findIndex(unit => unit.id === unitId && unit.trackedAwakenings)
        if (unitIdx !== -1){
            const foundUnit = trackedUnits[unitIdx]
            if(!foundUnit.trackedAwakenings) {
                return
            }
            // Update local states
            // Update catalysts
            foundUnit.trackedAwakenings.trackedCatalysts.forEach(catalyst => {
                if(catalyst.isEpic) {
                    setEpicCatalyst({
                        currentCount: catalyst.count.current,
                        isTracked: catalyst.count.isTracked
                    })
                }  else {
                    setBasicCatalyst({
                        currentCount: catalyst.count.current,
                        isTracked: catalyst.count.isTracked
                    })
                }
            })
            // Update runes
            foundUnit.trackedAwakenings.trackedRunes.forEach(rune => {
                if(rune.type === "basic") {
                    setBasicRune({
                        currentCount: rune.count.current,
                        isTracked: rune.count.isTracked
                    })
                } else if(rune.type === "greater") {
                    setMidRune({
                        currentCount: rune.count.current,
                        isTracked: rune.count.isTracked
                    })
                } else {
                    setTopRune({
                        currentCount: rune.count.current,
                        isTracked: rune.count.isTracked
                    })
                }
            })
        }
    }, [unitId, trackedUnits])

    // Calculation 
    if(currentAwakeningsIdx < desiredAwakeningsIdx) {
        const totalAwakeningsCost = calculateTotalAwakeningsCosts(
            awakenings,
            currentAwakeningsIdx,
            desiredAwakeningsIdx,
            basicCatalyst,
            epicCatalyst,
            basicRune,
            midRune,
            topRune
        )
        
        return (
            <>
            <form
                className="grid py-6 grid-cols-resource md:grid-cols-resource-full items-center"
                onSubmit={(e) => e.preventDefault()}
            >
                {
                    totalAwakeningsCost.trackedCatalysts.map(catalystCost => {
                        return (
                            <EditableResourceListItem
                                key={catalystCost.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`}
                                imageAlt={catalystCost.code}
                                currentCount={catalystCost.isEpic ? epicCatalyst.currentCount : basicCatalyst.currentCount}
                                desiredCount={catalystCost.count.required}
                                isTracked={catalystCost.count.isTracked}
                                resourceName={catalystCost.name}
                                onCurrentCountChange={(value) => {
                                    if(catalystCost.isEpic) {
                                        setEpicCatalyst(prev => ({
                                            currentCount: value,
                                            isTracked: prev.isTracked
                                        }))
                                    } else {
                                        setBasicCatalyst(prev => ({
                                            currentCount: value,
                                            isTracked: prev.isTracked
                                        }))
                                    }
                                }}
                                onItemUntracked={() => {
                                    if(catalystCost.isEpic) {
                                        setEpicCatalyst(prev => ({...prev, isTracked: false}))
                                    } else {
                                        setBasicCatalyst(prev => ({...prev, isTracked: false}))
                                    }
                                }}
                            />
                        )
                    })
                }
                {
                    totalAwakeningsCost.trackedRunes.map(runeCost => {
                        return (
                            <EditableResourceListItem
                                key={runeCost.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${runeCost.code}.png`}
                                imageAlt={runeCost.code}
                                resourceName={runeCost.name}
                                currentCount={
                                    runeCost.type === "basic" ? basicRune.currentCount
                                    : runeCost.type === "greater" ? midRune.currentCount
                                    : topRune.currentCount
                                }
                                desiredCount={runeCost.count.required}
                                isTracked={runeCost.count.isTracked}
                                onCurrentCountChange={(value) => {
                                    if(runeCost.type === "basic") {
                                        setBasicRune(prevState => ({
                                            currentCount: value,
                                            isTracked: prevState.isTracked
                                        }))
                                    } else if(runeCost.type === "greater") {
                                        setMidRune(prevState => ({
                                            currentCount: value,
                                            isTracked: prevState.isTracked
                                        }))
                                    } else {
                                        setTopRune(prevState => ({
                                            currentCount: value,
                                            isTracked: prevState.isTracked
                                        }))
                                    }
                                }}
                                onItemUntracked={() => {
                                    if(runeCost.type === "basic") {
                                        setBasicRune(prev => ({...prev, isTracked: false}))
                                    } else if(runeCost.type === "greater") {
                                        setMidRune(prev => ({...prev, isTracked: false}))
                                    } else {
                                        setTopRune(prev => ({...prev, isTracked: false}))
                                    }
                                }}
                            />
                        )
                    })
                }
            </form>
            <div className="w-full row items-center">
                <button 
                    className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                            editAwakening(
                                buildDispatchData(
                                    unitId as number, 
                                    unitCode as string, 
                                    unitName as string, 
                                    totalAwakeningsCost
                                )
                            )
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
                        dispatch(clearUnitTrackedAwakenings({unitId: unitId as number}))

                        setModalOpen(false)
                    }}
                >
                    Reset
                </div>
            </div>
            </>
        )
    }

    return (
        <div>
            Not A Valid Selection
        </div>
    )
}

export default AwakeningCosts