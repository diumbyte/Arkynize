import React from 'react';

import { Logo as LogoComponent } from './Logo';
import { SidebarItem } from './SidebarItem';
import {ReactComponent as AddIcon} from "../../assets/add.svg" 
import {ReactComponent as SummaryIcon} from "../../assets/summary.svg" 

export const Sidebar = () => {
    return (
        <nav className={`flex flex-col h-full bg-primaryBlue w-72 pt-16`}>
            <LogoComponent />
            <div className={`mt-10`}>
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