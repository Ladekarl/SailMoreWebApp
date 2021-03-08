import React from "react";

interface NavItemProps {
    to: string,
    active: boolean,
    children?: React.ReactNode
}

export default (props: NavItemProps) => {

    const activeClassNames = "cursor-pointer h-full flex items-center text-gray-600 mx-8 tracking-normal border-b-2 border-gray-400 font-small px-1";
    const inactiveClassNames = "hover:text-gray-600 cursor-pointer h-full flex items-center text-gray-500 mx-8 tracking-normal border-white border-b-2 hover:border-gray-400 font-small px-1";

    return (
        <>
            <a
                href={props.to}
                className={props.active ? activeClassNames : inactiveClassNames}
            >
                {props.children}
            </a>
        </>
    )
}