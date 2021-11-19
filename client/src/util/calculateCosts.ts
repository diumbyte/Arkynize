import { Awakening, Enhancement } from "../generated/graphql";
import { TrackedAwakening, TrackedEnhancement, TrackedSkill } from "../redux/types";

export const calculateTotalSkillEnhancementsCosts = (
    allEnhancements: Enhancement[],
    skillId: number,
    type: number,
    currentEnhancementId: number,
    desiredEnhancementId: number,
    basicCatalystTracked: boolean,
    epicCatalystTracked: boolean,
    goldTracked: boolean,
    molagoraTracked: boolean,
    stigmaTracked: boolean
):TrackedSkill => {
    const currentEnhancement:TrackedEnhancement = currentEnhancementId === 0 ? {level: 0, id: 0} : 
    {
        id: currentEnhancementId,
        level:allEnhancements.find(enh => enh.id === currentEnhancementId)?.level as number
    }
    const desiredEnhancement:TrackedEnhancement = {
        id: desiredEnhancementId,
        level: allEnhancements.find(enh => enh.id === desiredEnhancementId)?.level as number 
    }

    const targetEnhancements = allEnhancements.filter(enh => enh.level <= desiredEnhancement.level)

    return targetEnhancements.reduce<TrackedSkill>((acc, curr) => {
        const catalystIdx = acc.trackedCatalysts.findIndex(c => c.id === curr.enhancementCatalystCost.catalyst.id)
        if (catalystIdx >= 0) {
            acc.trackedCatalysts[catalystIdx].count.required += curr.enhancementCatalystCost.count
        } else if (curr.enhancementCatalystCost.count !== 0) {
            acc.trackedCatalysts.push({
                id: curr.enhancementCatalystCost.catalyst.id,
                name: curr.enhancementCatalystCost.catalyst.name,
                code: curr.enhancementCatalystCost.catalyst.code,
                count: {
                    current: 0,
                    isTracked: curr.enhancementCatalystCost.catalyst.isEpic ? epicCatalystTracked : basicCatalystTracked,
                    required: curr.enhancementCatalystCost.count,
                },
                isEpic: curr.enhancementCatalystCost.catalyst.isEpic
            })
        }

        acc.trackedGold.required += curr.gold
        acc.trackedMolagora.required += curr.molagora
        acc.trackedStigma.required += curr.stigma
        return acc;
    }, {
        id: skillId,
        type,
        currentEnhancement,
        desiredEnhancement,
        trackedGold: {
            current: 0,
            required: 0,
            isTracked: goldTracked
        },
        trackedMolagora: {
            current: 0,
            required: 0,
            isTracked: molagoraTracked
        },
        trackedStigma: {
            current: 0,
            required: 0,
            isTracked: stigmaTracked
        },
        trackedCatalysts: []
    });
}

export const calculateTotalAwakeningsCosts = (
    allAwakenings: Awakening[],
    currentAwakeningsIdx: number,
    desiredAwakeningsIdx: number,
    basicCatalystTracked: boolean,
    epicCatalystTracked: boolean,
    basicRuneTracked: boolean,
    midRuneTracked: boolean,
    topRuneTracked: boolean
) => {
    // .slice() just goes to the end of the array even if the second arg goes past awakening.length
    const targetAwakenings = allAwakenings.slice(currentAwakeningsIdx + 1, desiredAwakeningsIdx + 1)
    
    return targetAwakenings.reduce<TrackedAwakening>( (acc, currObj) => {
        acc.ids.push(currObj.id)
        
        const catalystIdx = acc.trackedCatalysts.findIndex(c => c.id === currObj.awakeningCatalystCost.id)

        // Calculate isTracked based off state
        let isTracked;
        if(currObj.awakeningCatalystCost.catalyst.isEpic) {
            isTracked = epicCatalystTracked
        } else {
            isTracked = basicCatalystTracked
        }
        
        if(catalystIdx >= 0) {
            acc.trackedCatalysts[catalystIdx].count.required += currObj.awakeningCatalystCost.count
        } else if(currObj.awakeningCatalystCost.count !== 0) {
            acc.trackedCatalysts.push({
                id: currObj.awakeningCatalystCost.catalyst.id,
                name: currObj.awakeningCatalystCost.catalyst.name,
                code: currObj.awakeningCatalystCost.catalyst.code,
                isEpic: currObj.awakeningCatalystCost.catalyst.isEpic,
                count: {
                    current: 0,
                    required: currObj.awakeningCatalystCost.count,
                    isTracked
                }
            })
        }

        currObj.runeCosts.forEach(runeCost => {
            const runeIdx = acc.trackedRunes.findIndex(r => r.id === runeCost.rune.id)

            // Calculate current, isTracked count based off state
            let isTracked;
            if(runeCost.rune.type === "basic") {
                isTracked = basicRuneTracked
            } else if(runeCost.rune.type === "greater") {
                isTracked = midRuneTracked
            } else {
                isTracked = topRuneTracked
            }
            
            if(runeIdx >= 0) {
                acc.trackedRunes[runeIdx].count.required += runeCost.count
            } else {
                acc.trackedRunes.push({
                    id: runeCost.rune.id,
                    code: runeCost.rune.code,
                    name: runeCost.rune.name,
                    type: runeCost.rune.type,
                    count: {
                        current: 0,
                        required: runeCost.count,
                        isTracked
                    }
                })
            }
        })
        return acc
    }, {
        ids: [],
        trackedCatalysts: [],
        trackedRunes: []
    })
}