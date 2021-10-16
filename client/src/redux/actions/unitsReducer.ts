import { EnhancementCatalystCost } from "../../generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TrackedCatalysts {
    catalystId: number,
    catalystName: string,
    isEpic: boolean,
    currentCount: number,
    desiredCount: number
}

export interface TrackedRunes {
    runeId: number,
    runeName: string,
    runeType: string,
    currentCount: number,
    desiredCount: number
}

export interface TrackedAwakening {
    trackedAwakeningIds: number[],
    currentCatalysts: TrackedCatalysts[],
    currentRunes: TrackedRunes[]
}

export interface TrackedEnhancement {
    enhancemenId: number,
    level: number
}
export interface TrackedSkill {
    skillId: number,
    type: number,
    currentEnhancement: TrackedEnhancement,
    desiredEnhancement: TrackedEnhancement,
    currentGold: number,
    desiredGold: number,
    currentMolagora?: number,
    desiredMolagora?: number,
    currentStigma?: number,
    desiredStigma?: number,
    currentCatalysts: TrackedCatalysts[]
}

export interface TrackedUnit {
    unitId: number,
    unitCode: string,
    unitName: string,
    awakenings: TrackedAwakening,
    skills: TrackedSkill[]
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
        }
    }
})

export const { editAwakening } = unitsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUnits = (state: RootState) => state.units

export default unitsSlice.reducer