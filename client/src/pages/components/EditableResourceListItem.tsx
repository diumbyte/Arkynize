import { Switch } from "@headlessui/react"
import { ReactComponent as CrossIcon } from "../../assets/cross.svg"
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg"
import { NumberInput } from "./NumberInput"

type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceName: string,
    currentCount: number,
    desiredCount: number,
    isTracked: boolean,
    onCurrentCountChange: (value: number) => void
    onItemUntracked: () => void
}

export const EditableResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceName,
    currentCount,
    desiredCount,
    isTracked,
    onCurrentCountChange,
    onItemUntracked
}:ResourceListItemProp) => {
    return (
        <>
            <div className={`flex justify-start items-center py-4 ${isTracked ? "opacity-100" : "opacity-30"}`} >
                {/* TODO: If catalyst -> open modal with drop/shop info */}
                <img 
                    className="h-full object-contain mx-2 md:mx-0"
                    width={30}
                    src={imageSourcePath} 
                    alt={imageAlt}
                />
                <span className="pl-1 text-center hidden lg:inline">
                    {resourceName}
                </span>
            </div>
            <CrossIcon fill={"#fff"} width={12} className={`mx-2 ${isTracked ? "opacity-100" : "opacity-30"}`}/>
            <div className="flex flex-row items-center">
                {/* <NumberInput
                    className="flex-1"
                    currentValue={currentCount}
                    desiredValue={desiredCount}
                    onCountChange={onCurrentCountChange}
                />
                <div className="px-2">
                    {` / `}
                </div> */}
                <div className={`flex-1 text-center md:text-left ${isTracked ? "opacity-100" : "opacity-30"}`}>
                    {desiredCount}
                </div>
            </div>
            <Switch
                checked={isTracked}
                onChange={onItemUntracked}
                className={`${
                    isTracked ? 'bg-blue-600' : 'bg-gray-200'} 
                    transition-colors ease-linear duration-200
                    relative inline-flex items-center h-6 rounded-full w-11`}
            >
                <span className="sr-only">Toggle tracking</span>
                <span
                    className={`${
                    isTracked ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
                />
            </Switch>
        </>
    )
}