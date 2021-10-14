import store from './store'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('store')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch(e) {
        return undefined;
    }
}

export const saveState = (state: ReturnType<typeof store.getState>) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('store', serializedState)
    } catch(e) {
        console.log(e);
    }
}