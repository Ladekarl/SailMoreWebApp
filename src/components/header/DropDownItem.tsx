import React from "react";

interface DropdownItemProps {
    to: string,
    children?: React.ReactNode
}

export default (props: DropdownItemProps) => {
    return (
        <>
            <a
                href={props.to}
                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"   
                role="menuitem"
            >
                {props.children}
            </a>
        </>
    )
}