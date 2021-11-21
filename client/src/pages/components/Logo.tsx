import React from 'react';
import { Link } from 'react-router-dom';
// import {ReactComponent as LogoIcon} from "../../assets/logo.svg";
import LogoImage from "../../assets/logo.png"


export const Logo: React.FC = () => {
    return (
        <Link className="row border-b border-primaryBlue-light pt-8 pb-8 px-4 relative" to="/">
            {/* <LogoIcon 
                width={60}
                height={60}
                fill={"#fff"}
            /> */}
            <img className="object-contain absolute inset-y-0 -left-10" width={240} src={LogoImage} alt="Logo"/>
            <p className="text-3xl font-bold leading-10 text-white pl-14">Arkynized</p>
        </Link>
    )
}