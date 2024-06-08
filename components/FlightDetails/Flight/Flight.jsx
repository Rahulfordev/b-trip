import React from "react";

 
import FlightContent from "../FlightContent/FlightContent";
import FlightFilters from "../FlightFilter/FlightFilters";

const Flight = () => {
  return (
    <div className="bg-[#EBF0F4]">
      <div className="max-w-[1292px] mx-auto">
        <div className="flex gap-4">
          <FlightFilters />
          <FlightContent />
        </div>
      </div>
    </div>
  );
};

export default Flight;
