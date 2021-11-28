import ReactTooltip from "react-tooltip"

import GoldIcon from "../../assets/gold.png"
import StigmaIcon from "../../assets/stigma.png"
import MolagoraIcon from "../../assets/molagora.png"
import { ReactComponent as HelpIcon } from "../../assets/help.svg"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { EditableResourceListItem } from "../../components/EditableResourceListItem"
import { ITrackeableCount, TrackedCatalyst, TrackedRune } from "../../redux/types"
import { editTotalCatalyst, editTotalGold, editTotalMolagora, editTotalRune, editTotalStigma } from "../../redux/unitsReducers"

export const OverallResourceSummary = () => {
    const dispatch = useAppDispatch();
    const { totalResources } = useAppSelector(state => state.units)
    

    return (
        <div className="w-full mx-auto mb-2">
            <div className="text-2xl px-2 mb-4">
                Total Costs
            </div>
            <div className="p-2 flex flex-wrap bg-white rounded shadow p-4 text-sm ">
                <div className="w-full flex items-center">
                    <span className="text-xl mr-2">Catalysts</span>
                    <HelpIcon fill="#263645" className="cursor-pointer" data-tip data-for="catalyst-info"/>
                    <ReactTooltip id="catalyst-info" place="bottom">
                        <span>Click on catalysts for shop and drop information</span>
                    </ReactTooltip>
                    {/* TODO: The "i" help icon that shows a tooltip = Click on catalysts for locations */}
                </div>
                {
                    totalResources.catalysts.map((catalyst) => {
                        return (
                            <EditableResourceListItem
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
                <div className="w-full">
                    <p className="text-xl">Runes</p>
                </div>
                {
                    totalResources.runes.map((rune) => {
                        return (
                            <EditableResourceListItem
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
                <div className="w-full">
                    <p className="text-xl">Skill Costs</p>
                </div>
                <EditableResourceListItem
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