/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const PopularFlight = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8 pt-11 pb-12 sm:pb-16">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-[#04669F] text-[24px] md:text-[32px] font-semibold">
            Popular Flight Destinations from BD
          </h1>
          <p className="text-[#5A6573] max-w-[552px] font-normal text-[15px]">
            Expand your travel horizons with new facets! Diversify your journey
            to explore local destinations or global marvels around Asia, Europe,
            America, Canada or anywhere
          </p>
          <div className="pb-[30px] flex gap-x-2 sm:gap-x-3">
            <button className="text-white bg-[#04669F] px-8 py-[14px] sm:px-9 sm:py-4 rounded-[32px] text-xs sm:text-sm font-medium sm:font-semibold">
              Domestic
            </button>
            <button className="text-[#5A6573] bg-[#EBF0F5] px-8 py-[14px] sm:px-9 sm:py-4 rounded-[32px] text-xs sm:text-sm font-medium sm:font-semibold">
              International
            </button>
          </div>
        </div>
        <div>
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-[url('/image/Destinations/destinations-1.png')] bg-cover bg-center bg-no-repeat w-full h-[330px] rounded-[10px]">
                <div className="bg-custom-gradient w-full h-full rounded-[10px] text-white">
                  <div className="pl-5">
                    <p className="pt-[295px]">Cox's Bazar</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[url('/image/Destinations/destinations-2.png')] bg-cover bg-center bg-no-repeat w-full h-[330px] rounded-[10px]">
                <div className="bg-custom-gradient w-full h-full rounded-[10px] text-white">
                  <div className="pl-5">
                    <p className="pt-[295px]">Jessore</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[url('/image/Destinations/destinations-3.png')] bg-cover bg-center bg-no-repeat w-full h-[330px] rounded-[10px]">
                <div className="bg-custom-gradient w-full h-full rounded-[10px] text-white">
                  <div className="pl-5">
                    <p className="pt-[295px]">Chittagong</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[url('/image/Destinations/destinations-4.png')] bg-cover bg-center bg-no-repeat w-full h-[330px] rounded-[10px]">
                <div className="bg-custom-gradient w-full h-full rounded-[10px] text-white">
                  <div className="pl-5">
                    <p className="pt-[295px]">Sylhet</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[url('/image/Destinations/destinations-5.png')] bg-cover bg-center bg-no-repeat w-full h-[330px] rounded-[10px]">
                <div className="w-full h-full rounded-[10px] text-white">
                  <div className="pl-5">
                    <p className="pt-[295px]">Rangamati</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularFlight;
