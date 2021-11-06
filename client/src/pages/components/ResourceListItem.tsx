import { ReactComponent as CrossIcon } from "../../assets/cross.svg"
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg"

type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceName: string,
    currentCount: number,
    desiredCount: number,
    isTracked: boolean,
    onCurrentCountChange: (value: number) => void
}

export const ResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceName,
    currentCount,
    desiredCount,
    isTracked,
    onCurrentCountChange
}:ResourceListItemProp) => {
    return (
        isTracked ?
        <>
            <div className="flex justify-start items-center" >
                {/* TODO: If catalyst -> open modal with drop/shop info */}
                <img 
                    className="h-full object-contain cursor-pointer mx-2 md:mx-0"
                    width={30}
                    src={imageSourcePath} 
                    alt={imageAlt}
                    onClick={(e) => {
                        // TODO: Some error alert when trying to increase past max
                        let newValue = currentCount + 1;
                        if (newValue <= desiredCount) {
                            onCurrentCountChange(newValue)
                        }
                    }}
                />
                <span className="pl-1 text-center hidden md:inline">
                    {resourceName}
                </span>
            </div>
            <CrossIcon fill={"#fff"} width={12}/>
            <div className="flex justify-between px-8 md:px-3">
                <div className="inline-block">
                    {currentCount}
                </div>
                <span>
                    {` / `}
                </span>
                <div className="inline-block">
                    {desiredCount}
                </div>
            </div>
            <CancelIcon fill={"#bbb"} width={20} className="mx-2"/>
        </>
        :
        <></>
    )
}