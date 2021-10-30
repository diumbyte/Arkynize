import { useEffect, useState } from 'react';
import { TrackedAwakening, TrackedUnit } from '../../redux/actions/unitsReducer';
// import { useGetAllUnitsQuery } from "../generated/graphql"
import { useAppSelector } from "../../redux/hooks"

import { UnitSummary } from "./UnitSummary/UnitSummary"

export const Summary = () => {
    // const history = useHistory();
    // const { data, loading, error } = useGetAllUnitsQuery();

    const [trackedUnits, setTrackedUnits] = useState<TrackedUnit[]>([]);
    const { units } = useAppSelector(state => state.units)
    useEffect( () => {
        if(!units) {
            return;
        }

        setTrackedUnits(units as [])
    }, [units])
    
    return (
        <div className="container">
            <div className="flex">
                {
                    trackedUnits.length !== 0 && 
                    trackedUnits.map(unit => {
                        return (
                            <UnitSummary 
                                key={unit.unitId}
                                unitName={unit.unitName}
                                unitCode={unit.unitCode}
                                awakenings={unit.awakenings as TrackedAwakening}
                                skills={unit.skills}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}