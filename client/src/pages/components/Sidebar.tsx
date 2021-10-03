import React, { useState } from 'react';

import { Logo as LogoComponent } from './Logo';
import { SidebarItem } from './SidebarItem';
import {ReactComponent as AddIcon} from "../../assets/add.svg" 
import {ReactComponent as SummaryIcon} from "../../assets/summary.svg" 
import {ReactComponent as BurgerIcon } from "../../assets/burger.svg"

type SidebarProps = {
    isExpanded: boolean
}

export const Sidebar = ({
    isExpanded
}: SidebarProps) => {
    
    return (
        <nav 
            className={`relative z-30 flex flex-col h-full bg-primaryBlue w-72 transition duration-300 ease-out 
            transform translate-x-0
            ${isExpanded ? "ease-out translate-x-0" : "ease-in -translate-x-full"}`
            }
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