import React, { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { editAwakening, TrackedRunes, TrackedUnit } from "../../redux/actions/unitsReducer"
import { Awakening } from "../../generated/graphql"

type CatalystCost = {
    id: number,
    name: string,
    code: string,
    count: number,
    isEpic: boolean
}

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

const buildDispatchData = (unitId: number, unitCode: string, unitName: string, awakenings: Awakening[], basicCatalystCount: number, epicCatalystCount: number, basicRune: number, midRune: number, topRune: number): TrackedUnit => {
    const trackedAwakeningIds = awakenings.map(a => a.id)

    const currentCatalysts = awakenings.map(a => {
        const catalystId = a.awakeningCatalystCost.catalyst.id
        const isEpic = a.awakeningCatalystCost.catalyst.isEpic
        const catalystName = a.awakeningCatalystCost.catalyst.name
        const currentCount = a.awakeningCatalystCost.catalyst.isEpic ? epicCatalystCount : basicCatalystCount
        const desiredCount = a.awakeningCatalystCost.count

        return {
            catalystId,
            isEpic,
            catalystName,
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
                        runeType: rc.rune.type,
                        runeName: rc.rune.name,
                        currentCount: basicRune,
                        desiredCount: rc.count
                    }
                    spreadRunes.push(runeData)
                }
            } else if(rc.rune.type === "greater") {
                 if(midRune !== 0) {
                     const runeData = {
                        runeId: rc.rune.id,
                        runeType: rc.rune.type,
                        runeName: rc.rune.name,
                        currentCount: midRune,
                        desiredCount: rc.count
                     }
                     spreadRunes.push(runeData)
                 }
            } else {
                if(topRune !== 0) {
                    const runeData = {
                        runeId: rc.rune.id,
                        runeType: rc.rune.type,
                        runeName: rc.rune.name,
                        currentCount: topRune, 
                        desiredCount: rc.count
                    }
                    spreadRunes.push(runeData)
                }
            }
        })
    })

    console.log(spreadRunes);
    

    const currentRunes: TrackedRunes[] = spreadRunes.reduce<TrackedRunes[]>((acc, currentRune) => {
        const runeIdx = acc.findIndex(rune => rune.runeId === currentRune.runeId )

        if(runeIdx !== -1) {
            // It's found. Add it to the current object
            acc[runeIdx].desiredCount += currentRune.desiredCount
        } else {
            // New entry. 
            acc.push({
                runeId: currentRune.runeId,
                runeType: currentRune.runeType,
                runeName: currentRune.runeName,
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
        awakenings,
        setModalOpen
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


    // Update local state if materials are already being tracked and stored in redux store
    useEffect(() => {
        // Check if awakenings exist for current unit id
        const unitIdx = units.findIndex(unit => unit.unitId === unitId && unit.awakenings)
        if (unitIdx !== -1){
            // Update local states
            // Update catalysts
            units[unitIdx].awakenings.currentCatalysts.forEach(catalyst => {
                if(catalyst.isEpic) {
                    setEpicCatalyst(catalyst.currentCount)
                }  else {
                    setBasicCatalyst(catalyst.currentCount)
                }
            })
            // Update runes
            units[unitIdx].awakenings.currentRunes.forEach(rune => {
                if(rune.runeType === "basic") {
                    setBasicRune(rune.currentCount)
                } else if(rune.runeType === "greater") {
                    setMidRune(rune.currentCount)
                } else {
                    setTopRune(rune.currentCount)
                }
            })
        }
    }, [])

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
        
        const res = mappedTargetAwakenings.reduce<AwakeningCostsData>( (acc, currObj) => {
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
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(editAwakening(buildDispatchData(unitId as number, unitCode as string, unitName as string, targetAwakenings, basicCatalyst, epicCatalyst, basicRune, midRune, topRune)))
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