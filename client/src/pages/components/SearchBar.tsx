import React, { ChangeEvent } from "react"

type SearchBarProps = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
}

export const SearchBar = ({
    value = "",
    onChange,
    placeholder = "Search"
}: SearchBarProps) => {
    return (
        <div className="row mb-4">
            <input type="text" name="search" id="search" placeholder={placeholder} value={value} onChange={e => onChange(e)}
                className="p-4 bg-white shadow-md rounded-md md:w-1/3 w-full"
            />
        </div>
    )
}