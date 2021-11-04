import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ITrackeableCount {
    current: number,
    required: number,
    isTracked: boolean
}

export interface TrackedCatalyst {
    catalystId: number,
    catalystCode: string,
    catalystName: string,
    isEpic: boolean,
    count: ITrackeableCount
}

export interface TrackedRune {
    runeId: number,
    runeCode: string,
    runeName: string,
    runeType: string,
    count: ITrackeableCount
}

export interface TrackedAwakening {
    trackedAwakeningIds: number[],
    currentCatalysts: TrackedCatalyst[],
    currentRunes: TrackedRune[]
}

export interface TrackedEnhancement {
    enhancementId: number,
    level: number
}
export interface TrackedSkill {
    skillId: number,
    currentEnhancement: TrackedEnhancement,
    desiredEnhancement: TrackedEnhancement,
    goldCount: ITrackeableCount,
    molagoraCount: ITrackeableCount,
    stigmaCount: ITrackeableCount,
    currentCatalysts: TrackedCatalyst[]
}

export interface TrackedUnit {
    unitId: number,
    unitCode: string,
    unitName: string,
    awakenings?: TrackedAwakening,
    skills: TrackedSkill[]
}

export interface TrackedSkillPayload {
    unitId: number,
    unitCode: string,
    unitName: string,
    skill: TrackedSkill
}

export interface TrackedUnitsState {
    units: TrackedUnit[]
}

const initialState: TrackedUnitsState = {
    units: []
}

export const unitsSlice = createSlice({
    name: "units",
    initialState,
    reducers: {
        editAwakening: (state, action: PayloadAction<TrackedUnit>) => {
            const unitToTrackIdx = state.units.findIndex(tu => tu.unitId === action.payload.unitId)
            if(unitToTrackIdx === -1) {
                state.units = [...state.units, {...action.payload, skills: []}]
            } else {
                state.units = state.units.map(trackedUnit => {
                    if(trackedUnit.unitId === action.payload.unitId) {
                        return {
                            ...trackedUnit,
                            awakenings: action.payload.awakenings
                        }
                        
                    } else {
                        return trackedUnit;
                    }
                })
            }   
        },
        editSkillEnhancement: (state, action: PayloadAction<TrackedSkillPayload>) => {
            const unitToTrackIdx = state.units.findIndex(tu => tu.unitId === action.payload.unitId)
            
            if(unitToTrackIdx === -1) {
                const newUnit:TrackedUnit = {
                    unitId: action.payload.unitId,
                    unitCode: action.payload.unitCode,
                    unitName: action.payload.unitName,
                    skills: [action.payload.skill]
                }
                state.units = [...state.units, newUnit]
            } else {
                
                state.units = state.units.map(trackedUnit => {
                    // Handling when the unit is already being tracked
                    if(trackedUnit.unitId === action.payload.unitId) {
                        // Handling when the skill is already being tracked
                        if (trackedUnit.skills.some(skill => skill.skillId === action.payload.skill.skillId)) {
                            trackedUnit.skills = trackedUnit.skills.map(skill => {
                                if (skill.skillId === action.payload.skill.skillId) {
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
                                skills: [...trackedUnit.skills, action.payload.skill]
                            }
                        }
                    } else {
                        return trackedUnit
                    }
                })
            }
        }
    }
})

export const { editAwakening, editSkillEnhancement } = unitsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUnits = (state: RootState) => state.units

export default unitsSlice.reducer