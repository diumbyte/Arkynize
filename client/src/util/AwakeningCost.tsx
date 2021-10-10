import react, { ReactElement } from "react"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { editAwakening } from "../redux/actions/unitsReducer"
import { Awakening } from "../generated/graphql"

type CatalystCost = {
    id: number,
    code: string,
    count: number
}

type RuneCost = {
    id: number,
    code: string,
    count: number
}

type AwakeningCosts = {
    catalysts: Array<CatalystCost>,
    runes: Array<RuneCost>
}

type RenderAwakeningCostsProps = {
    currentAwakeningsIdx: number, 
    desiredAwakeningsIdx: number, 
    awakenings: Array<Awakening>
}

const AwakeningCosts = (
    {
        currentAwakeningsIdx, 
        desiredAwakeningsIdx, 
        awakenings
    }: RenderAwakeningCostsProps) => 
    {
    const {units} = useAppSelector(state => state.units)
    const dispatch = useAppDispatch();
    
    if(currentAwakeningsIdx < desiredAwakeningsIdx) {
        // .slice() just goes to the end of the array even if the second arg goes past awakening.length
        const targetAwakenings = awakenings.slice(currentAwakeningsIdx + 1, desiredAwakeningsIdx + 1).map(a => ({
            id: a.id,
            state: a.state,
            runeCosts: a.runeCosts,
            awakeningCatalystCost: a.awakeningCatalystCost
        }))
        
        const res = targetAwakenings.reduce<AwakeningCosts>( (acc, currObj) => {
            const catalystIdx = acc.catalysts.findIndex(c => c.id === currObj.awakeningCatalystCost.id)
            if(catalystIdx >= 0) {
                acc.catalysts[catalystIdx].count += currObj.awakeningCatalystCost.count
            } else if(currObj.awakeningCatalystCost.count !== 0) {
                acc.catalysts.push({
                    id: currObj.awakeningCatalystCost.catalyst.id,
                    code: currObj.awakeningCatalystCost.catalyst.code,
                    count: currObj.awakeningCatalystCost.count
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
                        count: runeCost.count
                    })
                }
            })

            return acc
        }, {
            catalysts: [],
            runes: []
        })

        console.log(res);
        

        return (
            <>
                {
                    res.catalysts.map(catalystCost => {
                        return (
                            <div key={catalystCost.id} className="row w-80 md:w-1/2 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`} alt={catalystCost.code}/>
                                <span>{catalystCost.count}</span>
                            </div>
                        )
                    })
                }
                {
                    res.runes.map(runeCost => {
                        return (
                            <div key={runeCost.id} className="row w-80 md:w-1/2 justify-between border-b-2 border-tavernBrown-light border-opacity-40 last:border-b-0">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/rune/${runeCost.code}.png`} alt={runeCost.code}/>
                                <span>{runeCost.count}</span>
                            </div>
                        )
                    })
                }
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