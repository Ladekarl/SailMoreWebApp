import React from "react";
import Card from "./Card";
function Cards() {
    return (
        <>
            <div className="container flex flex-1 items-center justify-center mx-auto pt-16">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Sejl med erfarne skippere på eventyr mod nære og fjerne kyster !</h1>
                </div>
            </div>
            <div className="w-full bg-white bg-opacity-40 px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;