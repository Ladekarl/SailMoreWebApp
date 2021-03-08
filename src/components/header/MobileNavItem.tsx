import React from "react";

interface MobileNavItemProps {
    to: string,
    active: boolean,
    children?: React.ReactNode
}

export default (props: MobileNavItemProps) => {

    const activeClassNames = "bg-gray-400 text-white block px-3 py-2 rounded-md text-base font-small";
    const inActiveClassNames = "text-gray-600 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-small";

    return (
        <>
            <a
                href={props.to}
                className={props.active ? activeClassNames : inActiveClassNames}
            >
                {props.children}
            </a>
        </>
    )
}