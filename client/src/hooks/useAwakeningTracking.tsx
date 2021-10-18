import { useState, useEffect } from "react"
import { Awakening } from "../generated/graphql"
import findLastIndex from "../util/findLastIndex"
import { useAppSelector } from "../redux/hooks"

export type isAwakeningLevelComplete = {
    id: number,
    state: number,
    status: boolean
}

type UseAwakeningTrackingProps = {
    unitId?: number,
    awakenings: Array<Awakening>
}

export const useAwakeningTracking = ({
    unitId,
    awakenings
}: UseAwakeningTrackingProps) => {
    // Current awakenings
    const [currentAwakenings, setCurrentAwakenings] = useState<Array<isAwakeningLevelComplete>>([])
    // Desired awakenings
    const [desiredAwakenings, setDesiredAwakenings] = useState<Array<isAwakeningLevelComplete>>([])
    const {units} = useAppSelector(state => state.units)

    useEffect(() => {
        const unitIdx = units.findIndex(u => u.unitId === unitId)
        if(unitIdx !== -1) {
            const trackedAwakeningIds = units[unitIdx].awakenings?.trackedAwakeningIds
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
    }, [units, unitId, awakenings])

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