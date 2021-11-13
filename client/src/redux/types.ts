export interface ITrackeableCount {
    current: number,
    required: number,
    isTracked: boolean
}

export interface TrackedCatalyst {
    id: number,
    code: string,
    name: string,
    isEpic: boolean,
    count: ITrackeableCount
}

export interface TrackedRune {
    id: number,
    code: string,
    name: string,
    type: string,
    count: ITrackeableCount
}

export interface TrackedAwakening {
    ids: number[],
    trackedCatalysts: TrackedCatalyst[],
    trackedRunes: TrackedRune[]
}

export interface TrackedEnhancement {
    id: number,
    level: number
}
export interface TrackedSkill {
    id: number,
    type: number,
    currentEnhancement: TrackedEnhancement,
    desiredEnhancement: TrackedEnhancement,
    trackedGold: ITrackeableCount,
    trackedMolagora: ITrackeableCount,
    trackedStigma: ITrackeableCount,
    trackedCatalysts: TrackedCatalyst[]
}

export interface TrackedUnit {
    id: number,
    code: string,
    name: string,
    trackedAwakenings?: TrackedAwakening,
    trackedSkills: TrackedSkill[]
}