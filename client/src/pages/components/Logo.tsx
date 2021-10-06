import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoIcon} from "../../assets/logo.svg";


export const Logo: React.FC = () => {
    return (
        <Link className="row border-b border-primaryBlue-light pt-8 pb-8 px-4" to="/">
            <LogoIcon 
                width={60}
                height={60}
                fill={"#fff"}
            />
            <span className="text-3xl font-bold leading-10 ml-6 text-white">E7Planner</span>
        </Link>
    )
}