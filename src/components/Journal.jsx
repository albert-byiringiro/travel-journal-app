import React from "react";

export default function Journal(props){
    console.log(props.location)
    return (
        <div className="flex gap-4 p-4 border-b-gray-100 border-b-2">
            <div className="w-[25%]">
                <img src="/images/locationOne-trial.svg" alt="" className="object-fill w-full" />
            </div>
            <div className="w-[75%] py-4">
                <div className="flex flex-col pb-4">
                    <div className="flex items-center text-sm">
                        <img src="/images/location-fill.svg" alt="location logo" className="w-3" />
                        <span className="uppercase ml-1 mr-6">Japan</span>
                        <a href="" className="text-gray-400 underline">View on Google Maps</a>
                    </div>
                    <h1 className="font-bold text-4xl">Mount Fuji</h1>
                </div>
                <p className="font-bold mb-1">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className=" text-xs">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}