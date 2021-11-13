import APIcon from "../../assets/ap.png"

type ShopListingProps = {
    chapter: string,
    price: number
}

export const ShopListing = ({
    chapter,
    price
}: ShopListingProps) => {
    return (
        <div className="mx-4 py-2 border-b border-gray-300 last:border-0 flex flex-nowrap justify-between text-sm">
            <div className="">
                <span>Chapter </span>
                <span className="font-medium">{chapter}</span>
            </div>
            <p>{` - `}</p>
            <div className="flex">
                <p>{price}</p>
                <img src={APIcon} alt="Adventure Points icon" width={16} className="object-contain ml-2"/>
            </div>
        </div>
    )
}