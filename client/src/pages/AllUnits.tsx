import React from 'react';
import { useGetAllUnitsQuery } from "../generated/graphql"
import { useHistory } from "react-router-dom"

export const AllUnits = () => {
    const history = useHistory();
    const { data, loading, error } = useGetAllUnitsQuery();

    console.log(data);
    
    return (
        <div>
            <button onClick={() => history.push("/")}>Home</button>
            <h1>List of Units:</h1>
            <ul>
                { loading ? (
                    <h6>No units yet</h6>
                ) : (
                    data?.units?.map(unit => {
                    return (<li key={unit?.name}>
                        <div>
                            <h1>{unit?.name}</h1>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unit?.code}.png`}
                                alt={`${unit?.name} icon`}
                            />
                        </div>
                    </li>)
                })
                )
                }
            </ul>
        </div>
    )
}