type ResourceListItemProp = {
    imageSourcePath: string,
    imageAlt: string,
    resourceName: string,
    currentCount: number,
    desiredCount: number
}

export const ResourceListItem = ({
    imageSourcePath,
    imageAlt,
    resourceName,
    currentCount,
    desiredCount
}:ResourceListItemProp) => {
    return (
        <div className="row">
            <img 
                className="w-1/8 h-full object-contain"
                src={imageSourcePath} 
                alt={imageAlt}
            />
            {resourceName}
        </div>
    )
}