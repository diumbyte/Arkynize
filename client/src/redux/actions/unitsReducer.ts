import { AwakeningCatalystCost, RuneCost, EnhancementCatalystCost } from "../../generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TrackedAwakening {
    awakeningId: number,
    runes: RuneCost[],
    catalysts?: AwakeningCatalystCost
}

export interface TrackedSkill {
    skillId: number,
    enhancementId: number,
    gold: number,
    level: number,
    molagora: number,
    stigma: number,
    catalyst: EnhancementCatalystCost
}

export interface TrackedUnit {
    id: number,
    code: string,
    name: string,
    awakenings: TrackedAwakening[],
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
            const unitToTrackIdx = state.units.findIndex(tu => tu.id === action.payload.id)
            if(unitToTrackIdx === -1) {
                state.units = [...state.units, {...action.payload, skills: []}]
            } else {
                state.units = state.units.map(trackedUnit => {
                    if(trackedUnit.id === action.payload.id) {
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