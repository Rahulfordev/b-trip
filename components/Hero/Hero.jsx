/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Flight from "../../public/image/hero-section/Flight.png";
import Hotel from "../../public/image/hero-section/Hotel.png";
import Tour from "../../public/image/hero-section/Tur.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url('/image/hero-section/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[632px] w-full">
        <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-14 pt-8">
            <p className="text-[30px] md:text-[64px] font-semibold text-white">
              Welcome
            </p>
            <p className="text-[30px] md:text-[64px] font-semibold text-white">
              to Btrip
            </p>
          </div>
          <div className="relative">
            <div className="max-w-[474px] h-[68px] bg-white rounded-[10px] px-[27px] flex items-center justify-between shadow-custom-blue absolute top-[-45px]">
              <button className="flex flex-col items-center gap-1 pt-5 pb-[10px] pl-[22px] pr-[18px] border-b-4 border-[#FC9A16]">
                <Image src={Flight} alt="Flight" />
                <span className="text-sm font-bold text-[#04669F]">Flight</span>
              </button>
              <button className="flex flex-col items-center gap-1 pt-5 pb-[10px] pl-[22px] pr-[18px]">
                <Image src={Hotel} alt="Flight" />
                <span className="text-sm  font-bold text-[#04669F]">
                  Haj & Umrah
                </span>
              </button>
              <button className="flex flex-col items-center gap-1 pt-5 pb-[10px] pl-[22px] pr-[18px]">
                <Image src={Tour} alt="Flight" />
                <span className="text-sm font-bold text-[#04669F]">Tour</span>
              </button>
            </div>
            <div className="bg-white max-w-[1292px] h-full lg:h-[191px] rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] px-4">
              <div className="pt-12">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <button className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_366_3107)">
                        <path
                          d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"
                          stroke="#04669F"
                          stroke-width="2"
                        />
                        <path
                          d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z"
                          fill="#04669F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_366_3107">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-sm font-semibold text-[#04669F]">
                      One Ways
                    </span>
                  </button>
                  <button className="flex items-center gap-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_366_3107)">
                        <path
                          d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"
                          stroke="#1C3C6B"
                          stroke-width="2"
                        />
                        <path
                          d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z"
                          fill="#1C3C6B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_366_3107">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-sm font-semibold text-[#1C3C6B]">
                      Round Way
                    </span>
                  </button>
                  <button className="flex items-center gap-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_366_3107)">
                        <path
                          d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"
                          stroke="#1C3C6B"
                          stroke-width="2"
                        />
                        <path
                          d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z"
                          fill="#1C3C6B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_366_3107">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-sm font-semibold text-[#1C3C6B]">
                      Multi City
                    </span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  <div className="flex relative gap-2">
                    <div className="pl-2 pr-2 py-2 rounded-tl-[10px] rounded-tr-none rounded-br-[10px] rounded-bl-none border w-full sm:max-w-[253px]">
                      <p className="text-[#04669F] font-normal text-xs">From</p>
                      <h3 className="text-[#04669F] font-semibold text-xs sm:text-base">
                        Dhaka
                      </h3>
                      <p className="text-[#04669F] font-normal text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px]">
                        DAC, Hazrat Shahjalal International Ai
                      </p>
                    </div>
                    <div className="absolute left-[132px] top-5">
                      <button className="bg-white border w-10 h-10 flex items-center flex-col justify-center rounded-full">
                        <FaArrowLeftLong className="text-xs text-[#1e2258]" />
                        <FaArrowRightLong className="text-xs text-[#1e2258]" />
                      </button>
                    </div>
                    <div className="pl-5 pr-4 py-2 rounded-tl-[10px] rounded-tr-none rounded-br-[10px] rounded-bl-none border w-full sm:max-w-[253px]">
                      <p className="text-[#04669F] font-normal text-xs">To</p>
                      <h3 className="text-[#04669F] font-semibold text-xs">
                        Cox's Bazar
                      </h3>
                      <p className="text-[#04669F] font-normal text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[108px]">
                        CXB, Cox's Bazar Airport
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-none border border-r-[0px] px-4 py-2 w-full sm:max-w-[157px]">
                      <p className="text-[#04669F]">Journey Date</p>
                      <h3 className="text-[#04669F] font-bold text-lg">
                        04
                        <span className="text-xs font-normal pl-1">Apr'24</span>
                      </h3>
                      <p className="text-xs font-normal text-[#04669F]">
                        Thursday
                      </p>
                    </div>
                    <div className="rounded-tl-none rounded-tr-none rounded-br-[10px] rounded-bl-none border px-4 py-2 w-full sm:max-w-[157px]">
                      <p>Return Date</p>

                      <p className="text-xs font-normal text-[#04669F] mt-2">
                        Save more on return flight
                      </p>
                    </div>
                  </div>
                  <div className="rounded-tl-[10px] rounded-tr-none rounded-br-[10px] rounded-bl-none border px-4 py-2 w-full sm:w-[200px]">
                    <p className="text-[#04669F]">Traveler, Class</p>
                    <h3 className="text-[#04669F] font-bold text-lg">
                      1 Traveler
                    </h3>
                    <p className="text-xs font-normal text-[#04669F]">
                      Economy
                    </p>
                  </div>
                  <button className="bg-[#04669F] ml-2 text-white w-full sm:max-w-[155px] font-bold text-lg rounded-tl-[10px] py-2 mb-2 sm:mb-0 rounded-tr-none rounded-br-[10px] rounded-bl-none ">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
