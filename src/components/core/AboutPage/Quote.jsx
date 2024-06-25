import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
       🦩 Nuestro innovador software combina <HighlightText text={"Inteligencia Artificial"} />{" "}
         y Pasión para crear a 
        <span className="bg-gradient-to-b from-[#568BFE] to-[#F3546D] text-transparent bg-clip-text font-bold">
            {" "}
            Flamingo APP🦩🦩🦩🦩
        </span> 
    </div>
  )
}

export default Quote