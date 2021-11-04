import { Awakening, Enhancement } from "../generated/graphql";
import { LocalTrackedResource } from "../pages/UnitDetail/types";
import { TrackedAwakening, TrackedEnhancement, TrackedSkill } from "../redux/actions/unitsReducer";

export const calculateTotalSkillEnhancementsCosts = (
    allEnhancements: Enhancement[],
    skillId: number,
    currentEnhancementId: number,
    desiredEnhancementId: number,
    basicCatalystCount: LocalTrackedResource,
    epicCatalystCount: LocalTrackedResource,
    goldCount: LocalTrackedResource,
    molagoraCount: LocalTrackedResource,
    stigmaCount: LocalTrackedResource
):TrackedSkill => {
    const currentEnhancement:TrackedEnhancement = currentEnhancementId === 0 ? {level: 0, enhancementId: 0} : 
    {
        enhancementId: currentEnhancementId,
        level:allEnhancements.find(enh => enh.id === currentEnhancementId)?.level as number
    }
    const desiredEnhancement:TrackedEnhancement = {
        enhancementId: desiredEnhancementId,
        level: allEnhancements.find(enh => enh.id === desiredEnhancementId)?.level as number 
    }

    const targetEnhancements = allEnhancements.filter(enh => enh.level <= desiredEnhancement.level)

    return targetEnhancements.reduce<TrackedSkill>((acc, curr) => {
        const catalystIdx = acc.currentCatalysts.findIndex(c => c.catalystId === curr.enhancementCatalystCost.catalyst.id)
        if (catalystIdx >= 0) {
            acc.currentCatalysts[catalystIdx].count.required += curr.enhancementCatalystCost.count
        } else if (curr.enhancementCatalystCost.count !== 0) {
            acc.currentCatalysts.push({
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

        acc.goldCount.required += curr.gold
        acc.molagoraCount.required += curr.molagora
        acc.stigmaCount.required += curr.stigma
        return acc;
    }, {
        skillId,
        currentEnhancement,
        desiredEnhancement,
        goldCount: {
            current: goldCount.currentCount,
            required: 0,
            isTracked: goldCount.isTracked
        },
        molagoraCount: {
            current: molagoraCount.currentCount,
            required: 0,
            isTracked: molagoraCount.isTracked
        },
        stigmaCount: {
            current: stigmaCount.currentCount,
            required: 0,
            isTracked: stigmaCount.isTracked
        },
        currentCatalysts: []
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
        acc.trackedAwakeningIds.push(currObj.id)
        
        const catalystIdx = acc.currentCatalysts.findIndex(c => c.catalystId === currObj.awakeningCatalystCost.id)

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
            acc.currentCatalysts[catalystIdx].count.required += currObj.awakeningCatalystCost.count
        } else if(currObj.awakeningCatalystCost.count !== 0) {
            acc.currentCatalysts.push({
                catalystId: currObj.awakeningCatalystCost.catalyst.id,
                catalystName: currObj.awakeningCatalystCost.catalyst.name,
                catalystCode: currObj.awakeningCatalystCost.catalyst.code,
                isEpic: currObj.awakeningCatalystCost.catalyst.isEpic,
                count: {
                    current,
                    required: currObj.awakeningCatalystCost.count,
                    isTracked
                }
            })
        }

        currObj.runeCosts.forEach(runeCost => {
            const runeIdx = acc.currentRunes.findIndex(r => r.runeId === runeCost.rune.id)

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
                acc.currentRunes[runeIdx].count.required += runeCost.count
            } else {
                acc.currentRunes.push({
                    runeId: runeCost.rune.id,
                    runeCode: runeCost.rune.code,
                    runeName: runeCost.rune.name,
                    runeType: runeCost.rune.type,
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
        trackedAwakeningIds: [],
        currentCatalysts: [],
        currentRunes: []
    })
}