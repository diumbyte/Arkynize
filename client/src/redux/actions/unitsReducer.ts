import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ITrackeableCount, TrackedAwakening, TrackedCatalyst, TrackedRune, TrackedSkill, TrackedUnit } from "../types";

export interface TrackedSkillPayload {
    unitId: number,
    unitCode: string,
    unitName: string,
    skill: TrackedSkill
}

export interface ClearUnitTrackedSkillPayload {
    unitId: number,
    skillId: number
}

export interface ClearUnitTrackedAwakeningsPayload {
    unitId: number
}

export interface TrackedAwakeningPayload {
    unitId: number,
    unitCode: string,
    unitName: string,
    awakening: TrackedAwakening
}

export interface TrackedTotalResources {
    catalysts: TrackedCatalyst[],
    runes: TrackedRune[],
    gold: ITrackeableCount,
    stigma: ITrackeableCount,
    molagora: ITrackeableCount
}

interface TrackedUnitsState {
    trackedUnits: TrackedUnit[],
    totalResources: TrackedTotalResources
}

const initialState: TrackedUnitsState = {
    trackedUnits: [],
    totalResources: {
        catalysts: [],
        runes: [],
        gold: {
            current: 0,
            required: 0,
            isTracked: true
        },
        stigma: {
            current: 0,
            required: 0,
            isTracked: true
        },
        molagora: {
            current: 0,
            required: 0,
            isTracked: true
        }
    }
}

export const unitsSlice = createSlice({
    name: "units",
    initialState,
    reducers: {
        editAwakening: (state, action: PayloadAction<TrackedAwakeningPayload>) => {
            const unitToTrackIdx = state.trackedUnits.findIndex(tu => tu.id === action.payload.unitId)
            if(unitToTrackIdx === -1) {
                const newUnit:TrackedUnit = {
                    id: action.payload.unitId,
                    code: action.payload.unitCode,
                    name: action.payload.unitName,
                    trackedSkills: [],
                    trackedAwakenings: action.payload.awakening
                }
                state.trackedUnits = [...state.trackedUnits, newUnit]
            } else {
                state.trackedUnits = state.trackedUnits.map<TrackedUnit>(trackedUnit => {
                    if(trackedUnit.id === action.payload.unitId) {
                        return {
                            ...trackedUnit,
                            trackedAwakenings: action.payload.awakening
                        }
                        
                    } else {
                        return trackedUnit;
                    }
                })

                // After updates committed - If no resources are being tracked then remove the awakening
                let areAllResourcesUntracked = state.trackedUnits[unitToTrackIdx].trackedAwakenings
                    ?.trackedCatalysts.every(c => c.count.isTracked === false)
                    &&
                    state.trackedUnits[unitToTrackIdx].trackedAwakenings
                    ?.trackedRunes.every(r => r.count.isTracked === false)
                    
                if(areAllResourcesUntracked) {
                    state.trackedUnits[unitToTrackIdx].trackedAwakenings = undefined
                }

                // If both awakening+skills are empty then remove the unit from being tracked
                if(state.trackedUnits[unitToTrackIdx].trackedSkills.length === 0 && state.trackedUnits[unitToTrackIdx].trackedAwakenings === undefined ) {
                    state.trackedUnits = state.trackedUnits.filter(trackedUnit => trackedUnit.id !== action.payload.unitId)
                }

            }   
        },
        editTotalFromAwakenings: (state, action: PayloadAction<TrackedAwakening>) => {
            state.totalResources.catalysts = action.payload.trackedCatalysts.reduce<TrackedCatalyst[]>((total, currentCatalyst) => {
                const catalystIdx = state.totalResources.catalysts.findIndex(c => c.id === currentCatalyst.id)
                
                if(catalystIdx !== -1) {
                    total[catalystIdx] = {
                        ...total[catalystIdx],
                        count: {
                            ...total[catalystIdx].count,
                            required: total[catalystIdx].count.required + currentCatalyst.count.required
                        }
                    }
                } else {
                    total.push(currentCatalyst)
                }

                return total
            }, [...state.totalResources.catalysts])

            state.totalResources.runes = action.payload.trackedRunes.reduce<TrackedRune[]>((total, currentRune) => {
                const runeIdx = state.totalResources.runes.findIndex(c => c.id === currentRune.id)
                
                if(runeIdx !== -1 && currentRune.count.isTracked) {
                    total[runeIdx] = {
                        ...total[runeIdx],
                        count: {
                            ...total[runeIdx].count,
                            required: total[runeIdx].count.required + currentRune.count.required
                        }
                    }
                } else {
                    total.push(currentRune)
                }

                return total
            }, [...state.totalResources.runes])
        },
        clearUnitTrackedAwakenings: (state, action: PayloadAction<ClearUnitTrackedAwakeningsPayload>) => {
            const unitToTrackIdx = state.trackedUnits.findIndex(tu => tu.id === action.payload.unitId)
            
            if(unitToTrackIdx !== -1) {
                // Handle the case when only the Awakenings are being tracked -> Remove entirely off store
                if(state.trackedUnits[unitToTrackIdx].trackedSkills.length === 0) {
                    state.trackedUnits = state.trackedUnits.filter(trackedUnit => trackedUnit.id !== action.payload.unitId)
                } else {
                    state.trackedUnits = state.trackedUnits.map<TrackedUnit>(trackedUnit => {
                        if(trackedUnit.id === action.payload.unitId) {
                            return {
                                ...trackedUnit,
                                trackedAwakenings: undefined
                            }
                        } else {
                            return trackedUnit
                        }
                    })
                }
            }
        },
        editSkillEnhancement: (state, action: PayloadAction<TrackedSkillPayload>) => {
            const unitToTrackIdx = state.trackedUnits.findIndex(tu => tu.id === action.payload.unitId)
            
            if(unitToTrackIdx === -1) {
                const newUnit:TrackedUnit = {
                    id: action.payload.unitId,
                    code: action.payload.unitCode,
                    name: action.payload.unitName,
                    trackedSkills: [action.payload.skill]
                }
                state.trackedUnits = [...state.trackedUnits, newUnit]
            } else {
                
                state.trackedUnits = state.trackedUnits.map<TrackedUnit>(trackedUnit => {
                    // Handling when the unit is already being tracked
                    if(trackedUnit.id === action.payload.unitId) {
                        // Handling when the skill is already being tracked
                        if (trackedUnit.trackedSkills.some(skill => skill.id === action.payload.skill.id)) {
                            trackedUnit.trackedSkills = trackedUnit.trackedSkills.map(skill => {
                                if (skill.id === action.payload.skill.id) {
                                    return action.payload.skill
                                } else {
                                    return skill
                                }
                            })
                            return trackedUnit
                        } else {
                            // Handling when the skill ISN'T already being tracked
                            return {
                                ...trackedUnit,
                                trackedSkills: [...trackedUnit.trackedSkills, action.payload.skill]
                            }
                        }

                    } else {
                        return trackedUnit
                    }
                })
                // After updates committed - If no resources are being tracked then remove the skill
                state.trackedUnits[unitToTrackIdx].trackedSkills = state.trackedUnits[unitToTrackIdx].trackedSkills.filter(trackedSkill => {
                    let areAllResourcesUntracked = false;
                    if(trackedSkill.trackedMolagora.required !== 0) {
                        areAllResourcesUntracked = !(trackedSkill.trackedGold.isTracked || trackedSkill.trackedMolagora.isTracked)
                    } else {
                        areAllResourcesUntracked = !(trackedSkill.trackedGold.isTracked || trackedSkill.trackedStigma.isTracked)
                    }

                    areAllResourcesUntracked = areAllResourcesUntracked && trackedSkill.trackedCatalysts.every(c => c.count.isTracked === false)

                    return !areAllResourcesUntracked
                })

                // If both awakening+skills are empty then remove the unit from being tracked
                if(state.trackedUnits[unitToTrackIdx].trackedSkills.length === 0 && state.trackedUnits[unitToTrackIdx].trackedAwakenings === undefined ) {
                    state.trackedUnits = state.trackedUnits.filter(trackedUnit => trackedUnit.id !== action.payload.unitId)
                }
            }
        },
        clearUnitTrackedSkill: (state, action: PayloadAction<ClearUnitTrackedSkillPayload>) => {
            const trackedUnitIdx = state.trackedUnits.findIndex(tu => tu.id === action.payload.unitId)
            if(trackedUnitIdx !== -1) {
                state.trackedUnits[trackedUnitIdx].trackedSkills = state.trackedUnits[trackedUnitIdx].trackedSkills.filter(trackedSkill => trackedSkill.id !== action.payload.skillId)

                if(state.trackedUnits[trackedUnitIdx].trackedSkills.length === 0 && state.trackedUnits[trackedUnitIdx].trackedAwakenings === undefined) {
                    state.trackedUnits = state.trackedUnits.filter(trackedUnit => trackedUnit.id !== action.payload.unitId)
                }
            }
        }
    }
})

export const { 
    editAwakening, 
    editTotalFromAwakenings,
    editSkillEnhancement, 
    clearUnitTrackedAwakenings, 
    clearUnitTrackedSkill 
} = unitsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUnits = (state: RootState) => state.units

export default unitsSlice.reducer