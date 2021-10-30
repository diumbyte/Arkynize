import React, {ChangeEvent} from 'react';

import { useGetAllUnitsQuery } from "../../generated/graphql"
import { SearchBar } from '../components/SearchBar';
import { UnitCard } from './UnitCard';
import { useSearch } from '../../hooks/useSearch';


export const AllUnits = () => {
    const { data, loading } = useGetAllUnitsQuery();

    const {
        searchResults,
        searchTerm,
        setSearchTerm
    } = useSearch(data);

    const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {value: newSearchTerm}} = e
        setSearchTerm(newSearchTerm)
    }
    
    return (
        <div className="h-auto">
            <SearchBar 
                value={searchTerm}
                onChange={onSearchTermChange}
            />
            <h1>List of Units:</h1>
            <div className="max-w-screen-xl mx-auto flex flex-row flex-wrap mt-2 justify-between md:justify-start">
                { loading || data === null ? (
                    <h6>No units yet</h6>
                ) : 
                searchTerm.length > 1 ? (
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