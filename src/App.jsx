import React from "react";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import data from "./data"

export default function App(){

  const destinations = data.map(destination => {
    return (
      <Journal
      {...destination}
      />
    )
  })
  return (
    <>
      <Navbar/>
      <section className="p-5">
        {destinations}
      </section>
    </>
  )
}