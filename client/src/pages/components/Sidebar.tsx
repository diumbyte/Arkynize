import React from 'react';

import { Logo as LogoComponent } from './Logo';
import { SidebarItem } from './SidebarItem';
import {ReactComponent as AddIcon} from "../../assets/add.svg" 
import {ReactComponent as SummaryIcon} from "../../assets/summary.svg" 

type SidebarProps = {
    isExpanded: boolean,
    setIsExpanded: Function
}

export const Sidebar = ({
    isExpanded,
    setIsExpanded
}: SidebarProps) => {

    const mobileSidebarExpansion = () => {
        if(isExpanded) {
            setIsExpanded(false)
        }
    }

    return (
        <nav 
            className={`md:relative fixed inset-y-0 left-0 z-30 flex flex-col h-full bg-primaryBlue w-72 transition duration-300 ease-out 
            transform translate-x-0
            ${isExpanded ? "ease-out translate-x-0" : "ease-in -translate-x-full md:translate-x-0"}`
            }
            onClick={mobileSidebarExpansion}
        >
            <LogoComponent />
            <div className={``}>
                <SidebarItem 
                    title="All Units"
                    destination="units"
                    Icon={AddIcon}
                />
                <SidebarItem
                    title="Summary"
                    destination="summary"
                    Icon={SummaryIcon}
                />
            </div>
        </nav>
    )
}