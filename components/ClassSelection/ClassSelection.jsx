"use client";

import React, { useState } from "react";
import "./ClassSection.css";

const ClassSelection = () => {
  const [selectedClass, setSelectedClass] = useState("Economy");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 class-suggestion">
      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="economy"
          name="class"
          value="Economy"
          checked={selectedClass === "Economy"}
          onChange={() => setSelectedClass("Economy")}
          className="bg-white rounded-full border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
        />
        <label
          htmlFor="economy"
          className="ml-2 text-sm font-semibold text-[#04669F]"
        >
          Economy
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="business"
          name="class"
          value="Business"
          checked={selectedClass === "Business"}
          onChange={() => setSelectedClass("Business")}
          className="bg-white rounded-full border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
        />
        <label
          htmlFor="business"
          className="ml-2 text-sm font-semibold text-[#04669F]"
        >
          Business
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="first-class"
          name="class"
          value="First Class"
          checked={selectedClass === "First Class"}
          onChange={() => setSelectedClass("First Class")}
          className="bg-white border-[#5E6D77] appearance-none checked:bg-[#fe9a17] w-4 h-4 rounded-full border-2 checked:border-[#04669F] checked:p-1 transition duration-300 ease-in-out cursor-pointer"
        />
        <label
          htmlFor="first-class"
          className="ml-2 text-sm font-semibold text-[#04669F]"
        >
          First Class
        </label>
      </div>
    </div>
  );
};

export default ClassSelection;
