import React from "react";

export default function Journal(props){
    console.log(props.imageUrl)
    return (
        <div className="flex gap-4 p-4 border-b-gray-100 border-b-2">
            <div className="w-[25%]">
                <img src={`${props.imageUrl}`} alt="" className="object-fill w-full" />
            </div>
            <div className="w-[75%] py-4">
                <div className="flex flex-col pb-4">
                    <div className="flex items-center text-sm">
                        <img src="/images/location-fill.svg" alt="location logo" className="w-3" />
                        <span className="uppercase ml-1 mr-6">Japan</span>
                        <a href={`${props.googleMapsUrl}`} className="text-gray-400 underline">View on Google Maps</a>
                    </div>
                    <h1 className="font-bold text-4xl text-gray-800">{props.title}</h1>
                </div>
                <p className="font-bold mb-1">{props.startDate} - {props.endDate}</p>
                <p className=" text-xs">{props.description}</p>
            </div>
        </div>
    )
}