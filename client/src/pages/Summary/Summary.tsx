import { TrackedAwakening } from '../../redux/types';
import { useAppSelector } from "../../redux/hooks"

import { OverallResourceSummary } from './OverallResourceSummary';
import { UnitSummary } from "./UnitSummary"

export const Summary = () => {
    const { trackedUnits } = useAppSelector(state => state.units)
    
    return (
        <div className="container">
            <div className="">
                { trackedUnits.length > 0 
                    ?
                    <OverallResourceSummary
                    />
                    :
                    <p>No units tracked.</p>
                }
            </div>
            <div className="flex flex-wrap items-stretch justify-around">
                {
                    trackedUnits.length !== 0 && 
                    trackedUnits.map(unit => {
                        return (
                            <UnitSummary 
                                key={unit.id}
                                unitId={unit.id}
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