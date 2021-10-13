import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { editAwakening, TrackedAwakening, TrackedRunes, TrackedUnit } from "../../redux/actions/unitsReducer"
import { Awakening } from "../../generated/graphql"
import e from "cors"

type CatalystCost = {
    id: number,
    code: string,
    count: number,
    isEpic: boolean
}

type RuneCost = {
    id: number,
    code: string,
    count: number,
    type: string
}

type AwakeningCosts = {
    catalysts: Array<CatalystCost>,
    runes: Array<RuneCost>
}

type RenderAwakeningCostsProps = {
    unitId?: number,
    unitCode?: string,
    unitName?: string,
    currentAwakeningsIdx: number, 
    desiredAwakeningsIdx: number, 
    awakenings: Array<Awakening>
}

const buildDispatchData = (unitId: number, unitCode: string, unitName: string, awakenings: Awakening[], basicCatalystCount: number, epicCatalystCount: number, basicRune: number, midRune: number, topRune: number): TrackedUnit => {
    const trackedAwakeningIds = awakenings.map(a => a.id)

    const currentCatalysts = awakenings.map(a => {
        const catalystId = a.awakeningCatalystCost.catalyst.id
        const currentCount = a.awakeningCatalystCost.catalyst.isEpic ? epicCatalystCount : basicCatalystCount
        const desiredCount = a.awakeningCatalystCost.count

        return {
            catalystId,
            currentCount,
            desiredCount
        }
    }).filter(ca => ca.catalystId !== 37 && ca.currentCount !== 0)

    const spreadRunes: TrackedRunes[] = []
    awakenings.forEach(a => {
        a.runeCosts.forEach(rc => {
            if (rc.rune.type === "basic") {
                if(basicRune !== 0) {
                    const runeData = {
                        runeId: rc.rune.id,
                        currentCount: basicRune,
                        desiredCount: rc.count
                    }
                    spreadRunes.push(runeData)
                }
            } else if(rc.rune.type === "greater") {
                 if(midRune !== 0) {
                     const runeData = {
                         runeId: rc.rune.id,
                         currentCount: midRune,
                         desiredCount: rc.count
                     }
                     spreadRunes.push(runeData)
                 }
            } else {
                if(topRune !== 0) {
                    const runeData = {
                        runeId: rc.rune.id,
                        currentCount: topRune, 
                        desiredCount: rc.count
                    }
                    spreadRunes.push(runeData)
                }
            }
        })
    })

    const currentRunes: TrackedRunes[] = spreadRunes.reduce<TrackedRunes[]>((acc, currentRune) => {
        const runeIdx = acc.findIndex(rune => rune.runeId === currentRune.runeId )

        if(runeIdx !== -1) {
            // It's found. Add it to the current object
            acc[runeIdx].currentCount += currentRune.currentCount
        } else {
            // New entry. 
            acc.push({
                runeId: currentRune.runeId,
                currentCount: currentRune.currentCount,
                desiredCount: currentRune.desiredCount
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
        awakenings
    }: RenderAwakeningCostsProps) => 
    {
    const {units} = useAppSelector(state => state.units)
    const dispatch = useAppDispatch();

    // Local state management
    const [basicCatalyst, setBasicCatalyst] = useState<number>(0)
    const [epicCatalyst, setEpicCatalyst] = useState<number>(0)
    const [basicRune, setBasicRune] = useState<number>(0)
    const [midRune, setMidRune] = useState<number>(0)
    const [topRune, setTopRune] = useState<number>(0)

    // Calculation 
    if(currentAwakeningsIdx < desiredAwakeningsIdx) {
        // .slice() just goes to the end of the array even if the second arg goes past awakening.length
        const targetAwakenings = awakenings.slice(currentAwakeningsIdx + 1, desiredAwakeningsIdx + 1)

        const mappedTargetAwakenings = targetAwakenings.map(a => ({
            id: a.id,
            state: a.state,
            runeCosts: a.runeCosts,
            awakeningCatalystCost: a.awakeningCatalystCost
        }))
        
        const res = mappedTargetAwakenings.reduce<AwakeningCosts>( (acc, currObj) => {
            const catalystIdx = acc.catalysts.findIndex(c => c.id === currObj.awakeningCatalystCost.id)
            if(catalystIdx >= 0) {
                acc.catalysts[catalystIdx].count += currObj.awakeningCatalystCost.count
            } else if(currObj.awakeningCatalystCost.count !== 0) {
                acc.catalysts.push({
                    id: currObj.awakeningCatalystCost.catalyst.id,
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
                                        value={catalystCost.isEpic ? epicCatalyst : basicCatalyst}
                                        max={catalystCost.count}
                                        min={0}
                                        onChange={(e) => {
                                            if(catalystCost.isEpic) {
                                                setEpicCatalyst(Number(e.target.value))
                                            } else {
                                                setBasicCatalyst(Number(e.target.value))
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
                                        value={runeCost.type === "basic" ? basicRune
                                                : runeCost.type === "greater" ? midRune
                                                : topRune }
                                        onChange={(e) => {
                                            if(runeCost.type === "basic") {
                                                setBasicRune(Number(e.target.value))
                                            } else if(runeCost.type === "greater") {
                                                setMidRune(Number(e.target.value))
                                            } else {
                                                setTopRune(Number(e.target.value))
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
                        onClick={(e) => {
                            e.preventDefault();
                            res.catalysts.forEach(trackedCatalysts => {
                                if(trackedCatalysts.isEpic) {
                                    setEpicCatalyst(0)
                                } else {
                                    setBasicCatalyst(0)
                                }
                            })
                            res.runes.forEach(trackedRunes => {
                                if(trackedRunes.type === "basic") {
                                    setBasicRune(0)
                                } else if(trackedRunes.type === "greater") {
                                    setMidRune(0)
                                } else {
                                    setTopRune(0)
                                }   
                            })
                            dispatch(editAwakening(buildDispatchData(unitId as number, unitCode as string, unitName as string, targetAwakenings, basicCatalyst, epicCatalyst, basicRune, midRune, topRune)))
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