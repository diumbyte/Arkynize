import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TrackedSkill, TrackedUnit } from "../types";

export interface TrackedSkillPayload {
    unitId: number,
    unitCode: string,
    unitName: string,
    skill: TrackedSkill
}

interface TrackedUnitsState {
    trackedUnits: TrackedUnit[]
}

const initialState: TrackedUnitsState = {
    trackedUnits: []
}

export const unitsSlice = createSlice({
    name: "units",
    initialState,
    reducers: {
        editAwakening: (state, action: PayloadAction<TrackedUnit>) => {
            const unitToTrackIdx = state.trackedUnits.findIndex(tu => tu.id === action.payload.id)
            if(unitToTrackIdx === -1) {
                state.trackedUnits = [...state.trackedUnits, {...action.payload, trackedSkills: []}]
            } else {
                state.trackedUnits = state.trackedUnits.map(trackedUnit => {
                    if(trackedUnit.id === action.payload.id) {
                        return {
                            ...trackedUnit,
                            awakenings: action.payload.trackedAwakenings
                        }
                        
                    } else {
                        return trackedUnit;
                    }
                })
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
                
                state.trackedUnits = state.trackedUnits.map(trackedUnit => {
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
                                skills: [...trackedUnit.trackedSkills, action.payload.skill]
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