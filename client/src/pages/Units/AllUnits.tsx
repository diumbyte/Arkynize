import React, {ChangeEvent} from 'react';
import LoadingAnimation from "../../assets/loading.gif"
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
                    <div className="mx-auto flex flex-col items-center justify-center">
                        <img src={LoadingAnimation} alt="Loading animation"/>
                        <h2 className="text-2xl">Loading...</h2>
                    </div>
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