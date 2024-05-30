"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import clock from "../../../public/image/flight/clock.png";

const FlightFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[273px] max-w-[273px]">
      <div className="bg-white rounded-[10px] flex items-center gap-8 mb-4">
        <div className="flex items-center gap-2 px-4 py-3">
          <Image src={clock} alt="clock" />
          <h3 className="text-base font-semibold text-[#04669F]">
            Time Remaining
          </h3>
        </div>
        <h2 className="font-semibold text-xl text-[#FC9A16]">20.10</h2>
      </div>
      <div className="bg-white rounded-[10px] pt-5">
        <div className="pb-4 pl-5">
          <p className="text-base font-medium text-[#04669F]">FILTER BY</p>
        </div>
        <div className="pl-7 pr-[14px] pt-5 pb-3 border-t">
          <div
            className="text-[#04669F] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <p className="font-normal text-sm">Filter Price</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              open ? "max-h-14" : "max-h-0"
            }`}
          >
            <p className="text-sm font-medium text-[#04669F]">
              BDT 5,390 - BDT 5,950
            </p>
          </div>
        </div>
        {/* hello */}
        <div className="pl-5 pr-[14px] pt-[14px] pb-3 border-t">
          <div
            className="text-[#1A2B3D] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <p className="font-semibold text-base">Flight Schedules</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              open ? "max-h-14" : "max-h-0"
            }`}
          >
            <div>
              <div className="rounded-[7px] border p-[2px] flex items-center gap-[3px]">
                <button className="text-[#1882FF] text-xs font-medium bg-[#D4E8FF] px-9 py-2 rounded-tl-[7px] rounded-bl-[7px]">
                  Departure
                </button>
                <button className="text-[#1A2B3D] text-xs font-medium bg-[#EBF0F5] px-9 py-2 rounded-tr-[7px] rounded-br-[7px]">
                  Departure
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-[#1A2B3D] mb-3">
                  Departure Dhaka: Anytime
                </h3>
                <div className="rounded-[7px] border p-[2px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
