import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./unitsReducers";
import { loadState, saveState } from "./localStorage";

const store = configureStore({
    reducer: {
        units: unitsReducer
    },
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState({
        units: store.getState().units
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;