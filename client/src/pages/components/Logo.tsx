import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoIcon} from "../../assets/logo.svg";


export const Logo: React.FC = () => {
    return (
        <Link className="row" to="/">
            <LogoIcon />
            <span className="text-3xl font-bold leading-10 ml-6">E7Planner</span>
        </Link>
    )
}