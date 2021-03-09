import React from "react";
import { Link } from "react-router-dom";

interface MobileNavItemProps {
    to: string,
    active: boolean,
    children?: React.ReactNode
}

export default (props: MobileNavItemProps) => {

    const activeClassNames = "bg-gray-400 text-white block px-3 py-2 rounded-md text-base font-normal";
    const inActiveClassNames = "text-gray-600 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-normal";

    return (
        <>
            <Link
                to={props.to}
                className={props.active ? activeClassNames : inActiveClassNames}
            >
                {props.children}
            </Link>
        </>
    )
}