"use client";
import React, { useState } from "react";
import "./PassengerSelection.css";

const PassengerSelection = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className="bg-white text-[#04669F] p-4 rounded-lg shadow-md w-64 Passenger-suggestion">
      <div className="mb-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold">Adults</p>
            <p className="text-[10px] font-normal text-[#04669F]">12 years and above</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => decrement(setAdults, adults)}
              className="text-gray-600 border-2 rounded-full w-6 h-6 flex items-center justify-center"
            >
              −
            </button>
            <span className="mx-2 text-sm font-semibold">{adults}</span>
            <button
              onClick={() => increment(setAdults, adults)}
              className="border-2 rounded-full w-6 h-6 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold">Children</p>
            <p className="text-[10px] font-normal text-[#04669F]">2-11 years</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => decrement(setChildren, children)}
              className="text-gray-600 border-2 rounded-full w-6 h-6 flex items-center justify-center"
            >
              −
            </button>
            <span className="mx-2 text-sm font-semibold">{children}</span>
            <button
              onClick={() => increment(setChildren, children)}
              className="border-2 rounded-full w-6 h-6 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold">Infant</p>
            <p className="text-[10px] font-normal text-[#04669F]">Below 2 years</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => decrement(setInfants, infants)}
              className="text-gray-600 border-2 rounded-full w-6 h-6 flex items-center justify-center"
            >
              −
            </button>
            <span className="mx-2 text-sm font-semibold">{infants}</span>
            <button
              onClick={() => increment(setInfants, infants)}
              className="border-2 rounded-full w-6 h-6 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button className="bg-[#FC9A16] text-white px-7 text-sm font-semibold py-2 rounded-[10px] mt-4">
        Done
      </button>
    </div>
  );
};

export default PassengerSelection;
