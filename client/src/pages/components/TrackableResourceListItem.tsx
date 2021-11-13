import { ReactComponent as CrossIcon } from "../../assets/cross.svg"
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg"
import { NumberInput } from "./NumberInput"

type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceName: string,
    desiredCount: number,
    isTracked: boolean,
    onItemUntracked: () => void
}

export const TrackableResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceName,
    desiredCount,
    isTracked,
    onItemUntracked
}:ResourceListItemProp) => {
    return (
        isTracked ?
        <div className="flex items-center justify-between mx-8">
            <div className="flex-1 flex justify-start items-center py-4" >
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
            <div className="flex text-center md:text-left">
                <CrossIcon fill={"#fff"} width={12} className="mx-2"/>
                {desiredCount}
            </div>
            <div className="flex-1">
                <CancelIcon 
                    width={20} 
                    className=" ml-auto text-gray-400 fill-current cursor-pointer hover:fill-current hover:text-white"
                    onClick={onItemUntracked}
                />
            </div>
        </div>
        :
        <></>
    )
}