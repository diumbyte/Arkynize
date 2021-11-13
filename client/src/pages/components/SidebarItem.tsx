import React from 'react';
import { useState } from 'react';
import useCollapse from 'react-collapsed';
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"

type SidebarItemProps = {
    title: string,
    destination: string,
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    imageSourcePath?: string,
    onClick?: Function
} 

export const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    destination,
    Icon,
    imageSourcePath,
    onClick,
    children
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    let location = useLocation()
    const isActive = location.pathname.substring(1) === destination
    const isCollapsible = children && children.toString().length > 0;

    if(!isCollapsible) {
        return (
            <NavHashLink 
                to={`/${destination}`}
                className={`
                    row 
                    h-20 
                    cursor-pointer 
                    hover:bg-primaryBlue-light
                `}
                activeClassName="bg-primaryBlue-light"
                onClick={() => onClick && onClick()}
            >
                {
                    isActive &&
                    <div className={`w-1 bg-secondaryBlue absolute left-0 pt-20`}></div>
                }
                {
                    Icon &&
                    <Icon width={24} height={24} fill={"#fff"}/>
                }
                {
                    imageSourcePath &&
                    <img src={imageSourcePath} alt={"Unit icon"} className="object-contain w-8"/>
                }
                <div className={`text-3x1 text-white ml-12 max-w-70 text-center`}>
                    <p>{title}</p>
                </div>
            </NavHashLink>
        )
    } else {
        return (
            <>
            <div 
                className="row h-20 cursor-pointer hover:bg-primaryBlue-light"
                {
                    ...getToggleProps({
                        onClick: () => setIsExpanded(prev => !prev)
                    })
                }
                >
                {
                    Icon &&
                    <Icon width={24} height={24} fill={"#fff"}/>
                }
                <span className={`text-3x1 text-white ml-12`}>{title}</span>
            </div>
            <div {...getCollapseProps()}>
                {children}
            </div>
            </>
        )
    }
}