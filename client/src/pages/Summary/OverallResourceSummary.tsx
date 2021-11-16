import GoldIcon from "../../assets/gold.png"
import StigmaIcon from "../../assets/stigma.png"
import MolagoraIcon from "../../assets/molagora.png"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { useOverallResourceCosts } from "../../hooks/useOverallResourceCosts"
import { ResourceListItem } from "../components/ResourceListItem";
import { EditableResourceListItem } from "../components/EditableResourceListItem"
import { ITrackeableCount, TrackedCatalyst, TrackedRune } from "../../redux/types"
import { editTotalCatalyst, editTotalGold, editTotalMolagora, editTotalRune, editTotalStigma } from "../../redux/actions/unitsReducer"

export const OverallResourceSummary = () => {
    const dispatch = useAppDispatch();
    const { totalResources } = useAppSelector(state => state.units)
    

    return (
        <div className="bg-tavernBrown-light bg-opacity-80 rounded p-2 border border-black w-full md:w-11/12 md:min-w-450 max-w-4xl text-sm my-2 md:mx-2">
            <div className="text-2xl px-2 text-center">
                Total Costs
            </div>
            <div className="p-2 flex flex-wrap justify-around">
                {
                    totalResources.catalysts.map((catalyst) => {
                        return (
                            <EditableResourceListItem
                                className=""
                                key={catalyst.id}
                                resourceId={catalyst.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/catalyst/${catalyst.code}.png`}
                                imageAlt={`${catalyst.code}'s icon`}
                                resourceName={catalyst.name}
                                currentCount={catalyst.count.current}
                                desiredCount={catalyst.count.required}
                                isTracked={true}
                                onCurrentCountChange={(value) => {
                                    const updatedCatalyst:TrackedCatalyst = {
                                        ...catalyst,
                                        count: {
                                            ...catalyst.count,
                                            current: value
                                        }
                                    }

                                    dispatch(editTotalCatalyst(updatedCatalyst))
                                }}
                            />  
                        )
                    })

                }
                {
                    totalResources.runes.map((rune) => {
                        return (
                            <EditableResourceListItem
                                className=""
                                resourceId={rune.id}
                                key={rune.id}
                                imageSourcePath={`${process.env.PUBLIC_URL}/assets/images/rune/${rune.code}.png`}
                                imageAlt={`${rune.name}'s icon`}
                                resourceName={rune.name}
                                currentCount={rune.count.current}
                                desiredCount={rune.count.required}
                                isTracked={true}
                                onCurrentCountChange={(value) => {
                                    const updatedRune:TrackedRune = {
                                        ...rune,
                                        count: {
                                            ...rune.count,
                                            current: value
                                        }
                                    }

                                    dispatch(editTotalRune(updatedRune))
                                }}
                            />  
                        )
                    })

                }
                <EditableResourceListItem
                    className=""
                    imageSourcePath={GoldIcon}
                    imageAlt={"Gold icon"}
                    currentCount={totalResources.gold.current}
                    desiredCount={totalResources.gold.required}
                    resourceName={"Gold"}
                    isTracked={true}
                    onCurrentCountChange={(value) => {
                        const updatedGold:ITrackeableCount = {
                            ...totalResources.gold,
                            current: value
                        }
                        dispatch(editTotalGold(updatedGold))
                    }}
                />
                <EditableResourceListItem
                    className=""
                    imageSourcePath={MolagoraIcon}
                    imageAlt={"Molagora icon"}
                    currentCount={totalResources.molagora.current}
                    desiredCount={totalResources.molagora.required}
                    resourceName={"Molagora"}
                    isTracked={true}
                    onCurrentCountChange={(value) => {
                        const updatedMolagora:ITrackeableCount = {
                            ...totalResources.molagora,
                            current: value
                        }

                        dispatch(editTotalMolagora(updatedMolagora))
                    }}
                />
                <EditableResourceListItem
                    className=""
                    imageSourcePath={StigmaIcon}
                    imageAlt={"Stigma icon"}
                    currentCount={totalResources.stigma.current}
                    desiredCount={totalResources.stigma.required}
                    resourceName={"Stigma"}
                    isTracked={true}
                    onCurrentCountChange={(value) => {
                        const updatedStigma:ITrackeableCount = {
                            ...totalResources.stigma,
                            current: value
                        }

                        dispatch(editTotalStigma(updatedStigma))
                    }}
                />
            </div>
        </div>
    )
}