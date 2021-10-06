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
        <div className="row text-black mb-4">
            <input type="text" name="search" id="search" placeholder={placeholder} value={value} onChange={e => onChange(e)}
                className="p-2 bg-transparent border-2 border-tavernBrown-light rounded-md md:w-1/4 w-full"
            />
        </div>
    )
}