import { useLocation } from 'react-router-dom';
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg"

type HeaderProps = {
    setIsExpanded: Function
}

export const Header = ({
    setIsExpanded
}: HeaderProps) => {
    const location = useLocation();
    const locationName = location.pathname.substring(1)

    return (
        <div className="sticky top-0 md:relative flex flex-row flex-nowrap items-center pt-4 pb-4 bg-tavernBrown shadow">
            <BurgerIcon className="cursor-pointer md:hidden" onClick={() => setIsExpanded(true)} fill={"#fff"}/>
            <span className="capitalize md:text-3xl text-2xl md:ml-0 ml-4">
                {
                    locationName.length === 0 ? "Home" 
                    : 
                    locationName.includes("unit/") ? 
                    "Unit Detail"
                    :
                    locationName
                }
            </span>
        </div>
    )
}