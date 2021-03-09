import React from "react";
import { Link } from "react-router-dom";

interface DropdownItemProps {
    to: string,
    children?: React.ReactNode
}

export default (props: DropdownItemProps) => {
    return (
        <>
            <Link
                to={props.to}
                className="block px-4 py-2 text-md text-gray-600 hover:bg-gray-100 font-light"
                role="menuitem"
            >
                {props.children}
            </Link>
        </>
    )
}