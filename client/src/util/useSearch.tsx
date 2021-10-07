import {useState, useEffect} from 'react';
import Fuzzy from "fuzzy"

import { Unit, GetAllUnitsQuery } from '../generated/graphql';


export const useSearch = (data: GetAllUnitsQuery | undefined) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<Array<Unit>>([]);

    useEffect(() => {

        const inputLength = searchTerm.trim().toLowerCase().length

        const fuzzyOptions = {
            extract(item: Unit) {
                return item.name
            }
        }

        if(data !== undefined) {
            const results = Fuzzy.filter(searchTerm, data?.units, fuzzyOptions).map(item => item.original);
    
            if (inputLength !== 0) {
                setSearchResults(results as unknown as Array<Unit>)
            }
        }

    }, [searchTerm, data])

    return {
        searchTerm,
        setSearchTerm,
        searchResults
    }
}