import React from 'react';
import { useGetAllUnitsQuery } from "../generated/graphql"
import { useHistory } from "react-router-dom"

export const AllUnits = () => {
    const history = useHistory();
    const { data } = useGetAllUnitsQuery();

    console.log(data);
    
    return (
        <div>
            <button onClick={() => history.push("/")}>Home</button>
            <h1>List of Units:</h1>
            <ul>
                { data?.units?.length === 0 ? (
                    <h6>No units yet</h6>
                ) : (
                    data?.units?.map(unit => <li key={unit?.name}>{unit?.name}</li>)
                )
                }
            </ul>
        </div>
    )
}