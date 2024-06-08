"use client";
import Image from "next/image";
import React, { useState } from "react";

import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import clock from "../../../public/image/flight-details/clock.png";
import weather1 from "../../../public/image/flight-details/weather-1.png";
import weather2 from "../../../public/image/flight-details/weather-2.png";
import weather3 from "../../../public/image/flight-details/weather-3.png";
import weather4 from "../../../public/image/flight-details/weather-4.png";
import PriceRange from "@/components/PriceRange/PriceRange";

const FlightFilter = ({ setShowFilter }) => {
  const [filterState, setFilterState] = useState({
    price: true,
    schedules: true,
    airlines: true,
    refundability: true,
    stops: true,
    baggage: true,
  });

  const toggleFilter = (filterName) => {
    setFilterState((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };
  return (
    <div className="">
      <div className="bg-white rounded-[10px] hidden lg:flex items-center justify-between gap-8 mb-4 px-[10px]">
        <div className="flex items-center gap-2 py-3">
          <Image src={clock} alt="clock" />
          <h3 className="text-base font-semibold text-[#04669F]">
            Time Remaining
          </h3>
        </div>
        <h2 className="font-semibold text-xl text-[#FC9A16]">20.10</h2>
      </div>
      <div className="bg-white rounded-[10px] pt-5">
        <div className="pb-4 px-5 flex items-center justify-between">
          <p className="text-base font-medium text-[#04669F]">FILTER BY</p>
          <button
            onClick={() => setShowFilter(false)}
            className="text-xl lg:hidden"
          >
            <IoClose />
          </button>
        </div>
        <div className="pl-7 pr-[14px] pt-5 pb-3 border-t">
          <div
            className="text-[#04669F] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => toggleFilter("price")}
          >
            <p className="font-normal text-sm">Filter Price</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                filterState.price ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              filterState.price ? "max-h-14" : "max-h-0"
            }`}
          >
            <PriceRange />
          </div>
        </div>
        <div className="pl-5 pr-[14px] pt-[14px] pb-3 border-t">
          <div
            className="text-[#1A2B3D] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => toggleFilter("schedules")}
          >
            <p className="font-semibold text-base">Flight Schedules</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                filterState.schedules ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              filterState.schedules ? "max-h-96" : "max-h-0"
            }`}
          >
            <div>
              <div className="rounded-[7px] border p-[2px] pt-1 flex items-center gap-[3px]">
                <button className="text-[#1882FF] text-xs font-medium bg-[#D4E8FF] w-full py-2 rounded-tl-[7px] rounded-bl-[7px]">
                  Departure
                </button>
                <button className="text-[#1A2B3D] text-xs font-medium bg-[#EBF0F5] w-full py-2 rounded-tr-[7px] rounded-br-[7px]">
                  Departure
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-[#1A2B3D] mb-3">
                  Departure Dhaka: Anytime
                </h3>
                <div className="rounded-[7px] border p-[2px] flex items-center gap-1 justify-between">
                  <div className="bg-[#EBF0F5] flex flex-col gap-[2px] items-center py-[7px] w-full rounded-tl-[7px] rounded-bl-[7px] cursor-pointer">
                    <Image src={weather1} alt="weather" />
                    <p className="text-[10px] font-normal text-[#77818C]">
                      00-06 AM
                    </p>
                  </div>
                  <div className="bg-[#EBF0F5] flex flex-col gap-[2px] items-center py-[7px] w-full cursor-pointer">
                    <Image src={weather2} alt="weather" />
                    <p className="text-[10px] font-normal text-[#77818C]">
                      06-12 PM
                    </p>
                  </div>
                  <div className="bg-[#EBF0F5] flex flex-col gap-[2px] items-center py-[7px] w-full cursor-pointer">
                    <Image src={weather3} alt="weather" />
                    <p className="text-[10px] font-normal text-[#77818C]">
                      12-06 PM
                    </p>
                  </div>
                  <div className="bg-[#EBF0F5] flex flex-col gap-[2px] items-center py-[7px] w-full rounded-tr-[7px] rounded-br-[7px] cursor-pointer">
                    <Image src={weather4} alt="weather" />
                    <p className="text-[10px] font-normal text-[#77818C]">
                      06-12 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5 pr-[14px] pt-[14px] pb-3 border-t">
          <div
            className="text-[#04669F] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => toggleFilter("airlines")}
          >
            <p className="font-medium text-sm">Airlines</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                filterState.airlines ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              filterState.airlines ? "max-h-96" : "max-h-0"
            }`}
          >
            <div>
              <div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[6px] justify-between hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center gap-2">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className="truncate">Biman Bangladesh Airlines</p>
                  </div>
                  <div className="flex items-center justify-between gap-[4px]">
                    <p>৳5,661</p>
                  </div>
                </div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[6px] justify-between hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center gap-2">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className="truncate">Air Astra</p>
                  </div>
                  <div className="flex items-center justify-between gap-[4px]">
                    <p>৳5,776</p>
                  </div>
                </div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[6px] justify-between hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center gap-2">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className="truncate">NOVOAIR</p>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <p>৳5,766</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <p className="text-sm font-normal text-[#FC9A16]">More</p>
                <IoMdArrowDropdown className="text-[#FC9A16]" />
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5 pr-[14px] pt-[14px] pb-3 border-t">
          <div
            className="text-[#04669F] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => toggleFilter("refundability")}
          >
            <p className="font-medium text-sm">Refundability</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                filterState.refundability ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              filterState.refundability ? "max-h-96" : "max-h-0"
            }`}
          >
            <div>
              <div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[8px] hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="w-[158px] truncate">Non Refundable</p>
                  </div>
                </div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[8px] hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="w-[158px] truncate">Partially Refundable</p>
                  </div>
                </div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[8px] hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="w-[158px] truncate">Rules Wise</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <p className="text-sm font-normal text-[#FC9A16]">More</p>
                <IoMdArrowDropdown className="text-[#FC9A16]" />
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5 pr-[14px] pt-[14px] pb-3 border-t">
          <div
            className="text-[#04669F] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => toggleFilter("stops")}
          >
            <p className="font-medium text-sm">Number of Stops</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                filterState.stops ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              filterState.stops ? "max-h-96" : "max-h-0"
            }`}
          >
            <div>
              <div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[8px] hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="w-[158px] truncate">Direct Flight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5 pr-[14px] pt-[14px] pb-3 border-t">
          <div
            className="text-[#04669F] flex items-center justify-between pb-3 cursor-pointer"
            onClick={() => toggleFilter("baggage")}
          >
            <p className="font-medium text-sm">Baggage Policy</p>
            <IoIosArrowDown
              className={`transition-transform duration-200 ${
                filterState.baggage ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              filterState.baggage ? "max-h-96" : "max-h-0"
            }`}
          >
            <div>
              <div>
                <div className="group px-[6px] py-2 text-[#5E6D77] text-sm font-normal flex items-center gap-x-[8px] hover:bg-[#ebf0f5] rounded transition duration-300 ease-in-out">
                  <div className="flex items-center">
                    <input
                      className="bg-white rounded-sm border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <p className="w-[158px] truncate">20 Kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
