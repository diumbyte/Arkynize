import { useAppSelector } from "../redux/hooks"
import { TrackedCatalyst, TrackedRune, ITrackeableCount } from "../redux/types"

type SkillResources = {
    trackedGold: ITrackeableCount,
    trackedStigma: ITrackeableCount,
    trackedMolagora: ITrackeableCount
}

export const useOverallResourceCosts = () => {
    const { trackedUnits } = useAppSelector(state => state.units)

    // Values to return: Catalysts[], Runes[], Gold, Molagora/Stigma
    // Awakenings
    const totalAwakeningCatalystCosts = trackedUnits
        .filter(tu => tu.trackedAwakenings !== undefined)
        .map(tu => tu.trackedAwakenings?.trackedCatalysts as TrackedCatalyst[])
        .reduce<TrackedCatalyst[]>((total, catalysts) => {
            catalysts.forEach(catalyst => {
                const catalystIdx = total.findIndex(c => c.id === catalyst.id)
                if(catalystIdx !== -1) {
                    if(catalyst.count.isTracked) {
                        total[catalystIdx].count.current += catalyst.count.current
                        total[catalystIdx].count.required += catalyst.count.required
                    }
                } else {
                    total.push(catalyst)
                }
            })

            return total
        }, [])

    const totalAwakeningRuneCosts = trackedUnits
        .filter(tu => tu.trackedAwakenings !== undefined)
        .map(tu => tu.trackedAwakenings?.trackedRunes as TrackedRune[])
        .reduce<TrackedRune[]>((total, runes) => {
            runes.forEach(rune => {
                const runeIdx = total.findIndex(r => r.id === rune.id)
                if(runeIdx !== -1) {
                    if(rune.count.isTracked) {
                        total[runeIdx].count.current += rune.count.current
                        total[runeIdx].count.required += rune.count.required
                    }
                } else {
                    total.push(rune)
                }
            })

            return total
        }, [])
    // Skill
    const totalSkillCatalystCosts = trackedUnits.map(tu => tu.trackedSkills)
        .reduce<TrackedCatalyst[]>((total, skills) => {
            skills.forEach(skill => {
                skill.trackedCatalysts.forEach(catalyst => {
                    const catalystIdx = total.findIndex(c => c.id === catalyst.id)
                    if(catalystIdx !== -1) {
                        if(catalyst.count.isTracked) {
                            total[catalystIdx].count.current += catalyst.count.current
                            total[catalystIdx].count.required += catalyst.count.required
                        }
                    } else {
                        total.push(catalyst)
                    }
                })
            })
            
            return total
        }, [])

    const totalSkillResourceCosts = trackedUnits.map(tu =>  tu.trackedSkills)
        .reduce<SkillResources>((total, skills) => {
            skills.forEach(skill => {
                if(skill.trackedGold.isTracked) {
                    total.trackedGold.current += skill.trackedGold.current
                    total.trackedGold.required += skill.trackedGold.required
                }
                
                if(skill.trackedMolagora.isTracked) {
                    total.trackedMolagora.current += skill.trackedMolagora.current
                    total.trackedMolagora.required += skill.trackedMolagora.required
                }
                
                if(skill.trackedStigma.isTracked) {
                    total.trackedStigma.current += skill.trackedStigma.current
                    total.trackedStigma.required += skill.trackedStigma.required
                }
            })

            return total
        }, {
            trackedGold: {
                current: 0,
                required: 0,
                isTracked: true
            },
            trackedStigma: {
                current: 0,
                required: 0,
                isTracked: true
            },
            trackedMolagora: {
                current: 0,
                required: 0,
                isTracked: true
            }
        })
    // Sum catalysts
    const totalCatalystsCost = totalAwakeningCatalystCosts.concat(totalSkillCatalystCosts)
        .reduce<TrackedCatalyst[]>((total, catalyst) => {
            const catalystIdx = total.findIndex(c => c.id === catalyst.id)
            if(catalystIdx !== -1) {
                total[catalystIdx].count.current += catalyst.count.current
                total[catalystIdx].count.required += catalyst.count.required
            } else {
                total.push(catalyst)
            }

            return total
        }, [])

    // Final
    return {
        trackedRunes: totalAwakeningRuneCosts,
        trackedCatalysts: totalCatalystsCost,
        ...totalSkillResourceCosts
    }
}