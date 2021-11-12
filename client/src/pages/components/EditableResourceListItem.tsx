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

export const ResourceListItem = ({
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
        isTracked ?
        <>
            <div className="flex justify-start items-center py-4" >
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
            <CrossIcon fill={"#fff"} width={12} className="mx-2"/>
            <div className="flex flex-row items-center">
                <NumberInput
                    className="flex-1"
                    currentValue={currentCount}
                    desiredValue={desiredCount}
                    onCountChange={onCurrentCountChange}
                />
                <div className="px-2">
                    {` / `}
                </div>
                <div className="flex-1 text-center md:text-left">
                    {desiredCount}
                </div>
            </div>
            <CancelIcon 
                width={20} 
                className="mx-2 text-gray-400 fill-current cursor-pointer hover:fill-current hover:text-white"
                onClick={onItemUntracked}
            />
        </>
        :
        <></>
    )
}