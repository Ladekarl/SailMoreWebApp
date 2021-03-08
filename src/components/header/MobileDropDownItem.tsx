import React from "react";

interface MobileDropdownItemProps {
    to: string,
    children?: React.ReactNode
}

export default (props: MobileDropdownItemProps) => {
    return (
        <>
            <a
                href={props.to}
                className="block px-5 py-2 rounded-md text-base font-small text-gray-600 hover:text-white hover:bg-gray-400"
            >
                {props.children}
            </a>
        </>
    )
}