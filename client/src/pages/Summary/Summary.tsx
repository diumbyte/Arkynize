import { useEffect, useState } from 'react';
import { TrackedAwakening, TrackedUnit } from '../../redux/types';
import { useAppSelector } from "../../redux/hooks"

import { UnitSummary } from "./UnitSummary/UnitSummary"

export const Summary = () => {
    const [ localedTrackedUnits, setLocalTrackedUnits] = useState<TrackedUnit[]>([]);
    const { trackedUnits } = useAppSelector(state => state.units)
    useEffect( () => {
        if(!trackedUnits) {
            return;
        }

        setLocalTrackedUnits(trackedUnits as [])
    }, [trackedUnits])
    
    return (
        <div className="container">
            <div className="flex">
                {
                    localedTrackedUnits.length !== 0 && 
                    localedTrackedUnits.map(unit => {
                        return (
                            <UnitSummary 
                                key={unit.id}
                                unitName={unit.name}
                                unitCode={unit.code}
                                awakenings={unit.trackedAwakenings as TrackedAwakening}
                                skills={unit.trackedSkills}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}