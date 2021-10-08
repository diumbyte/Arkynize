import { useState, useEffect } from "react"
import { Awakening } from "../generated/graphql"

type isAwakeningLevelComplete = {
    id: number,
    state: number,
    status: boolean
}

type UseAwakeningTrackingProps = {
    awakenings: Array<Awakening>
}

export const useAwakeningTracking = ({
    awakenings
}: UseAwakeningTrackingProps) => {
    // Current awakenings
    const [currentAwakenings, setCurrentAwakenings] = useState<Array<isAwakeningLevelComplete>>([])
    // Desired awakenings
    const [desiredAwakenings, setDesiredAwakenings] = useState<Array<isAwakeningLevelComplete>>([])

    useEffect(() => {
        if(awakenings !== undefined) {
            setCurrentAwakenings(awakenings.map(a => ({id: a.id, state: a.state, status: false})))
            setDesiredAwakenings(awakenings.map(a => ({id: a.id, state: a.state, status: false})))
        }
    }, [awakenings])

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
        setDesiredAwakenings(updatedCurrentAwakenings);
    }

    const onDesiredAwakeningClick = (id: number)  => {
        const clickedIdx = desiredAwakenings.findIndex(da => da.id === id);
        const reversedIdx = currentAwakenings.slice().reverse().findIndex(ca => ca.status === true)
        const highestCurrentAwakeningIdx = ( reversedIdx >= 0 ? currentAwakenings.length - 1 - reversedIdx : reversedIdx)

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