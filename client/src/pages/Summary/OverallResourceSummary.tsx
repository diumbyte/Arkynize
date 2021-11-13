import GoldIcon from "../../assets/gold.png"
import StigmaIcon from "../../assets/stigma.png"
import MolagoraIcon from "../../assets/molagora.png"

import { useOverallResourceCosts } from "../../hooks/useOverallResourceCosts"
import { ResourceListItem } from "../components/ResourceListItem";

export const OverallResourceSummary = () => {
    const { 
        trackedCatalysts,
        trackedGold,
        trackedMolagora,
        trackedRunes,
        trackedStigma
    } = useOverallResourceCosts();

    return (
        <div className="bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-full md:w-1/3 md:min-w-450 max-w-4xl text-sm my-2 md:mx-2">
            <div className="text-2xl px-2 text-center">
                Total Costs
            </div>
            <div className="p-2">
                {
                    trackedCatalysts.map((catalyst) => {
                        return (
                            <ResourceListItem
                                key={catalyst.id}
                                id={catalyst.id}
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
                    trackedRunes.map((rune) => {
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
                <ResourceListItem
                    imageSourcePath={GoldIcon}
                    imageAlt={"Gold icon"}
                    currentCount={trackedGold.current}
                    desiredCount={trackedGold.required}
                    resourceName={"Gold"}
                />
                <ResourceListItem
                    imageSourcePath={MolagoraIcon}
                    imageAlt={"Molagora icon"}
                    currentCount={trackedMolagora.current}
                    desiredCount={trackedMolagora.required}
                    resourceName={"Molagora"}
                />
                <ResourceListItem
                    imageSourcePath={StigmaIcon}
                    imageAlt={"Stigma icon"}
                    currentCount={trackedStigma.current}
                    desiredCount={trackedStigma.required}
                    resourceName={"Stigma"}
                />
            </div>
        </div>
    )
}