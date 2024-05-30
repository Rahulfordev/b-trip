import React from "react";

import style from "./flight.module.css";
import FlightFilter from "../FlightFilter/FlightFilter";
import FlightContent from "../FlightContent/FlightContent";

const Flight = () => {
  return (
    <div className="bg-[#EBF0F4]">
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div>
          <FlightFilter />
          <FlightContent />
        </div>
      </div>
    </div>
  );
};

export default Flight;
