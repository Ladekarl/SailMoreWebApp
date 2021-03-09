import React from "react";
import { Link } from "react-router-dom";

interface FooterNavItemProps {
    to: string,
    children?: React.ReactNode
}

export default (props: FooterNavItemProps) => {
    return (
        <>
            <Link
                className="mx-5 text-gray-300 font-bold"
                to={props.to}>
                {props.children}
            </Link>
        </>
    )
}