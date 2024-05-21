import React from "react";

import blog1 from "../../public/image/blog/news-1.png";
import blog2 from "../../public/image/blog/news-2.png";
import blog3 from "../../public/image/blog/news-3.png";
import blog4 from "../../public/image/blog/news-4.png";
import blog5 from "../../public/image/blog/news-6.png";
import blog6 from "../../public/image/blog/news-5.png";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8 pt-11 pb-12 sm:pb-14">
        <div>
          <h1 className="text-[#04669F] text-[24px] md:text-[32px] font-semibold">
            Read the latest from blog
          </h1>
          <p className="text-[#5E6D77] text-[15px] font-normal">
            Contrary to popular belief
          </p>
        </div>
        <div className="pt-10 grid gap-y-5 gap-x-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="max-w-[409px] mx-auto">
            <Image src={blog1} alt="blog1" />
            <div className="flex gap-x-4 text-sm font-medium text-[#2A2A2A] pt-[14px]">
              Adventure Travel <li className="font-normal"> 03/30/2024</li>
            </div>
            <h4 className="text-[#1A2B50] text-[17px] font-medium pt-1 pb-[14px]">
              The day on Paris
            </h4>
            <p className="text-[#7A7A7A] text-sm font-normal max-w-[344px]">
              From the iconic to the unexpected, the city of San Francisco never
              ceases to...
            </p>
            <button className="text-sm font-medium text-[#2A2A2A] pr-2 pb-1 border-b-[3px] border-[#E50024]">
              Read More
            </button>
          </div>
          <div className="max-w-[409px] mx-auto">
            <Image src={blog2} alt="blog1" />
            <div className="flex gap-x-4 text-sm font-medium text-[#2A2A2A] pt-[14px]">
              Adventure Travel <li className="font-normal"> 03/30/2024</li>
            </div>
            <h4 className="text-[#1A2B50] text-[17px] font-medium pt-1 pb-[14px]">
              The day on Paris
            </h4>
            <p className="text-[#7A7A7A] text-sm font-normal max-w-[344px]">
              From the iconic to the unexpected, the city of San Francisco never
              ceases to...
            </p>
            <button className="text-sm font-medium text-[#2A2A2A] pr-2 pb-1 border-b-[3px] border-[#E50024]">
              Read More
            </button>
          </div>
          <div className="max-w-[409px] mx-auto">
            <Image src={blog3} alt="blog1" />
            <div className="flex gap-x-4 text-sm font-medium text-[#2A2A2A] pt-[14px]">
              Adventure Travel <li className="font-normal"> 03/30/2024</li>
            </div>
            <h4 className="text-[#1A2B50] text-[17px] font-medium pt-1 pb-[14px]">
              The day on Paris
            </h4>
            <p className="text-[#7A7A7A] text-sm font-normal max-w-[344px]">
              From the iconic to the unexpected, the city of San Francisco never
              ceases to...
            </p>
            <button className="text-sm font-medium text-[#2A2A2A] pr-2 pb-1 border-b-[3px] border-[#E50024]">
              Read More
            </button>
          </div>
          <div className="max-w-[409px] mx-auto">
            <Image src={blog4} alt="blog1" />
            <div className="flex gap-x-4 text-sm font-medium text-[#2A2A2A] pt-[14px]">
              Adventure Travel <li className="font-normal"> 03/30/2024</li>
            </div>
            <h4 className="text-[#1A2B50] text-[17px] font-medium pt-1 pb-[14px]">
              The day on Paris
            </h4>
            <p className="text-[#7A7A7A] text-sm font-normal max-w-[344px]">
              From the iconic to the unexpected, the city of San Francisco never
              ceases to...
            </p>
            <button className="text-sm font-medium text-[#2A2A2A] pr-2 pb-1 border-b-[3px] border-[#E50024]">
              Read More
            </button>
          </div>
          <div className="max-w-[409px] mx-auto">
            <Image src={blog5} alt="blog1" />
            <div className="flex gap-x-4 text-sm font-medium text-[#2A2A2A] pt-[14px]">
              Adventure Travel <li className="font-normal"> 03/30/2024</li>
            </div>
            <h4 className="text-[#1A2B50] text-[17px] font-medium pt-1 pb-[14px]">
              The day on Paris
            </h4>
            <p className="text-[#7A7A7A] text-sm font-normal max-w-[344px]">
              From the iconic to the unexpected, the city of San Francisco never
              ceases to...
            </p>
            <button className="text-sm font-medium text-[#2A2A2A] pr-2 pb-1 border-b-[3px] border-[#E50024]">
              Read More
            </button>
          </div>
          <div className="max-w-[409px] mx-auto">
            <Image src={blog6} alt="blog1" />
            <div className="flex gap-x-4 text-sm font-medium text-[#2A2A2A] pt-[14px]">
              Adventure Travel <li className="font-normal"> 03/30/2024</li>
            </div>
            <h4 className="text-[#1A2B50] text-[17px] font-medium pt-1 pb-[14px]">
              The day on Paris
            </h4>
            <p className="text-[#7A7A7A] text-sm font-normal max-w-[344px]">
              From the iconic to the unexpected, the city of San Francisco never
              ceases to...
            </p>
            <button className="text-sm font-medium text-[#2A2A2A] pr-2 pb-1 border-b-[3px] border-[#E50024]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
