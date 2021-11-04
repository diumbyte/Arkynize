import { Enhancement } from "../generated/graphql";
import { LocalTrackedResource } from "../pages/UnitDetail/types";
import { TrackedEnhancement, TrackedSkill } from "../redux/actions/unitsReducer";

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
