type DropListingProps = {
    chapter: string,
    instance: string,
    pointsGained: number,
    energyCost: number
}

export const DropListing = ({
    chapter,
    instance,
    energyCost,
    pointsGained,
}: DropListingProps) => {
    return (
        <div className="mx-4 py-2 px-2 text-sm border-b border-gray-300 border-opacity-30 last:border-0 flex justify-between">
            <p className="">{`Chapter ${chapter}`}</p>
            <p>-</p>
            <p>{instance}</p>
        </div>
    )
}