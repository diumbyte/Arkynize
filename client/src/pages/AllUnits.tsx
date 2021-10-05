import React from 'react';
import { useGetAllUnitsQuery } from "../generated/graphql"
import { UnitCard } from './components/UnitCard';
// import { useHistory } from "react-router-dom"

export const AllUnits = () => {
    // const history = useHistory();
    const { data, loading, error } = useGetAllUnitsQuery();

    return (
        <div className="h-auto">
            <h1>List of Units:</h1>
            <div className="flex flex-row flex-wrap mt-2 px-4 md:pl-6 md:pr-4">
                { loading ? (
                    <h6>No units yet</h6>
                ) : (
                    data?.units?.map(unit => {
                    return <UnitCard key={unit?.id} id={unit?.id} code={unit?.code} name={unit?.name}/>
                })
                )
                }
            </div>
        </div>
    )
}