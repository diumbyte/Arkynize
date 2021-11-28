import React from 'react';

import { useAppSelector } from "../redux/hooks"
import { Logo as LogoComponent } from './Logo';
import { SidebarItem } from './SidebarItem';
import { ReactComponent as AddIcon } from "../assets/add.svg" 
import { ReactComponent as SummaryIcon } from "../assets/summary.svg" 
import { ReactComponent as SummarizeIcon } from "../assets/summarize.svg"
import { ReactComponent as SettingsIcon } from "../assets/settings.svg"


type SidebarProps = {
    isExpanded: boolean,
    setIsExpanded: Function
}

export const Sidebar = ({
    isExpanded,
    setIsExpanded
}: SidebarProps) => {

    const { trackedUnits } = useAppSelector(state => state.units)

    const mobileSidebarExpansion = () => {
        if(isExpanded) {
            setIsExpanded(false)
        }
    }

    return (
        <nav 
            className={`md:relative fixed inset-y-0 left-0 z-50 flex flex-col h-full bg-primaryBlue w-52 lg:w-72 transition duration-300 ease-out 
            transform translate-x-0
            ${isExpanded ? "ease-out translate-x-0" : "ease-in -translate-x-full md:translate-x-0"}`
            }
        >
            <LogoComponent />
            <div className={``}>
                <SidebarItem 
                    title="All Units"
                    destination="units"
                    Icon={AddIcon}
                    onClick={mobileSidebarExpansion}
                />
                <SidebarItem
                    title="Summary"
                    destination="summary"
                    Icon={SummaryIcon}
                >
                    {
                        trackedUnits.length > 0 &&
                        <>
                        <SidebarItem 
                            destination="summary#"
                            title="Overall"
                            Icon={SummarizeIcon}
                            onClick={mobileSidebarExpansion}
                        />
                        {
                            trackedUnits.map(unit => (
                                <SidebarItem 
                                    key={unit.id}
                                    destination={`summary#${unit.id}`}
                                    title={unit.name}
                                    imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unit.code}.png`}
                                    onClick={mobileSidebarExpansion}
                                />
                            ))
                        }
                        </>
                    }
                </SidebarItem>
                <SidebarItem
                    title="Settings"
                    destination="settings"
                    Icon={SettingsIcon}
                />
            </div>
        </nav>
    )
}