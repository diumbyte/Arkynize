import React from 'react';
import GoldIcon from "../../../assets/gold.png"
import StigmaIcon from "../../../assets/stigma.png"
import MolagoraIcon from "../../../assets/molagora.png"

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
        <div className="row border-b border-black border-opacity-20 py-1">
            <img 
                className="object-contain"
                width={40}
                src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${unitCode}.png`} 
                alt={`${unitName}'s icon`}
            />
            <span className="text-2xl px-2">
                {unitName}
            </span>
        </div>
        <div className="p-2">
            {
                awakenings !== null && awakenings !== undefined ? 
                <>
                <h2 className="text-white text-opacity-60">Awakenings</h2>
                {
                    awakenings.currentCatalysts.map(catalyst => {
                        return (
                            <ResourceListItem
                                key={catalyst.catalystId}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.catalystCode}.png`}
                                imageAlt={`${catalyst.catalystCode}'s icon`}
                                resourceName={catalyst.catalystName}
                                currentCount={catalyst.count.current}
                                desiredCount={catalyst.count.required}
                            />  
                        )
                    })
                }
                {
                    awakenings.currentRunes.map(rune => {
                        return (
                            <ResourceListItem
                                key={rune.runeId}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${rune.runeCode}.png`}
                                imageAlt={`${rune.runeName}'s icon`}
                                resourceName={rune.runeName}
                                currentCount={rune.count.current}
                                desiredCount={rune.count.required}
                            />  
                        )
                    })
                }
                </>
                : <></>
            } 
            {
                skills.length !== 0 &&
                skills.map(skill => {
                    return (
                        <>
                            <h2 className="text-white text-opacity-60 mt-2">Skills</h2>
                            {skill.currentCatalysts.map(catalyst => {
                                return (
                                    <ResourceListItem
                                        key={catalyst.catalystId}
                                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.catalystCode}.png`}
                                        imageAlt={`${catalyst.catalystCode}'s icon`}
                                        resourceName={catalyst.catalystName}
                                        currentCount={catalyst.count.current}
                                        desiredCount={catalyst.count.required}
                                    />
                                )
                            })}
                            {/* TODO: Other Skill Resources like Gold/Mola/Stigma */}
                            <ResourceListItem
                                imageSourcePath={GoldIcon}
                                imageAlt={"Gold icon"}
                                currentCount={skill.goldCount.current}
                                desiredCount={skill.goldCount.required}
                                resourceName={"Gold"}
                            />
                            {
                                skill.stigmaCount.required !== 0 ?
                                <ResourceListItem
                                    imageSourcePath={StigmaIcon}
                                    imageAlt={"Stigma icon"}
                                    currentCount={skill.stigmaCount.current as number}
                                    desiredCount={skill.stigmaCount.required as number}
                                    resourceName={"Stigma"}
                                />
                                :
                                <ResourceListItem
                                    imageSourcePath={MolagoraIcon}
                                    imageAlt={"Molagora icon"}
                                    currentCount={skill.molagoraCount.current}
                                    desiredCount={skill.molagoraCount.required}
                                    resourceName={"Molagora"}
                                />
                            }
                        </>
                    )
                })
            }
        </div>
    </div>
    )
}