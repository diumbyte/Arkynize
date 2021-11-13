type EpisodeListProps = {
    name: string
}

export const EpisodeList: React.FC<EpisodeListProps> = ({
    name,
    children
}) => {
    return (
        <div className="border border-gray-300 rounded my-4">
            <h2 className="text-xl border-t-4 border-yellow-500 p-2">{name}</h2>
            <div className="border-t border-gray-300">
                {children}
            </div>
        </div>
    )
}