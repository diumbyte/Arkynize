import { Switch } from "@headlessui/react"
import { ReactComponent as CrossIcon } from "../../assets/cross.svg"

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
        <div className="flex items-center justify-center px-4">
            <div className={`flex-1 flex justify-start items-center py-4 px-2 ${isTracked ? "opacity-100" : "opacity-30"}`} >
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
                <div className={`flex-1 text-center md:text-left ${isTracked ? "opacity-100" : "opacity-30"}`}>
                    {desiredCount}
                </div>
            </div>
            <div className="flex-1 ">
                <div className="ml-auto w-min">
                    <Switch
                        checked={isTracked}
                        onChange={onItemUntracked}
                        className={`${
                            isTracked ? 'bg-blue-600' : 'bg-gray-200'} 
                            mx-auto
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
                </div>
            </div>
        </div>
    )
}