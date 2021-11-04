import { useEffect, useState } from "react"
import { Enhancement } from "../../../generated/graphql"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { TrackedEnhancement, editSkillEnhancement, TrackedSkillPayload, TrackedCatalyst, ITrackeableCount } from "../../../redux/actions/unitsReducer"
import { LocalTrackedResource } from "../types"
import GoldIcon from "../../../assets/gold.png"
import MolagoraIcon from "../../../assets/molagora.png"
import StigmaIcon from "../../../assets/stigma.png"

type SkillEnhancementCostProps = {
    unitId: number,
    unitCode: string,
    unitName: string,
    skillId: number,
    currentEnhancementId: number,
    desiredEnhancementId: number,
    setModalOpen: Function,
    enhancements: Enhancement[]
}

type SkillEnhancementTotalCostData = {
    gold: ITrackeableCount,
    molagora: ITrackeableCount,
    stigma: ITrackeableCount,
    catalysts: TrackedCatalyst[]
}

const buildDispatchData = (
    unitId: number, 
    unitName: string, 
    unitCode: string, 
    skillId: number, 
    enhancements: Enhancement[], 
    currentEnhancementId: number,
    desiredEnhancementId: number,
    totalCosts: SkillEnhancementTotalCostData
    ): TrackedSkillPayload => {
        
    const desiredEnhancement = enhancements.find(enh => enh.id === desiredEnhancementId) as Enhancement

    const currentEnhancementPayload:TrackedEnhancement = currentEnhancementId === 0 ? {level: 0, enhancementId: 0} : 
            {
                enhancementId: currentEnhancementId,
                level:enhancements.find(enh => enh.id === currentEnhancementId)?.level as number
            }

    const desiredEnhancementPayload:TrackedEnhancement = {
        enhancementId: desiredEnhancementId,
        level: desiredEnhancement.level 
    }

    return {
        unitId,
        unitName,
        unitCode,
        skill: {
            skillId,
            currentCatalysts: totalCosts.catalysts,
            goldCount: totalCosts.gold,
            molagoraCount: totalCosts.molagora,
            stigmaCount: totalCosts.stigma,
            currentEnhancement: currentEnhancementPayload,
            desiredEnhancement: desiredEnhancementPayload
        }
    }
}

export const SkillEnhancementCost = ({
    unitId,
    unitName,
    unitCode,
    skillId,
    currentEnhancementId,
    desiredEnhancementId,
    setModalOpen,
    enhancements
}: SkillEnhancementCostProps) => {
    const { units } = useAppSelector(state => state.units)
    const dispatch = useAppDispatch()
    
    const [goldCount, setGoldCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [molagoraCount, setMolagoraCount]  = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [stigmaCount, setStigmaCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [basicCatalystCount, setBasicCatalystCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})
    const [epicCatalystCount, setEpicCatalystCount] = useState<LocalTrackedResource>({currentCount: 0, isTracked: true})

    // Update local state if materials are already being tracked by global store
    useEffect(() => {
        const unitIdx = units.findIndex(unit => unit.unitId === unitId)
        const foundUnit = units[unitIdx]
        
        if (unitIdx !== -1) {
            const skillIdx = foundUnit.skills.findIndex(skill => skill.skillId === skillId)
            const foundSkill = foundUnit.skills[skillIdx]
            if(skillIdx !== -1) {
                // Update local states
                foundSkill.currentCatalysts.forEach(catalyst => {
                    if(catalyst.isEpic) {
                        setEpicCatalystCount({
                            currentCount: catalyst.count.current,
                            isTracked: catalyst.count.isTracked
                        })
                    }  else {
                        setBasicCatalystCount({
                            currentCount: catalyst.count.current,
                            isTracked: catalyst.count.isTracked
                        })
                    }
                })
                setGoldCount({
                    currentCount: foundSkill.goldCount.current,
                    isTracked: foundSkill.goldCount.isTracked
                })
                setMolagoraCount({
                    currentCount: foundSkill.molagoraCount.current,
                    isTracked: foundSkill.molagoraCount.isTracked
                })
                setStigmaCount({
                    currentCount: foundSkill.stigmaCount.current,
                    isTracked: foundSkill.stigmaCount.isTracked
                })
            }
        }
    }, [units, unitId, skillId])

    const desiredEnhancement = enhancements.find(enh => enh.id === desiredEnhancementId) as Enhancement
    const targetEnhancements = enhancements.filter(enh => enh.level <= desiredEnhancement.level)

    const totalEnhancementsCost = targetEnhancements.reduce<SkillEnhancementTotalCostData>((acc, curr) => {
        const catalystIdx = acc.catalysts.findIndex(c => c.catalystId === curr.enhancementCatalystCost.catalyst.id)
        if (catalystIdx >= 0) {
            acc.catalysts[catalystIdx].count.required += curr.enhancementCatalystCost.count
        } else if (curr.enhancementCatalystCost.count !== 0) {
            acc.catalysts.push({
                catalystId: curr.enhancementCatalystCost.catalyst.id,
                catalystName: curr.enhancementCatalystCost.catalyst.name,
                catalystCode: curr.enhancementCatalystCost.catalyst.code,
                count: {
                    current: curr.enhancementCatalystCost.catalyst.isEpic ? epicCatalystCount.currentCount : basicCatalystCount.currentCount,
                    isTracked: curr.enhancementCatalystCost.catalyst.isEpic ? epicCatalystCount.isTracked : basicCatalystCount.isTracked,
                    required: curr.enhancementCatalystCost.count,
                },
                isEpic: curr.enhancementCatalystCost.catalyst.isEpic
            })
        }

        acc.gold.required += curr.gold
        acc.molagora.required += curr.molagora
        acc.stigma.required += curr.stigma
        return acc;
    }, {
        gold: {
            current: goldCount.currentCount,
            required: 0,
            isTracked: goldCount.isTracked
        },
        molagora: {
            current: molagoraCount.currentCount,
            required: 0,
            isTracked: molagoraCount.isTracked
        },
        stigma: {
            current: stigmaCount.currentCount,
            required: 0,
            isTracked: stigmaCount.isTracked
        },
        catalysts: []
    });
        
    return (
        <>
        {
            totalEnhancementsCost.catalysts.map(catalystCost => {
                return (
                    <div key={catalystCost.catalystId} className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.catalystCode}.png`} alt={catalystCost.catalystCode}/>
                        <div className="row justify-end">
                            <input 
                                className="py-2 px-2 text-black w-60" 
                                type="number" 
                                name={`catalyst_${catalystCost.catalystId}_current`} 
                                id={`catalyst_${catalystCost.catalystId}_current`} 
                                value={catalystCost.isEpic ? epicCatalystCount.currentCount : basicCatalystCount.currentCount}
                                max={catalystCost.count.required}
                                min={0}
                                onChange={(e) => {
                                    if(catalystCost.isEpic) {
                                        setEpicCatalystCount(prev => ({
                                            currentCount: Number(e.target.value),
                                            isTracked: prev.isTracked
                                        }))
                                    } else {
                                        setBasicCatalystCount(prev => ({
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
        <div className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
            <img src={GoldIcon} alt={"Gold icon"}/>
            <div className="row justify-end">
                <input 
                    className="py-2 px-2 text-black w-60" 
                    type="number" 
                    name={`gold_current`} 
                    id={`gold_current`} 
                    value={goldCount.currentCount}
                    max={totalEnhancementsCost.gold.required}
                    min={0}
                    onChange={(e) => setGoldCount(prevState => ({
                        currentCount: Number(e.target.value),
                        isTracked: prevState.isTracked
                    }))}
                />
                <div className="min-w-45">
                    <span className="pl-2">/ {totalEnhancementsCost.gold.required}</span>
                </div>
            </div>
        </div>
        {
            totalEnhancementsCost.molagora.required !== 0 ?
                <div className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                    <img src={MolagoraIcon} alt={"Molagora icon"}/>
                    <div className="row justify-end">
                        <input 
                            className="py-2 px-2 text-black w-60" 
                            type="number" 
                            name={`molagora_current`} 
                            id={`molagora_current`} 
                            value={molagoraCount.currentCount}
                            max={totalEnhancementsCost.molagora.required}
                            min={0}
                            onChange={(e) => setMolagoraCount(prevState => ({
                                currentCount: Number(e.target.value),
                                isTracked: prevState.isTracked
                            }))}
                        />
                        <div className="min-w-45">
                            <span className="pl-2">/ {totalEnhancementsCost.molagora.required}</span>
                        </div>
                    </div>
                </div>
            :
                <div className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                    <img src={StigmaIcon} alt={"Stigma icon"}/>
                    <div className="row justify-end">
                        <input 
                            className="py-2 px-2 text-black w-60" 
                            type="number" 
                            name={`stigma_current`} 
                            id={`stigma_current`} 
                            value={stigmaCount.currentCount}
                            max={totalEnhancementsCost.stigma.required}
                            min={0}
                            onChange={(e) => setStigmaCount(prevState => ({
                                currentCount: Number(e.target.value),
                                isTracked: prevState.isTracked
                            }))}
                        />
                        <div className="min-w-45">
                            <span className="pl-2">/ {totalEnhancementsCost.stigma.required}</span>
                        </div>
                    </div>
            </div>
        }
        <div className="w-full row">
            <button 
                className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2 mt-2"
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                        editSkillEnhancement(
                            buildDispatchData(
                                unitId as number, 
                                unitName as string, 
                                unitCode as string, 
                                skillId, 
                                enhancements as Enhancement[], 
                                currentEnhancementId,
                                desiredEnhancementId,
                                totalEnhancementsCost
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