import { ReactComponent as CrossIcon } from "../../assets/cross.svg"
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg"
import { NumberInput } from "./NumberInput"

type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceName: string,
    currentCount: number,
    desiredCount: number,
}

export const ResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceName,
    currentCount,
    desiredCount
}:ResourceListItemProp) => {
    return (
        desiredCount !== 0 ?
        <div className="flex w-full items-center py-2">
            <div className="md:flex-1 flex justify-start items-center" >
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
            <div className="flex-1 flex flex-row items-center">
                <div className="flex-1 text-center md:text-right">
                    {currentCount}
                </div>
                <div className="px-2">
                    {` / `}
                </div>
                <div className="flex-1 text-center md:text-left">
                    {desiredCount}
                </div>
            </div>
        </div>
        :
        <></>
    )
}