import React from 'react';
import { NavLink } from "react-router-dom";

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
    return (
        <NavLink 
            to={`/${destination}`}
            className={`
                row 
                h-28 
                cursor-pointer 
                hover:bg-primaryBlue-light
            `}
            activeClassName="bg-primaryBlue-light"
        >
            <Icon />
            <span className={`text-3x1 text-white ml-12`}>{title}</span>
        </NavLink>
    )
}