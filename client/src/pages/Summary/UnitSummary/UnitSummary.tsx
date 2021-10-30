import React from 'react';
import { TrackedAwakening, TrackedSkill } from "../../../redux/actions/unitsReducer"

import { ResourceListItem } from "./ResourceListItem"

type UnitSummaryProps = {
    unitName: string,
    unitCode: string,
    awakenings: TrackedAwakening,
    skills: TrackedSkill[]
}

export const UnitSummary = ({
    unitName,
    unitCode,
    awakenings,
    skills
}: UnitSummaryProps) => {
    return (
        <div className="bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-auto">
        <div className="row">
            <img 
                className="w-1/2 h-full object-contain"
                src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unitCode}.png`} 
                alt={`${unitName}'s icon`}
            />
        </div>
        <div className="row border-b border-black border-opacity-20">
            {unitName}
        </div>
        {
            awakenings 
            && 
            awakenings.currentCatalysts.map(catalyst => {
                return (
                    <ResourceListItem
                        key={catalyst.catalystId}
                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.catalystCode}.png`}
                        imageAlt={`${catalyst.catalystCode}'s icon`}
                        resourceName={catalyst.catalystName}
                        currentCount={catalyst.currentCount}
                        desiredCount={catalyst.desiredCount}
                    />  
                )
            })
            
        }
        {
            awakenings 
            &&
            awakenings.currentRunes.map(rune => {
                return (
                    <ResourceListItem
                        key={rune.runeId}
                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${rune.runeCode}.png`}
                        imageAlt={`${rune.runeName}'s icon`}
                        resourceName={rune.runeName}
                        currentCount={rune.currentCount}
                        desiredCount={rune.desiredCount}
                    />  
                )
            })
        }
        {
            skills.length !== 0 &&
            skills.map(skill => {
                return (
                    <>
                        {skill.currentCatalysts.map(catalyst => {
                            return (
                                <ResourceListItem
                                    key={catalyst.catalystId}
                                    imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.catalystCode}.png`}
                                    imageAlt={`${catalyst.catalystCode}'s icon`}
                                    resourceName={catalyst.catalystName}
                                    currentCount={catalyst.currentCount}
                                    desiredCount={catalyst.desiredCount}
                                />
                            )
                        })}
                        {/* TODO: Other Skill Resources like Gold/Mola/Stigma */}
                    </>
                )
            })
        }
    </div>
    )
}