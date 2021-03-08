import React from "react";

interface FooterNavItemProps {
    to: string,
    children?: React.ReactNode
}

export default (props: FooterNavItemProps) => {
    return (
        <>
            <a className="mx-5 text-gray-500 font-medium" href={props.to}>
                {props.children}
            </a>
        </>
    )
}