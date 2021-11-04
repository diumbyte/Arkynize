import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { editAwakening, TrackedAwakening, TrackedUnit } from "../../../redux/actions/unitsReducer"
import { LocalTrackedResource } from "../types"
import { Awakening } from "../../../generated/graphql"
import { calculateTotalAwakeningsCosts } from "../../../util/calculateCosts"

type RenderAwakeningCostsProps = {
    unitId?: number,
    unitCode?: string,
    unitName?: string,
    currentAwakeningsIdx: number, 
    desiredAwakeningsIdx: number, 
    awakenings: Array<Awakening>,
    setModalOpen: Function
}

const buildDispatchData = (
        unitId: number, 
        unitCode: string, 
        unitName: string, 
        awakeningsCost: TrackedAwakening
    ): TrackedUnit => {

    return {
        unitId,
        unitCode,
        unitName,
        awakenings: {
            ...awakeningsCost
        },
        skills: []
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
    const {units} = useAppSelector(state => state.units)
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
        const unitIdx = units.findIndex(unit => unit.unitId === unitId && unit.awakenings)
        if (unitIdx !== -1){
            const foundUnit = units[unitIdx]
            if(!foundUnit.awakenings) {
                return
            }
            // Update local states
            // Update catalysts
            foundUnit.awakenings.currentCatalysts.forEach(catalyst => {
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
            foundUnit.awakenings.currentRunes.forEach(rune => {
                if(rune.runeType === "basic") {
                    setBasicRune({
                        currentCount: rune.count.current,
                        isTracked: rune.count.isTracked
                    })
                } else if(rune.runeType === "greater") {
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
    }, [unitId, units])

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
                    totalAwakeningsCost.currentCatalysts.map(catalystCost => {
                        return (
                            <div key={catalystCost.catalystId} className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.catalystCode}.png`} alt={catalystCost.catalystCode}/>
                                <div className="row justify-end">
                                    <input 
                                        className="py-2 px-2 text-black w-60" 
                                        type="number" 
                                        name={`catalyst_${catalystCost.catalystId}_current`} 
                                        id={`catalyst_${catalystCost.catalystId}_current`} 
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
                    totalAwakeningsCost.currentRunes.map(runeCost => {
                        return (
                            <div key={runeCost.runeId} className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40 last:border-b-0">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/rune/${runeCost.runeCode}.png`} alt={runeCost.runeCode}/>
                                <div className="row justify-end">
                                    <input 
                                        className="py-2 px-2 text-black w-60" 
                                        type="number" 
                                        name={`rune_${runeCost.runeId}_current`} 
                                        id={`rune_${runeCost.runeId}_current`} 
                                        min={0}
                                        max={runeCost.count.required}
                                        value={runeCost.runeType === "basic" ? basicRune.currentCount
                                                : runeCost.runeType === "greater" ? midRune.currentCount
                                                : topRune.currentCount }
                                        onChange={(e) => {
                                            if(runeCost.runeType === "basic") {
                                                setBasicRune(prevState => ({
                                                    currentCount: Number(e.target.value),
                                                    isTracked: prevState.isTracked
                                                }))
                                            } else if(runeCost.runeType === "greater") {
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