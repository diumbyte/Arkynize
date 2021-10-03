import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

type SidebarItemProps = React.HTMLProps<HTMLDivElement> & {
    title: string;
    destination: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
} 

export const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    destination,
    Icon,
    ...props
}: SidebarItemProps) => {

    let location = useLocation()
    const isActive = location.pathname.substring(1) === destination

    console.log("location.pathname", location.pathname);
    console.log("destination", destination)
    return (
        <NavLink 
            to={`/${destination}`}
            className={`
                row 
                h-20 
                cursor-pointer 
                hover:bg-primaryBlue-light
            `}
            activeClassName="bg-primaryBlue-light"
        >
            {
                isActive &&
                <div className={`w-1 bg-secondaryBlue absolute left-0 pt-20`}></div>
            }
            <Icon width={24} height={24} fill={"#fff"}/>
            <span className={`text-3x1 text-white ml-12`}>{title}</span>
        </NavLink>
    )
}