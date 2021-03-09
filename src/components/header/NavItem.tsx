import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    to: string,
    active: boolean,
    children?: React.ReactNode
}

export default (props: NavItemProps) => {

    const activeClassNames = "cursor-pointer h-full flex items-center text-gray-800 mx-2 px-6 tracking-normal border-b-2 border-gray-400 px-1 pt-1 font-bold text-base";
    const inactiveClassNames = "hover:text-gray-600 cursor-pointer hover:text-gray-800 h-full flex items-center text-gray-500 px-6 mx-2 tracking-normal border-transparent border-b-2 hover:border-gray-400 px-1 pt-1 font-bold text-base";

    return (
        <>
            <Link
                to={props.to}
                className={props.active ? activeClassNames : inactiveClassNames}
            >
                <div className="">
                    {props.children}
                </div>
            </Link>
        </>
    )
}