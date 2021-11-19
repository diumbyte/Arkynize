import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"

import { clearUnitTrackedAwakenings, editAwakening, editTotalFromAwakenings, TrackedAwakeningPayload } from "../../../redux/actions/unitsReducer"
import { TrackedAwakening } from "../../../redux/types"
import { Awakening } from "../../../generated/graphql"

import { TrackableResourceListItem } from "../../components/TrackableResourceListItem"
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
    const [basicCatalystTracked, setBasicCatalystTracked] = useState(true)
    const [epicCatalystTracked, setEpicCatalystTracked] = useState(true)
    const [basicRuneTracked, setBasicRuneTracked] = useState(true)
    const [midRuneTracked, setMidRuneTracked] = useState(true)
    const [topRuneTracked, setTopRuneTracked] = useState(true)


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
                    setEpicCatalystTracked(catalyst.count.isTracked)
                }  else {
                    setBasicCatalystTracked(catalyst.count.isTracked)
                }
            })
            // Update runes
            foundUnit.trackedAwakenings.trackedRunes.forEach(rune => {
                if(rune.type === "basic") {
                    setBasicRuneTracked(rune.count.isTracked)
                } else if(rune.type === "greater") {
                    setMidRuneTracked(rune.count.isTracked)
                } else {
                    setTopRuneTracked(rune.count.isTracked)
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
            basicCatalystTracked,
            epicCatalystTracked,
            basicRuneTracked,
            midRuneTracked,
            topRuneTracked
        )
        
        return (
            <>
            <form
                className="py-6"
                onSubmit={(e) => e.preventDefault()}
            >
                {
                    totalAwakeningsCost.trackedCatalysts.map(catalystCost => {
                        return (
                            <TrackableResourceListItem
                                key={catalystCost.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`}
                                imageAlt={catalystCost.code}
                                desiredCount={catalystCost.count.required}
                                isTracked={catalystCost.count.isTracked}
                                resourceName={catalystCost.name}
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
                {
                    totalAwakeningsCost.trackedRunes.map(runeCost => {
                        return (
                            <TrackableResourceListItem
                                key={runeCost.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${runeCost.code}.png`}
                                imageAlt={runeCost.code}
                                resourceName={runeCost.name}
                                desiredCount={runeCost.count.required}
                                isTracked={runeCost.count.isTracked}
                                onItemToggled={() => {
                                    if(runeCost.type === "basic") {
                                        setBasicRuneTracked(prev => !prev)
                                    } else if(runeCost.type === "greater") {
                                        setMidRuneTracked(prev => !prev)
                                    } else {
                                        setTopRuneTracked(prev => !prev)
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

                        dispatch(
                            editTotalFromAwakenings(totalAwakeningsCost)
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