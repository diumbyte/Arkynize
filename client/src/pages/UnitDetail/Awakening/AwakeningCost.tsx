import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { editAwakening } from "../../../redux/actions/unitsReducer"
import { TrackedAwakening, TrackedUnit } from "../../../redux/types"
import { LocalTrackedResource } from "../types"
import { Awakening } from "../../../generated/graphql"
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
    ): TrackedUnit => {

    return {
        id: unitId,
        code: unitCode,
        name: unitName,
        trackedAwakenings: {
            ...awakeningsCost
        },
        trackedSkills: []
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
                {
                    totalAwakeningsCost.trackedCatalysts.map(catalystCost => {
                        return (
                            <div key={catalystCost.id} className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`} alt={catalystCost.code}/>
                                <div className="row justify-end">
                                    <input 
                                        className="py-2 px-2 text-black w-60" 
                                        type="number" 
                                        name={`catalyst_${catalystCost.id}_current`} 
                                        id={`catalyst_${catalystCost.id}_current`} 
                                        value={catalystCost.isEpic ? epicCatalyst.currentCount : basicCatalyst.currentCount}
                                        max={catalystCost.count.required}
                                        min={0}
                                        onChange={(e) => {
                                            if(catalystCost.isEpic) {
                                                setEpicCatalyst(prev => ({
                                                    currentCount: Number(e.target.value),
                                                    isTracked: prev.isTracked
                                                }))
                                            } else {
                                                setBasicCatalyst(prev => ({
                                                    currentCount: Number(e.target.value),
                                                    isTracked: prev.isTracked
                                                }))
                                            }
                                        }}
                                    />
                                    <div className="min-w-45">
                                        <span className="pl-2">/ {catalystCost.count.required}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    totalAwakeningsCost.trackedRunes.map(runeCost => {
                        return (
                            <div key={runeCost.id} className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40 last:border-b-0">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/rune/${runeCost.code}.png`} alt={runeCost.code}/>
                                <div className="row justify-end">
                                    <input 
                                        className="py-2 px-2 text-black w-60" 
                                        type="number" 
                                        name={`rune_${runeCost.id}_current`} 
                                        id={`rune_${runeCost.id}_current`} 
                                        min={0}
                                        max={runeCost.count.required}
                                        value={runeCost.type === "basic" ? basicRune.currentCount
                                                : runeCost.type === "greater" ? midRune.currentCount
                                                : topRune.currentCount }
                                        onChange={(e) => {
                                            if(runeCost.type === "basic") {
                                                setBasicRune(prevState => ({
                                                    currentCount: Number(e.target.value),
                                                    isTracked: prevState.isTracked
                                                }))
                                            } else if(runeCost.type === "greater") {
                                                setMidRune(prevState => ({
                                                    currentCount: Number(e.target.value),
                                                    isTracked: prevState.isTracked
                                                }))
                                            } else {
                                                setTopRune(prevState => ({
                                                    currentCount: Number(e.target.value),
                                                    isTracked: prevState.isTracked
                                                }))
                                            }
                                        }}
                                    />
                                    <div className="min-w-45">
                                        <span className="pl-2">/ {runeCost.count.required}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="w-full row">
                    <button 
                        className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2 mt-2"
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
                        Track!
                    </button>
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