import { useState, useEffect } from "react"
import { Awakening } from "../generated/graphql"
import findLastIndex from "../util/findLastIndex"
import { useAppSelector } from "../redux/hooks"
import { TrackedUnit } from "../redux/types"

type isAwakeningLevelComplete = {
    id: number,
    state: number,
    status: boolean
}

type UseAwakeningTrackingProps = {
    unitId?: number,
    awakenings: Awakening[]
}

export const useAwakeningTracking = ({
    unitId,
    awakenings
}: UseAwakeningTrackingProps) => {
    // Current awakenings
    const [currentAwakenings, setCurrentAwakenings] = useState<isAwakeningLevelComplete[]>([])
    // Desired awakenings
    const [desiredAwakenings, setDesiredAwakenings] = useState<isAwakeningLevelComplete[]>([])
    const {trackedUnits} = useAppSelector(state => state.units)

    useEffect(() => {
        const unitIdx = trackedUnits.findIndex(u => u.id === unitId)
        if(unitIdx !== -1) {
            const trackedAwakeningIds = trackedUnits[unitIdx].trackedAwakenings?.ids
            if(!trackedAwakeningIds) {
                if(awakenings !== undefined) {
                    setCurrentAwakenings(awakenings.map(a => ({id: a.id, state: a.state, status: false})))
                    setDesiredAwakenings(awakenings.map(a => ({id: a.id, state: a.state, status: false})))
                }
                return;
            }
            const lowestTrackedAwakeningId = trackedAwakeningIds[0]
            const highestTrackedAwakeningId = trackedAwakeningIds[trackedAwakeningIds.length - 1]

            // Set current awakenings status
            const updatedCurrentAwakenings = awakenings.map(ca => {
                let status = false;
                if (ca.id < lowestTrackedAwakeningId) {
                    status = true
                }

                return {
                    ...ca,
                    status
                }
            })
            setCurrentAwakenings(updatedCurrentAwakenings)

            // Set desired awakenings status
            const updatedDesiredAwakenings = awakenings.map(da => {
                let status = false;
                if(da.id <= highestTrackedAwakeningId) {
                    status = true
                }
                return {
                    ...da,
                    status
                }
            })
            setDesiredAwakenings(updatedDesiredAwakenings)
        } else {
            if(awakenings !== undefined) {
                setCurrentAwakenings(awakenings.map(a => ({id: a.id, state: a.state, status: false})))
                setDesiredAwakenings(awakenings.map(a => ({id: a.id, state: a.state, status: false})))
            }
        }
    }, [trackedUnits, unitId, awakenings])

    const onCurrentAwakeningClick = (id: number) => {
        const clickedIdx = currentAwakenings.findIndex(ca => ca.id === id);

        const updatedCurrentAwakenings = currentAwakenings.map((e, idx) => {
            let status;
            if(idx <= clickedIdx) {
                status = true;
            } else {
                status = false;
            }

            return {
                ...e,
                status
            }
        })

        setCurrentAwakenings(updatedCurrentAwakenings);

        const highestDesiredAwakeningIdx = findLastIndex(desiredAwakenings, da => da.status === true)
        if(highestDesiredAwakeningIdx < clickedIdx) {
            setDesiredAwakenings(updatedCurrentAwakenings);
        }
    }

    const onDesiredAwakeningClick = (id: number)  => {
        const clickedIdx = desiredAwakenings.findIndex(da => da.id === id);
        const highestCurrentAwakeningIdx = findLastIndex(currentAwakenings, ca => ca.status === true)

        if(highestCurrentAwakeningIdx < clickedIdx) {
            let status;
            const updatedDesiredAwakenings = desiredAwakenings.map((e,idx) => {
                if(idx <= clickedIdx) {
                    status = true
                } else {
                    status = false
                }
                return {
                    ...e,
                    status
                }
            })
            setDesiredAwakenings(updatedDesiredAwakenings)
        }

    }   
    
    return {
        currentAwakenings,
        desiredAwakenings,
        onCurrentAwakeningClick,
        onDesiredAwakeningClick
    }
}

export const useTrackAwakeningCostChanges = (
    trackedUnits: TrackedUnit[], 
    unitId: number,
    basicCatalystTracked: boolean, 
    epicCatalystTracked: boolean, 
    basicRuneTracked: boolean, 
    midRuneTracked: boolean, 
    topRuneTracked: boolean) => {

    const [areResourcesModified, setAreResourcesModified] = useState(false)

    const [isBasicCatalystChanged, setIsBasicCatalystChanged] = useState(false)
    const [isEpicCatalystChanged, setIsEpicCatalystChanged] = useState(false)
    const [isBasicRuneChanged, setIsBasicRuneChanged] = useState(false)
    const [isMidRuneChanged, setIsMidRuneChanged] = useState(false)
    const [isTopRuneChanged, setIsTopRuneChanged] = useState(false)
     
    const unitIdx = trackedUnits.findIndex(unit => unit.id === unitId && unit.trackedAwakenings)

    useEffect(() => {
        if(unitIdx !== -1) {
            if(basicCatalystTracked !== trackedUnits[unitIdx].trackedAwakenings?.trackedCatalysts.find(c => c.isEpic === false)?.count.isTracked) {
                setIsBasicCatalystChanged(true)
            } else {
                setIsBasicCatalystChanged(false)
            }
        }
    }, [basicCatalystTracked, trackedUnits, unitIdx])

    useEffect(() => {
        if(unitIdx !== -1) {
            if(epicCatalystTracked !== trackedUnits[unitIdx].trackedAwakenings?.trackedCatalysts.find(c => c.isEpic === true)?.count.isTracked) {
                setIsEpicCatalystChanged(true)
            } else {
                setIsEpicCatalystChanged(false)
            }
        }
    }, [epicCatalystTracked, trackedUnits, unitIdx])

    useEffect(() => {
        if(unitIdx !== -1) {
            if(basicRuneTracked !== trackedUnits[unitIdx].trackedAwakenings?.trackedRunes.find(r => r.type === "basic")?.count.isTracked) {
                setIsBasicRuneChanged(true)
            } else {
                setIsBasicRuneChanged(false)
            }
        }
    }, [basicRuneTracked, trackedUnits, unitIdx])

    useEffect(() => {
        if(unitIdx !== -1) {
            if(midRuneTracked !== trackedUnits[unitIdx].trackedAwakenings?.trackedRunes.find(r => r.type === "greater")?.count.isTracked) {
                setIsMidRuneChanged(true)
            } else {
                setIsMidRuneChanged(false)
            }
        }
    }, [midRuneTracked, trackedUnits, unitIdx])

    useEffect(() => {
        if(unitIdx !== -1) {
            if(topRuneTracked !== trackedUnits[unitIdx].trackedAwakenings?.trackedRunes.find(r => r.type === "epic")?.count.isTracked) {
                setIsTopRuneChanged(true)
            } else {
                setIsTopRuneChanged(false)
            }
        }
    }, [topRuneTracked, trackedUnits, unitIdx])

    useEffect(() => {
        if([isBasicCatalystChanged, isEpicCatalystChanged, isBasicRuneChanged, isMidRuneChanged, isTopRuneChanged].some(value => value === true)) {
            setAreResourcesModified(true)
        } else {
            setAreResourcesModified(false)
        }
    }, [isBasicCatalystChanged, isEpicCatalystChanged, isBasicRuneChanged, isMidRuneChanged, isTopRuneChanged])

    return {
        areResourcesModified
    }
}