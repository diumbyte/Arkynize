import { useLocation, useHistory } from 'react-router-dom';
import { ReactComponent as BurgerIcon } from "../assets/burger.svg"
import { ReactComponent as ArrowBack } from "../assets/arrowBack.svg"

type HeaderProps = {
    setIsExpanded: Function
}

export const Header = ({
    setIsExpanded
}: HeaderProps) => {
    const location = useLocation();
    const locationName = location.pathname.substring(1)
    const history = useHistory();
    
    console.log(history);
    

    return (
        <div className="sticky z-30 top-0 md:relative flex flex-row flex-nowrap items-center py-4 bg-aliceBlue font-bold border-b border-midnightBlue mb-4 md:mb-0 md:border-0">
            <ArrowBack className="cursor-pointer" onClick={() => history.goBack()} fill="#263645"/>
            <BurgerIcon className="cursor-pointer md:hidden mx-2" onClick={() => setIsExpanded(true)} fill="#263645"/>
            <span className="capitalize md:text-3xl text-2xl">
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