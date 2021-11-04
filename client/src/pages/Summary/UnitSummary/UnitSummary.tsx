import React from 'react';
import GoldIcon from "../../../assets/gold.png"
import StigmaIcon from "../../../assets/stigma.png"
import MolagoraIcon from "../../../assets/molagora.png"

import { TrackedAwakening, TrackedSkill } from "../../../redux/types"
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
                    awakenings.trackedCatalysts.map(catalyst => {
                        return (
                            <ResourceListItem
                                key={catalyst.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                imageAlt={`${catalyst.code}'s icon`}
                                resourceName={catalyst.name}
                                currentCount={catalyst.count.current}
                                desiredCount={catalyst.count.required}
                            />  
                        )
                    })
                }
                {
                    awakenings.trackedRunes.map(rune => {
                        return (
                            <ResourceListItem
                                key={rune.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${rune.code}.png`}
                                imageAlt={`${rune.name}'s icon`}
                                resourceName={rune.name}
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
                            {skill.trackedCatalysts.map(catalyst => {
                                return (
                                    <ResourceListItem
                                        key={catalyst.id}
                                        imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                        imageAlt={`${catalyst.code}'s icon`}
                                        resourceName={catalyst.name}
                                        currentCount={catalyst.count.current}
                                        desiredCount={catalyst.count.required}
                                    />
                                )
                            })}
                            {/* TODO: Other Skill Resources like Gold/Mola/Stigma */}
                            <ResourceListItem
                                imageSourcePath={GoldIcon}
                                imageAlt={"Gold icon"}
                                currentCount={skill.trackedGold.current}
                                desiredCount={skill.trackedGold.required}
                                resourceName={"Gold"}
                            />
                            {
                                skill.trackedStigma.required !== 0 ?
                                <ResourceListItem
                                    imageSourcePath={StigmaIcon}
                                    imageAlt={"Stigma icon"}
                                    currentCount={skill.trackedStigma.current as number}
                                    desiredCount={skill.trackedStigma.required as number}
                                    resourceName={"Stigma"}
                                />
                                :
                                <ResourceListItem
                                    imageSourcePath={MolagoraIcon}
                                    imageAlt={"Molagora icon"}
                                    currentCount={skill.trackedMolagora.current}
                                    desiredCount={skill.trackedMolagora.required}
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