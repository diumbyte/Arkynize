import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg"
type HeaderProps = {
    setIsExpanded: Function
}

export const Header = ({
    setIsExpanded
}: HeaderProps) => {
    const location = useLocation();
    const locationName = location.pathname.substring(1)
    
    return (
        <div className="flex flex-row flex-nowrap items-center pt-4 pb-4">
            <BurgerIcon className="cursor-pointer md:hidden" onClick={() => setIsExpanded(true)} fill={"#fff"}/>
            <span className="capitalize md:text-3xl text-2xl md:ml-0 ml-4">
                {locationName.length === 0 ? "Home" : locationName}
            </span>
        </div>
    )
}