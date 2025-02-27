import React from "react";
import { Link, useLocation } from "react-router-dom";

type buttonParams = {
    name: string;
    path: string;
};

const headerButton: React.FC<buttonParams> = ({ name,path }) => {
    const location = useLocation();
    const isActive = () => location.pathname === path || (path === "" && location.pathname === "/");

    return (
            <Link 
                className={`p-4 ${isActive() ? 'text-black h-5 flex items-center justify-center border-1 rounded-full bg-[#F0F0F0] border-[#9b9b9b]' : 'text-black'}`} 
                to={path}
            >
                <p className="h-full w-full flex items-center justify-center">{name}</p>
            </Link>
    )
}


export default headerButton;