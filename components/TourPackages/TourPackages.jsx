import Image from "next/image";
import React from "react";

import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

import TourOne from "../../public/image/tour/tour-1.png";
import TourTwo from "../../public/image/tour/tour-2.png";
import TourThree from "../../public/image/tour/tour-3.png";

const TourPackages = () => {
  return (
    <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
      <div>
        <div>
          <h1 className="text-[#04669F] text-[32px] font-semibold pb-7 pt-16">
            Tour Packages
          </h1>
        </div>
        <div className="grid gap-y-4 gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-black border max-w-[420px] mx-auto">
            <div className="p-2">
              <Image src={TourOne} alt="TourOne" />
              <h3 className="text-[20px] mt-1 font-medium">
                Pokhara in 5 Hours: Lake, Museum
              </h3>
              <p className="text-sm">
                Embark on a once-in-a-lifetime adventure with our private tour
                of Pokhara in 5 hours. Your personal driver cum guide will pick
                you up...
              </p>
              <div className="my-1">
                <div className="flex items-center gap-2 text-lg font-normal">
                  <CiCalendar />
                  <p className="text-base">Sep 20 - 25</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-normal">
                  <CiClock2 />
                  <p className="text-base">1 days 0 nights</p>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF8FF] rounded-tl-none rounded-tr-none rounded-br-[5px] rounded-bl-[5px] p-2">
              <del className="text-sm">BDT 6,875</del>
              <h4 className="text-xl font-medium">BDT 6,875</h4>
              <button className="bg-[#04669F] mt-4 text-white text-base font-medium py-[18px] w-full rounded">
                View Details
              </button>
            </div>
          </div>
          <div className="text-black border max-w-[420px] mx-auto">
            <div className="p-2">
              <Image src={TourTwo} alt="TourOne" />
              <h3 className="text-[20px] mt-1 font-medium">
                Pokhara in 5 Hours: Lake, Museum
              </h3>
              <p className="text-sm">
                Embark on a once-in-a-lifetime adventure with our private tour
                of Pokhara in 5 hours. Your personal driver cum guide will pick
                you up...
              </p>
              <div className="my-1">
                <div className="flex items-center gap-2 text-lg font-normal">
                  <CiCalendar />
                  <p className="text-base">Sep 20 - 25</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-normal">
                  <CiClock2 />
                  <p className="text-base">1 days 0 nights</p>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF8FF] rounded-tl-none rounded-tr-none rounded-br-[5px] rounded-bl-[5px] p-2">
              <del className="text-sm">BDT 6,875</del>
              <h4 className="text-xl font-medium">BDT 6,875</h4>
              <button className="bg-[#04669F] mt-4 text-white text-base font-medium py-[18px] w-full rounded">
                View Details
              </button>
            </div>
          </div>
          <div className="text-black border max-w-[420px] mx-auto">
            <div className="p-2">
              <Image src={TourThree} alt="TourOne" />
              <h3 className="text-[20px] mt-1 font-medium">
                Pokhara in 5 Hours: Lake, Museum
              </h3>
              <p className="text-sm">
                Embark on a once-in-a-lifetime adventure with our private tour
                of Pokhara in 5 hours. Your personal driver cum guide will pick
                you up...
              </p>
              <div className="my-1">
                <div className="flex items-center gap-2 text-lg font-normal">
                  <CiCalendar />
                  <p className="text-base">Sep 20 - 25</p>
                </div>
                <div className="flex items-center gap-2 text-lg font-normal">
                  <CiClock2 />
                  <p className="text-base">1 days 0 nights</p>
                </div>
              </div>
            </div>

            <div className="bg-[#EDF8FF] rounded-tl-none rounded-tr-none rounded-br-[5px] rounded-bl-[5px] p-2">
              <del className="text-sm">BDT 6,875</del>
              <h4 className="text-xl font-medium">BDT 6,875</h4>
              <button className="bg-[#04669F] mt-4 text-white text-base font-medium py-[18px] w-full rounded">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
