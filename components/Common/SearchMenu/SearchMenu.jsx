import Image from "next/image";
import React from "react";

import Flight from "../../../public/image/hero-section/Flight.png";
import Hotel from "../../../public/image/hero-section/Hotel.png";
import Tour from "../../../public/image/hero-section/Tur.png";

const SearchMenu = () => {
  return (
    <div className="w-full sm:max-w-[474px] h-[68px] bg-white rounded-[10px] px-[27px] flex items-center justify-between shadow-custom-blue absolute top-[-45px]">
      <button className="flex flex-col items-center gap-1 pt-[19px] pb-[10px] pl-[22px] pr-[18px] border-b-2 border-[#FC9A16]">
        <Image src={Flight} alt="Flight" />
        <span className="text-sm font-medium text-[#04669F]">Flight</span>
      </button>
      <button className="flex flex-col items-center gap-1 pt-[17px] pb-[10px] pl-[22px] pr-[18px]">
        <Image src={Hotel} alt="Flight" />
        <span className="text-sm  font-medium text-[#04669F]">Haj & Umrah</span>
      </button>
      <button className="flex flex-col items-center gap-1 pt-[17px] pb-[10px] pl-[22px] pr-[18px]">
        <Image src={Tour} alt="Flight" />
        <span className="text-sm font-medium text-[#04669F]">Tour</span>
      </button>
    </div>
  );
};

export default SearchMenu;
