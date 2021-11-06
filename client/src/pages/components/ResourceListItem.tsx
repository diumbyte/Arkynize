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
            <div className="flex justify-start items-center" >
                {/* TODO: If catalyst -> open modal with drop/shop info */}
                <img 
                    className="h-full object-contain cursor-pointer mx-2 md:mx-0"
                    width={30}
                    src={imageSourcePath} 
                    alt={imageAlt}
                    onClick={() => {
                        const newValue = currentCount + 1;
                        if (newValue <= desiredCount) {
                            onCurrentCountChange(newValue)
                        }
                    }}
                />
                <span className="pl-1 text-center hidden lg:inline">
                    {resourceName}
                </span>
            </div>
            <CrossIcon fill={"#fff"} width={12}/>
            <div className="px-6">
                <div className="inline-block w-1/3">
                    {currentCount}
                </div>
                <div className="inline-block w-1/3">
                    {` / `}
                </div>
                <div className="inline-block w-1/3">
                    {desiredCount}
                </div>
            </div>
            <CancelIcon 
                // fill={"#bbb"} 
                width={20} 
                className="mx-2 text-gray-400 fill-current cursor-pointer hover:fill-current hover:text-white"
                onClick={() => {
                    onItemUntracked()
                }}
            />
        </>
        :
        <></>
    )
}