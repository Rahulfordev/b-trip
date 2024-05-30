"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa";

import testimonial1 from "../../../public/image/testimonial/avatar-1.png";
import testimonial2 from "../../../public/image/testimonial/avatar-2.png";
import testimonial3 from "../../../public/image/testimonial/avatar-3.png";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8 my-9 md:my-12 lg:my-16">
      <div>
        <h1 className="text-[#04669F] text-[24px] md:text-[32px] font-semibold pb-8">
          Our happy clients
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full sm:max-w-[409px] h-[257px] border pl-8">
              <div className="flex items-center gap-x-6 pb-[14px] pt-12 pr-1">
                <Image src={testimonial1} alt="testimonial" />
                <div>
                  <p className="text-[#1A2B48] text-base font-medium">
                    Eva Hicks
                  </p>
                  <div className="flex items-center pt-3">
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                  </div>
                </div>
              </div>
              <p className="max-w-[300px] text-sm font-normal text-[#768092] pb-11">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-[409px] h-[257px] border pl-8">
              <div className="flex items-center gap-x-6 pb-[14px] pt-12 pr-1">
                <Image src={testimonial2} alt="testimonial" />
                <div>
                  <p className="text-[#1A2B48] text-base font-medium">
                    Eva Hicks
                  </p>
                  <div className="flex items-center pt-3">
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                  </div>
                </div>
              </div>
              <p className="w-full sm:max-w-[300px] text-sm font-normal text-[#768092] pb-11">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full sm:max-w-[409px] h-[257px] border pl-8">
              <div className="flex items-center gap-x-6 pb-[14px] pt-12 pr-1">
                <Image src={testimonial3} alt="testimonial" />
                <div>
                  <p className="text-[#1A2B48] text-base font-medium">
                    Eva Hicks
                  </p>
                  <div className="flex items-center pt-3">
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                  </div>
                </div>
              </div>
              <p className="max-w-[300px] text-sm font-normal text-[#768092] pb-11">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full sm:max-w-[409px] h-[257px] border pl-8">
              <div className="flex items-center gap-x-6 pb-[14px] pt-12 pr-1">
                <Image src={testimonial3} alt="testimonial" />
                <div>
                  <p className="text-[#1A2B48] text-base font-medium">
                    Eva Hicks
                  </p>
                  <div className="flex items-center pt-3">
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                  </div>
                </div>
              </div>
              <p className="max-w-[300px] text-sm font-normal text-[#768092] pb-11">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full sm:max-w-[409px] h-[257px] border pl-8">
              <div className="flex items-center gap-x-6 pb-[14px] pt-12 pr-1">
                <Image src={testimonial2} alt="testimonial" />
                <div>
                  <p className="text-[#1A2B48] text-base font-medium">
                    Eva Hicks
                  </p>
                  <div className="flex items-center pt-3">
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                  </div>
                </div>
              </div>
              <p className="max-w-[300px] text-sm font-normal text-[#768092] pb-11">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full sm:max-w-[409px] h-[257px] border pl-8">
              <div className="flex items-center gap-x-6 pb-[14px] pt-12 pr-1">
                <Image src={testimonial3} alt="testimonial" />
                <div>
                  <p className="text-[#1A2B48] text-base font-medium">
                    Eva Hicks
                  </p>
                  <div className="flex items-center pt-3">
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                    <FaStar className="text-[#FFDC00]" />
                  </div>
                </div>
              </div>
              <p className="max-w-[300px] text-sm font-normal text-[#768092] pb-11">
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
