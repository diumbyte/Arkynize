import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { editAwakening, TrackedCatalysts, TrackedRunes, TrackedUnit } from "../../../redux/actions/unitsReducer"
import { LocalTrackedResource, CatalystCost } from "../types"
import { Awakening } from "../../../generated/graphql"

type RuneCost = {
    id: number,
    name: string,
    code: string,
    count: number,
    type: string
}

type AwakeningCostsData = {
    catalysts: Array<CatalystCost>,
    runes: Array<RuneCost>
}

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
        awakenings: Awakening[], 
        basicCatalystCount: LocalTrackedResource, 
        epicCatalystCount: LocalTrackedResource, 
        basicRune: LocalTrackedResource, 
        midRune: LocalTrackedResource, 
        topRune: LocalTrackedResource
    ): TrackedUnit => {
    const trackedAwakeningIds = awakenings.map(a => a.id)

    const currentCatalysts:TrackedCatalysts[] = awakenings.map(a => {
        const catalystId = a.awakeningCatalystCost.catalyst.id
        const catalystCode = a.awakeningCatalystCost.catalyst.code
        const isEpic = a.awakeningCatalystCost.catalyst.isEpic
        const catalystName = a.awakeningCatalystCost.catalyst.name
        const currentCount = a.awakeningCatalystCost.catalyst.isEpic ? epicCatalystCount.currentCount : basicCatalystCount.currentCount
        const requiredCount = a.awakeningCatalystCost.count

        return {
            catalystId,
            catalystCode,
            isEpic,
            catalystName,
            count: {
                current: currentCount,
                required: requiredCount,
                isTracked: isEpic ? epicCatalystCount.isTracked : basicCatalystCount.isTracked
            }
        }
    }).filter(ca => ca.catalystId !== 37)

    const spreadRunes: TrackedRunes[] = []
    awakenings.forEach(a => {
        a.runeCosts.forEach(rc => {
            if (rc.rune.type === "basic") {
                    const runeData:TrackedRunes = {
                        runeId: rc.rune.id,
                        runeCode: rc.rune.code,
                        runeType: rc.rune.type,
                        runeName: rc.rune.name,
                        count: {
                            current: basicRune.currentCount,
                            required: rc.count,
                            isTracked: basicRune.isTracked
                        }
                    }
                    spreadRunes.push(runeData)
                
            } else if(rc.rune.type === "greater") {
                     const runeData:TrackedRunes = {
                        runeId: rc.rune.id,
                        runeCode: rc.rune.code,
                        runeType: rc.rune.type,
                        runeName: rc.rune.name,
                        count: {
                            current: midRune.currentCount,
                            required: rc.count,
                            isTracked: midRune.isTracked
                        },
                     }
                     spreadRunes.push(runeData)
                 
            } else {
                    const runeData:TrackedRunes = {
                        runeId: rc.rune.id,
                        runeCode: rc.rune.code,
                        runeType: rc.rune.type,
                        runeName: rc.rune.name,
                        count: {
                            current: topRune.currentCount,
                            required: rc.count,
                            isTracked: topRune.isTracked
                        },
                    }
                    spreadRunes.push(runeData)
                
            }
        })
    })

    const currentRunes: TrackedRunes[] = spreadRunes.reduce<TrackedRunes[]>((acc, currentRune) => {
        const runeIdx = acc.findIndex(rune => rune.runeId === currentRune.runeId )

        if(runeIdx !== -1) {
            // It's found. Add it to the current object
            acc[runeIdx].count.required += currentRune.count.required
        } else {
            // New entry. 
            acc.push({
                runeId: currentRune.runeId,
                runeCode: currentRune.runeCode,
                runeType: currentRune.runeType,
                runeName: currentRune.runeName,
                count: {
                    current: currentRune.count.current,
                    required: currentRune.count.required,
                    isTracked: currentRune.count.isTracked
                },
            })
        }

        return acc;
    }, []);

    
    const res: TrackedUnit = {
        unitId,
        unitCode,
        unitName,
        awakenings: {
            trackedAwakeningIds,
            currentCatalysts,
            currentRunes
        },
        skills: []
    }

    return res
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
        // .slice() just goes to the end of the array even if the second arg goes past awakening.length
        const targetAwakenings = awakenings.slice(currentAwakeningsIdx + 1, desiredAwakeningsIdx + 1)
        
        const res = targetAwakenings.reduce<AwakeningCostsData>( (acc, currObj) => {
            const catalystIdx = acc.catalysts.findIndex(c => c.id === currObj.awakeningCatalystCost.id)
            if(catalystIdx >= 0) {
                acc.catalysts[catalystIdx].count += currObj.awakeningCatalystCost.count
            } else if(currObj.awakeningCatalystCost.count !== 0) {
                acc.catalysts.push({
                    id: currObj.awakeningCatalystCost.catalyst.id,
                    name: currObj.awakeningCatalystCost.catalyst.name,
                    code: currObj.awakeningCatalystCost.catalyst.code,
                    count: currObj.awakeningCatalystCost.count,
                    isEpic: currObj.awakeningCatalystCost.catalyst.isEpic
                })
            }

            currObj.runeCosts.forEach(runeCost => {
                const runeIdx = acc.runes.findIndex(r => r.id === runeCost.rune.id)

                if(runeIdx >= 0) {
                    acc.runes[runeIdx].count += runeCost.count
                } else {
                    acc.runes.push({
                        id: runeCost.rune.id,
                        name: runeCost.rune.name,
                        code: runeCost.rune.code,
                        count: runeCost.count,
                        type: runeCost.rune.type
                    })
                }
            })

            return acc
        }, {
            catalysts: [],
            runes: []
        })

        
        return (
            <>
                {
                    res.catalysts.map(catalystCost => {
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
                                        max={catalystCost.count}
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
                                        <span className="pl-2">/ {catalystCost.count}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    res.runes.map(runeCost => {
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
                                        max={runeCost.count}
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
                                        <span className="pl-2">/ {runeCost.count}</span>
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
                                        targetAwakenings, 
                                        basicCatalyst, 
                                        epicCatalyst, 
                                        basicRune, 
                                        midRune, 
                                        topRune
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