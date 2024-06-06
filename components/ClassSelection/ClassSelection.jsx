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
          className="form-radio h-4 w-4 text-[#04669F] bg-white border-gray-300 focus:ring-blue-500"
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
          className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="business" className="ml-2 text-sm font-semibold text-[#04669F]">
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
          className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="first-class" className="ml-2 text-sm font-semibold text-[#04669F]">
          First Class
        </label>
      </div>
    </div>
  );
};

export default ClassSelection;
