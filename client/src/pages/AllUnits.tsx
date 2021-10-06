import React, {useState, ChangeEvent} from 'react';
import Fuse from 'fuse.js'

import { useGetAllUnitsQuery } from "../generated/graphql"
import { SearchBar } from './components/SearchBar';
import { UnitCard } from './components/UnitCard';
// import { useHistory } from "react-router-dom"



export const AllUnits = () => {
    // const history = useHistory();
    const { data, loading, error } = useGetAllUnitsQuery();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {value: newSearchTerm}} = e
        const inputLength = newSearchTerm.trim().toLowerCase().length

        setSearchTerm(newSearchTerm)
        
        const fuseOpts = {
            threshold: 0.1,
            distance: 200,
            keys: ["name"]
        }

        const units = data?.units;

        const fuse = new Fuse(units, fuseOpts);
        const results = fuse.search(searchTerm).map(sugg => sugg.item)

        if (inputLength === 0) {
            setSearchResults(units)
        } else {
            setSearchResults(results)
        }
    }
    
    return (
        <div className="h-auto">
            <SearchBar 
                value={searchTerm}
                onChange={onSearchTermChange}
            />
            <h1>List of Units:</h1>
            <div className="max-w-screen-xl	flex flex-row flex-wrap mt-2 justify-between md:justify-start">
                { loading ? (
                    <h6>No units yet</h6>
                ) : 
                searchTerm.length !== 0 ? (
                    searchResults.map(unit => {
                        return <UnitCard key={unit?.id} id={unit?.id} code={unit?.code} name={unit?.name}/>
                    })
                ) 
                : 
                (
                    data?.units.map(unit => {
                    return <UnitCard key={unit?.id} id={unit?.id} code={unit?.code} name={unit?.name}/>
                })
                )
                }
            </div>
        </div>
    )
}