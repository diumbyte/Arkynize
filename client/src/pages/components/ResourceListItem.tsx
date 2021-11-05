import { ReactComponent as CrossIcon } from "../../assets/cross.svg"

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
        <div className="flex flex-nowrap w-full">
            <div className="flex justify-start items-center">
                {/* TODO: If catalyst -> open modal with drop/shop info */}
                <img 
                    className="h-full object-contain cursor-pointer"
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
                <span className="pl-1 text-center">
                    {resourceName}
                </span>
            </div>
            <div className="ml-auto pl-4 flex justify-between items-center">
                <CrossIcon fill={"#fff"} width={12} />
                <div className="pl-1 w-20 text-right">
                    <div className="inline-block w-6 text-left">
                        {currentCount}
                    </div>
                    <span>
                        {` / `}
                    </span>
                    <div className="inline-block w-6">
                        {desiredCount}
                    </div>
                </div>
            </div>
        </div>
    )
}