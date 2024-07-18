import React from "react";

export default function Navbar(){
    return (
        <>
        <div className="bg-red-500 flex justify-center h-12 items-center gap-2">
            <img src="/images/travel-globe.svg" alt="" className="h-8" />
            <h2 className="text-white">my travel journal</h2>
        </div>
    </>
    )
}