import React from "react";
import { Link } from "react-router-dom";

interface MobileDropdownItemProps {
    to: string,
    children?: React.ReactNode
}

export default (props: MobileDropdownItemProps) => {
    return (
        <>
            <Link
                to={props.to}
                className="block px-5 py-2 rounded-md text-base font-light text-gray-600 hover:text-white hover:bg-gray-400"
            >
                {props.children}
            </Link>
        </>
    )
}