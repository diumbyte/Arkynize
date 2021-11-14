import { HTMLAttributes } from "react"
import { ReactComponent as CrossIcon } from "../../assets/cross.svg"
import { NumberInput } from "./NumberInput"

type ResourceListItemProp = HTMLAttributes<HTMLDivElement> & {
    imageSourcePath: string,
    imageAlt: string,
    resourceId?: number,
    resourceName: string,
    currentCount: number,
    desiredCount: number,
    isTracked: boolean,
    onCurrentCountChange: (value: number) => void
}

export const EditableResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceId,
    resourceName,
    currentCount,
    desiredCount,
    isTracked,
    onCurrentCountChange,
    className,
    ...props
}:ResourceListItemProp) => {
    return (
        <div className={`${className}`}>
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
                <NumberInput
                    className="flex-1"
                    currentValue={currentCount}
                    desiredValue={desiredCount}
                    onCountChange={onCurrentCountChange}
                />
                <div className="px-2">
                    {` / `}
                </div>
                <div className={`flex-1 text-center md:text-left ${isTracked ? "opacity-100" : "opacity-30"}`}>
                    {desiredCount}
                </div>
            </div>
        </div>
    )
}