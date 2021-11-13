import { Awakening, Enhancement } from "../generated/graphql";
import { LocalTrackedResource } from "../pages/UnitDetail/types";
import { TrackedAwakening, TrackedEnhancement, TrackedSkill } from "../redux/types";

export const calculateTotalSkillEnhancementsCosts = (
    allEnhancements: Enhancement[],
    skillId: number,
    type: number,
    currentEnhancementId: number,
    desiredEnhancementId: number,
    basicCatalystCount: LocalTrackedResource,
    epicCatalystCount: LocalTrackedResource,
    goldCount: LocalTrackedResource,
    molagoraCount: LocalTrackedResource,
    stigmaCount: LocalTrackedResource
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
                    current: curr.enhancementCatalystCost.catalyst.isEpic ? epicCatalystCount.currentCount : basicCatalystCount.currentCount,
                    isTracked: curr.enhancementCatalystCost.catalyst.isEpic ? epicCatalystCount.isTracked : basicCatalystCount.isTracked,
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
            current: goldCount.currentCount,
            required: 0,
            isTracked: goldCount.isTracked
        },
        trackedMolagora: {
            current: molagoraCount.currentCount,
            required: 0,
            isTracked: molagoraCount.isTracked
        },
        trackedStigma: {
            current: stigmaCount.currentCount,
            required: 0,
            isTracked: stigmaCount.isTracked
        },
        trackedCatalysts: []
    });
}

export const calculateTotalAwakeningsCosts = (
    allAwakenings: Awakening[],
    currentAwakeningsIdx: number,
    desiredAwakeningsIdx: number,
    basicCatalyst: LocalTrackedResource,
    epicCatalyst: LocalTrackedResource,
    basicRune: LocalTrackedResource,
    midRune: LocalTrackedResource,
    topRune: LocalTrackedResource
) => {
    // .slice() just goes to the end of the array even if the second arg goes past awakening.length
    const targetAwakenings = allAwakenings.slice(currentAwakeningsIdx + 1, desiredAwakeningsIdx + 1)
    
    return targetAwakenings.reduce<TrackedAwakening>( (acc, currObj) => {
        acc.ids.push(currObj.id)
        
        const catalystIdx = acc.trackedCatalysts.findIndex(c => c.id === currObj.awakeningCatalystCost.id)

        // Calculate current, isTracked based off state
        let current, isTracked;
        if(currObj.awakeningCatalystCost.catalyst.isEpic) {
            current = epicCatalyst.currentCount
            isTracked = epicCatalyst.isTracked
        } else {
            current = basicCatalyst.currentCount
            isTracked = basicCatalyst.isTracked
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
                    current,
                    required: currObj.awakeningCatalystCost.count,
                    isTracked
                }
            })
        }

        currObj.runeCosts.forEach(runeCost => {
            const runeIdx = acc.trackedRunes.findIndex(r => r.id === runeCost.rune.id)

            // Calculate current, isTracked count based off state
            let current, isTracked;
            if(runeCost.rune.type === "basic") {
                current = basicRune.currentCount
                isTracked = basicRune.isTracked
            } else if(runeCost.rune.type === "greater") {
                current = midRune.currentCount
                isTracked = midRune.isTracked
            } else {
                current = topRune.currentCount
                isTracked = topRune.isTracked
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
                        current,
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