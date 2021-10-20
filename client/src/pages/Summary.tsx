import { useEffect, useState } from 'react';
import { TrackedUnit } from '../redux/actions/unitsReducer';
// import { useGetAllUnitsQuery } from "../generated/graphql"
import { useAppSelector } from "../redux/hooks"

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
                            <div className="bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-auto">
                                <div className="row">
                                    <img 
                                        className="w-1/2 h-full object-contain"
                                        src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unit.unitCode}.png`} 
                                        alt={`${unit.unitName}'s icon`}
                                    />
                                </div>
                                <div className="row border-b border-black border-opacity-20">
                                    {unit.unitName}
                                </div>
                                {/* TODO: Iterate over tracked materials */}
                                {
                                    unit.awakenings 
                                    && 
                                    unit.awakenings.currentCatalysts.map(catalyst => {
                                        return (
                                            <div className="row">
                                                {catalyst.catalystName}
                                            </div>
                                        )
                                    })
                                    
                                }
                                {
                                    unit.awakenings 
                                    &&
                                    unit.awakenings.currentRunes.map(rune => {
                                        return (
                                            <div className="row">
                                                {rune.runeName}
                                            </div>
                                        )
                                    })
                                }
                                {
                                    unit.skills.length !== 0 &&
                                    unit.skills.map(skill => {
                                        return (
                                            <>
                                                {skill.currentCatalysts.map(catalyst => {
                                                    return (
                                                        <div key={`${skill.skillId}_${catalyst.catalystId}`} className="row">
                                                            {catalyst.catalystName}
                                                        </div>
                                                    )
                                                })}
                                                <div key={skill.skillId} className="row">{skill.currentMolagora}</div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}