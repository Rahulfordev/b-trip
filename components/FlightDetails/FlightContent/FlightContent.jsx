"use client";
import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import Image from "next/image";

import a2 from "../../../public/image/flight-details/2A.png";
import bg from "../../../public/image/flight-details/BG.png";
import bs from "../../../public/image/flight-details/BS.png";
import vq from "../../../public/image/flight-details/VQ.png";

import vqf from "../../../public/image/flight-details/vq-f.png";
import arrow from "../../../public/image/flight-details/arrow.png";
import coupon from "../../../public/image/flight-details/coupon.png";
import dimond from "../../../public/image/flight-details/dimond.png";
import coin from "../../../public/image/flight-details/coin.png";
import novoair from "../../../public/image/flight-details/novoair.png";

const FlightContent = () => {
  const [showFlightDetails, setShowFlightDetails] = useState({
    flight: false,
  });

  const toggleFlightDetails = (filterName) => {
    setShowFlightDetails((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };
  return (
    <div className="w-full md:w-[1003px] mx-auto">
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-[#04669F]">
          10 Available Flights
        </h4>
      </div>
      <div className="hidden lg:grid grid-cols-[52px,1fr,52px] rounded-lg mb-4">
        <div className="bg-[#F5F7FA] flex items-center justify-center">
          <RiArrowLeftSLine className="text-[#9BA6B2] text-2xl" />
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-white px-5 py-2 grow">
            <div className="flex items-center gap-2">
              <Image src={a2} alt="a2" />
              <div>
                <div className="flex items-center gap-[2px]">
                  <span className="text-base font-semibold text-[#3E4957]">
                    BG
                  </span>
                  <span>.</span>
                  <span className="text-[#77818C] text-sm font-normal">3</span>
                </div>
                <div className="text-sm font-normal text-[#77818C] flex items-center gap-[2px]">
                  <span>৳</span>
                  <span>5,661</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#F5F7FA] px-5 py-2 grow">
            <div className="flex items-center gap-2">
              <Image src={a2} alt="a2" />
              <div>
                <div className="flex items-center gap-[2px]">
                  <span className="text-base font-semibold text-[#3E4957]">
                    BG
                  </span>
                  <span>.</span>
                  <span className="text-[#77818C] text-sm font-normal">3</span>
                </div>
                <div className="text-sm font-normal text-[#77818C] flex items-center gap-[2px]">
                  <span>৳</span>
                  <span>5,661</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white px-5 py-2 grow">
            <div className="flex items-center gap-2">
              <Image src={a2} alt="a2" />
              <div>
                <div className="flex items-center gap-[2px]">
                  <span className="text-base font-semibold text-[#3E4957]">
                    BG
                  </span>
                  <span>.</span>
                  <span className="text-[#77818C] text-sm font-normal">3</span>
                </div>
                <div className="text-sm font-normal text-[#77818C] flex items-center gap-[2px]">
                  <span>৳</span>
                  <span>5,661</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#F5F7FA] px-5 py-2 grow">
            <div className="flex items-center gap-2">
              <Image src={a2} alt="a2" />
              <div>
                <div className="flex items-center gap-[2px]">
                  <span className="text-base font-semibold text-[#3E4957]">
                    BG
                  </span>
                  <span>.</span>
                  <span className="text-[#77818C] text-sm font-normal">3</span>
                </div>
                <div className="text-sm font-normal text-[#77818C] flex items-center gap-[2px]">
                  <span>৳</span>
                  <span>5,661</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white px-5 py-2 grow">
            <div className="flex items-center gap-2">
              <Image src={a2} alt="a2" />
              <div>
                <div className="flex items-center gap-[2px]">
                  <span className="text-base font-semibold text-[#3E4957]">
                    BG
                  </span>
                  <span>.</span>
                  <span className="text-[#77818C] text-sm font-normal">3</span>
                </div>
                <div className="text-sm font-normal text-[#77818C] flex items-center gap-[2px]">
                  <span>৳</span>
                  <span>5,661</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F7FA] flex items-center justify-center">
          <RiArrowRightSLine className="text-[#9BA6B2] text-2xl" />
        </div>
      </div>
      <div className="hidden lg:block bg-[#F5F7FA] rounded-lg">
        <div className="grid grid-cols-3">
          <div className="flex justify-between items-center py-5 px-4">
            <h4 className="text-base text-[#000000] font-semibold">Earliest</h4>
            <p className="text-base text-[#646464] font-normal">7:15 AM</p>
          </div>
          <div className="bg-[#04669F] flex justify-between items-center py-5 px-4">
            <h4 className="text-base text-white font-semibold">Cheapest</h4>
            <p className="text-base text-white font-normal">BDT 5.661</p>
          </div>
          <div className="flex justify-between items-center py-5 px-4">
            <h4 className="text-base text-[#000000] font-semibold">Fastest</h4>
            <p className="text-base text-[#646464] font-normal">1 Hr 5 Min</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="my-4 w-full">
            <div className="bg-white rounded-tr-[10px] rounded-tl-[10px] p-3">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:basis-[75%] pb-4 md:pb-0">
                  <div className="flex w-full flex-col md:flex-row items-center justify-between text-[#04669F]">
                    <div className="flex items-center justify-start w-full pb-3 md:pb-0 md:pl-[8px]">
                      <div>
                        <Image src={vqf} alt="vqf" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl">NOVOAIR</h4>
                      </div>
                    </div>
                    <div className="md:flex w-full items-center justify-between">
                      <div>
                        <div className="flex w-full items-center gap-8 justify-between">
                          <div>
                            <h4 className="font-semibold text-xl">10:30</h4>
                            <p className="text-sm font-normal">DAC</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-normal">Non-Stop</p>
                            <Image src={arrow} alt="arrow" />
                            <p className="text-sm font-normal">Direct Flight</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xl">11:30</h4>
                            <p className="text-sm font-normal">CXB</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-base font-semibold hidden md:block">
                        <p>01h</p>
                        <p>00m</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:basis-[15%] w-full bg-[#F5F5F5] p-[10px]">
                  <div className="flex md:flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 justify-start md:justify-end">
                        <Image src={coupon} alt="coupon" />
                        <p className="text-sm font-medium text-[#04669F]">
                          AMEX00A5
                        </p>
                      </div>
                      <div className="flex md:block items-center gap-1">
                        <p className="flex items-center md:justify-end gap-1 text-xl text-[#04669F]">
                          <span>৳</span>
                          <span className="font-semibold">4,597</span>
                        </p>
                        <del className="flex md:justify-end text-sm font-normal text-[#04669F]">
                          ৳ 4,999
                        </del>
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center justify-center md:justify-end gap-1 bg-[#FC9A16] rounded-[10px] text-white text-sm font-normal py-[11px] px-[35px]">
                        Select <MdKeyboardArrowRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[#F5F5F5] text-[#04669F] text-sm py-3">
                <div
                  className="flex items-center justify-between mx-4"
                  onClick={() => toggleFlightDetails("flight")}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-[6px] bg-[#EDEDED] p-2 rounded-full">
                      <Image src={dimond} alt="dimond" />
                      <p>Partially Refundable</p>
                    </div>
                    <div className="flex items-center gap-[6px] bg-[#EDEDED] p-2 rounded-full">
                      <Image src={coin} alt="coin" />
                      <p>100</p>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-[#FC9A16] text-sm">
                      View Details
                      <MdKeyboardArrowDown
                        className={`text-lg transition-transform duration-200 ${
                          showFlightDetails.flight ? "rotate-180" : ""
                        }`}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden text-[#04669F] hidden transition-all duration-200 ${
                  showFlightDetails.flight
                    ? "max-h-[480px] md:max-h-96"
                    : "max-h-0"
                }`}
              >
                <div className="p-3 bg-[#F5F5F5] flex justify-between flex-col md:flex-row">
                  <div className="bg-white rounded-[10px] p-4 lg:basis-[50%]">
                    <h4>Flight Details</h4>
                    <div>
                      <div>
                        <div className="flex justify-center text-center">
                          <div className="bg-[#FC9A16] relative text-white rounded-[10px] cursor-pointer py-1 px-5 after:absolute after:content-['hello'] after:border-[7px] after:border-transparent after:border-t-[#FC9A16] after:h-0 after:left-[50%] after:top-[100%] after:w-0 after:-translate-x-1/2">
                            DAC - CXB
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="mt-4 flex items-center justify-between">
                            <div>
                              <div>
                                <Image src={novoair} alt="novoair logo" />
                              </div>
                              <div>
                                <span>NOVOAIR</span>
                                <span>VQ 923 | ATR725</span>
                              </div>
                            </div>
                            <div>
                              <p>Class: Economy</p>
                            </div>
                          </div>
                          <div className="mt-3 border-t pt-3 flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-xl">10:30</h4>
                              <span className="text-sm font-normal">
                                Sat, 04 Apr, 2024
                              </span>
                              <span className="text-sm font-normal">DAC</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-xl">11:30</h4>
                              <span className="text-sm font-normal">
                                Sat, 04 Apr, 2024
                              </span>
                              <span className="text-sm font-normal">CXB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#EDEDED] rounded-[10px] lg:basis-[50%]">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <button className="text-sm font-medium text-white bg-[#FC9A16] py-2 px-[47px] rounded-tl-[10px] rounded-bl-[10px]">
                          Baggage
                        </button>
                        <button className="text-sm font-medium bg-[#D9D9D9] py-2 px-[47px]">
                          Fare
                        </button>
                        <button className="text-sm font-medium bg-[#D9D9D9] py-2 px-[47px] rounded-tr-[10px] rounded-br-[10px]">
                          Policy
                        </button>
                      </div>
                      <div className="mt-3 mb-[58px]">
                        <div className="flex items-center justify-between text-sm">
                          <span>Flight</span>
                          <span>Cabin</span>
                          <span>Check-in</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>DAC - CXB</span>
                          <span>7 KGS </span>
                          <span>20 KGS</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#D9D9D9] flex items-center justify-between py-3 px-2 rounded-br-[10px] rounded-bl-[10px]">
                      <p>Total (1 Traveler)</p>
                      <p>BDT 4,597</p>
                    </div>
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

export default FlightContent;
