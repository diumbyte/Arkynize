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
        <div className="row text-black">
            <input type="text" name="search" id="search" placeholder={placeholder} value={value} onChange={e => onChange(e)}/>
        </div>
    )
}