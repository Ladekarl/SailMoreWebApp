import React from "react";

export default () => {
    const image = require('../../assets/images/backgrounds/bora-bora.jpg')
    return (
        <>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-44 w-full flex justify-center">
                        <div className="h-56 w-56">
                            <img src={image} className="object-cover rounded-full h-full w-full shadow-md" />
                        </div>
                    </div>
                    <div className="px-6 mt-16">
                        <div className="font-bold text-3xl text-center pb-1">Rundt om Maldiverne</div>
                        <p className="text-gray-800 text-sm text-center">5. juni 2021 - 31. august 2021</p>
                        <div className="w-full flex justify-center pt-5 pb-5 text-center text-gray-800">
                            Kom med på en skøn rejse rundt om maldiverne
                        </div>
                        <div className="w-full flex justify-center items-center pb-5 text-center">
                            <div className="shadow hover:bg-blue-400 px-5 py-2 rounded-full text-gray-800 hover:text-white hover:shadow-lg">
                                <button className="font-bold text-sm focus:outline-none">
                                    Læs mere
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}