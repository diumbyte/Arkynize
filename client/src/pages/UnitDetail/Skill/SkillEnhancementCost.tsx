import { useEffect, useState } from "react"
import { Enhancement } from "../../../generated/graphql"
import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { TrackedSkill, TrackedEnhancement, editSkillEnhancement, TrackedSkillPayload, TrackedCatalysts } from "../../../redux/actions/unitsReducer"
import { CatalystCost, LocalTrackedResource } from "../types"
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
    gold: number,
    molagora: number,
    stigma: number,
    catalysts: CatalystCost[]
}

const buildDispatchData = (
    unitId: number, 
    unitName: string, 
    unitCode: string, 
    skillId: number, 
    enhancements: Enhancement[], 
    currentEnhancementId: number,
    desiredEnhancementId: number,
    basicCatalystCount: LocalTrackedResource, 
    epicCatalystCount: LocalTrackedResource, 
    goldCount: LocalTrackedResource, 
    molagoraCount: LocalTrackedResource, 
    stigmaCount: LocalTrackedResource
    ): TrackedSkillPayload => {
        
    const desiredEnhancement = enhancements.find(enh => enh.id === desiredEnhancementId) as Enhancement
    const targetEnhancements = enhancements.filter(enh => enh.level <= desiredEnhancement.level)

    const currentCatalysts:TrackedCatalysts[] = targetEnhancements.map(a => {
        const catalystId = a.enhancementCatalystCost.catalyst.id
        const catalystCode = a.enhancementCatalystCost.catalyst.code
        const isEpic = a.enhancementCatalystCost.catalyst.isEpic
        const catalystName = a.enhancementCatalystCost.catalyst.name
        const currentCount = a.enhancementCatalystCost.catalyst.isEpic ? epicCatalystCount : basicCatalystCount
        const desiredCount = a.enhancementCatalystCost.count

        return {
            catalystId,
            catalystCode,
            isEpic,
            catalystName,
            count: {
                current: currentCount.currentCount,
                required: desiredCount,
                isTracked: isEpic ? epicCatalystCount.isTracked : basicCatalystCount.isTracked
            }
        }
    })
    .filter(ca => ca.catalystId !== 37)
    .reduce<TrackedCatalysts[]>((acc, curr) => {
        const catalystIdx = acc.findIndex(c => c.catalystId === curr.catalystId)
        if (catalystIdx >= 0) {
            acc[catalystIdx].count.required += curr.count.required
        } else if (curr.count.required !== 0) {
            acc.push({
                catalystId: curr.catalystId,
                catalystCode: curr.catalystCode,
                catalystName: curr.catalystName,
                count: {
                    current: curr.count.current,
                    required: curr.count.required,
                    isTracked: curr.count.isTracked
                },
                isEpic: curr.isEpic
            })
        }

        return acc;
    }, [])

    console.log(currentCatalysts);
    

    const totalEnhancementsCost = targetEnhancements.reduce((acc, curr) => {
        acc.gold += curr.gold
        acc.molagora += curr.molagora
        acc.stigma += curr.stigma
        return acc;
    }, {
        gold: 0,
        molagora: 0,
        stigma: 0,
    });

    const currentEnhancementPayload:TrackedEnhancement = currentEnhancementId === 0 ? {level: 0, enhancementId: 0} : 
            {
                enhancementId: currentEnhancementId,
                level:enhancements.find(enh => enh.id === currentEnhancementId)?.level as number
            }

    const desiredEnhancementPayload:TrackedEnhancement = {
        enhancementId: desiredEnhancementId,
        level: desiredEnhancement.level 
    }

    const skill:TrackedSkill = {
        skillId,
        currentCatalysts,
        goldCount: {
            current: goldCount.currentCount,
            required: totalEnhancementsCost.gold,
            isTracked: goldCount.isTracked
        },
        molagoraCount: {
            current: molagoraCount.currentCount,
            required: totalEnhancementsCost.molagora,
            isTracked: molagoraCount.isTracked
        },
        stigmaCount: {
            current: stigmaCount.currentCount,
            required: totalEnhancementsCost.stigma,
            isTracked: stigmaCount.isTracked
        },
        currentEnhancement: currentEnhancementPayload,
        desiredEnhancement: desiredEnhancementPayload
    }

    return {
        unitId,
        unitName,
        unitCode,
        skill
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
        const catalystIdx = acc.catalysts.findIndex(c => c.id === curr.enhancementCatalystCost.catalyst.id)
        if (catalystIdx >= 0) {
            acc.catalysts[catalystIdx].count += curr.enhancementCatalystCost.count
        } else if (curr.enhancementCatalystCost.count !== 0) {
            acc.catalysts.push({
                id: curr.enhancementCatalystCost.catalyst.id,
                name: curr.enhancementCatalystCost.catalyst.name,
                code: curr.enhancementCatalystCost.catalyst.code,
                count: curr.enhancementCatalystCost.count,
                isEpic: curr.enhancementCatalystCost.catalyst.isEpic
            })
        }

        acc.gold += curr.gold
        acc.molagora += curr.molagora
        acc.stigma += curr.stigma
        return acc;
    }, {
        gold: 0,
        molagora: 0,
        stigma: 0,
        catalysts: []
    });
        
    return (
        <>
        {
            totalEnhancementsCost.catalysts.map(catalystCost => {
                return (
                    <div key={catalystCost.id} className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalystCost.code}.png`} alt={catalystCost.code}/>
                        <div className="row justify-end">
                            <input 
                                className="py-2 px-2 text-black w-60" 
                                type="number" 
                                name={`catalyst_${catalystCost.id}_current`} 
                                id={`catalyst_${catalystCost.id}_current`} 
                                value={catalystCost.isEpic ? epicCatalystCount.currentCount : basicCatalystCount.currentCount}
                                max={catalystCost.count}
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
                                <span className="pl-2">/ {catalystCost.count}</span>
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
                    max={totalEnhancementsCost.gold}
                    min={0}
                    onChange={(e) => setGoldCount(prevState => ({
                        currentCount: Number(e.target.value),
                        isTracked: prevState.isTracked
                    }))}
                />
                <div className="min-w-45">
                    <span className="pl-2">/ {totalEnhancementsCost.gold}</span>
                </div>
            </div>
        </div>
        {
            totalEnhancementsCost.molagora !== 0 ?
                <div className="row w-80 md:w-3/4 justify-between border-b-2 border-tavernBrown-light border-opacity-40">
                    <img src={MolagoraIcon} alt={"Molagora icon"}/>
                    <div className="row justify-end">
                        <input 
                            className="py-2 px-2 text-black w-60" 
                            type="number" 
                            name={`molagora_current`} 
                            id={`molagora_current`} 
                            value={molagoraCount.currentCount}
                            max={totalEnhancementsCost.molagora}
                            min={0}
                            onChange={(e) => setMolagoraCount(prevState => ({
                                currentCount: Number(e.target.value),
                                isTracked: prevState.isTracked
                            }))}
                        />
                        <div className="min-w-45">
                            <span className="pl-2">/ {totalEnhancementsCost.molagora}</span>
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
                            max={totalEnhancementsCost.stigma}
                            min={0}
                            onChange={(e) => setStigmaCount(prevState => ({
                                currentCount: Number(e.target.value),
                                isTracked: prevState.isTracked
                            }))}
                        />
                        <div className="min-w-45">
                            <span className="pl-2">/ {totalEnhancementsCost.stigma}</span>
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
                                basicCatalystCount, 
                                epicCatalystCount, 
                                goldCount, 
                                molagoraCount, 
                                stigmaCount
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