/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import Flight from "../../public/image/hero-section/Flight.png";
import Hotel from "../../public/image/hero-section/Hotel.png";
import Tour from "../../public/image/hero-section/Tur.png";

import "./hero.css";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url('/image/hero-section/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[632px] w-full">
        <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-14 lg:pb-32 pt-8">
            <p className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[64px] font-semibold text-white">
              Welcome
            </p>
            <p className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[64px] font-semibold text-white">
              to Btrip
            </p>
          </div>
          <div className="relative">
            <div className="w-full sm:max-w-[474px] h-[68px] bg-white rounded-[10px] px-[27px] flex items-center justify-between shadow-custom-blue absolute top-[-45px]">
              <button className="flex flex-col items-center gap-1 pt-5 pb-[10px] pl-[22px] pr-[18px] border-b-2 border-[#FC9A16]">
                <Image src={Flight} alt="Flight" />
                <span className="text-sm font-medium text-[#04669F]">
                  Flight
                </span>
              </button>
              <button className="flex flex-col items-center gap-1 pt-5 pb-[10px] pl-[22px] pr-[18px]">
                <Image src={Hotel} alt="Flight" />
                <span className="text-sm  font-medium text-[#04669F]">
                  Haj & Umrah
                </span>
              </button>
              <button className="flex flex-col items-center gap-1 pt-5 pb-[10px] pl-[22px] pr-[18px]">
                <Image src={Tour} alt="Flight" />
                <span className="text-sm font-medium text-[#04669F]">Tour</span>
              </button>
            </div>
            <div className="bg-white max-w-[1292px] h-full pb-4 md:pb-5 lg:pb-6 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] px-4">
              <div className="pt-10">
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
                <div class="flight-search bar pt-2">
                  <div class="search-box location from">
                    <span class="label">From</span>
                    <div class="value">Dhaka</div>
                    <span class="sub-value">
                      DAC, Hazrat Shahjalal International Airport
                    </span>
                  </div>
                  <div class="search-box location to has-swapper">
                    <span class="swapper"></span>
                    <span class="label">To</span>
                    <div class="value">Cox's Bazar</div>
                    <span class="sub-value"> CXB, Cox's Bazar Airport </span>
                  </div>
                  <div class="search-box date depart">
                    <span class="label">Journey Date</span>
                    <div class="value">
                      26 <span>May'24</span>
                    </div>
                    <span class="sub-value">Sunday</span>
                  </div>
                  <div class="search-box date return">
                    <span class="label">Return Date</span>
                    <span class="sub-value inline-style">
                      Save more on return flight
                    </span>
                  </div>
                  <div class="search-box traveler">
                    <span class="label">Traveler, Class</span>
                    <div class="value">1 Traveler</div>
                    <span class="sub-value">Economy</span>
                  </div>
                  <div className="search-box traveler mt-2 lg:mt-0 ml-2 bg-[#04669F] text-white flex items-center justify-center">
                    <button className="">Search</button>
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

export default HeroSection;
