"use client";
import React, { useState } from "react";
import ReactSlider from "react-slider";

const PriceRange = () => {
  const [values, setValues] = useState([5190, 5850]);
  return (
    <div className="w-full lg:max-w-lg mx-auto text-center pt-2">
      <ReactSlider
        className="relative lg:w-48 h-1 bg-gray-300"
        thumbClassName="relative h-5 w-5 bg-[#FC9A16] rounded-full cursor-pointer -top-2 outline-none shadow-md"
        trackClassName="absolute top-0 bottom-0 bg-[#FC9A16] rounded-full"
        defaultValue={values}
        min={5000}
        max={6000}
        step={10}
        onAfterChange={(newValues) => setValues(newValues)}
        pearling
        minDistance={100}
      />
      <div className="mt-6 text-left text-sm font-medium text-[#04669F]">
        BDT {values[0]} - BDT {values[1]}
      </div>
    </div>
  );
};

export default PriceRange;
