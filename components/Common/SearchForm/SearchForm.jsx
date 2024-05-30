/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import "./SearchForm.css";

const airportData = [
  {
    id: 1,
    cityName: "Dhaka, Bangladesh",
    airportName: "Hazrat Shahjalal International Airport",
    code: "DAC",
  },
  {
    id: 2,
    cityName: "Cox’s Bazar, Bangladesh",
    airportName: "Cox’s Bazar Airport",
    code: "CXB",
  },
  {
    id: 3,
    cityName: "Jessore, Bangladesh",
    airportName: "Jessore Airport",
    code: "JSR",
  },
  {
    id: 4,
    cityName: "London, United Kingdom",
    airportName: "Heathrow Airport",
    code: "LHR",
  },
  {
    id: 5,
    cityName: "New York, United States",
    airportName: "John F Kennedy International Airport",
    code: "JFK",
  },
  {
    id: 6,
    cityName: "Sylhet Osmani, Bangladesh",
    airportName: "Osmany International Airport",
    code: "ZYL",
  },
];

const normalizeString = (str) => {
  return str.replace(/’/g, "'").toLowerCase();
};

const abbreviateCityName = (cityName) => {
  return cityName.split(",")[0];
};

const SearchForm = () => {
  const [showAirportSuggestion, setShowAirportSuggestion] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirports, setFilteredAirports] = useState(
    airportData.slice(0, 8)
  );
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleSearchChange = (e) => {
    const value = normalizeString(e.target.value);
    setSearchTerm(value);

    const filtered = airportData.filter((airport) =>
      normalizeString(airport.cityName).includes(value)
    );
    setFilteredAirports(filtered.slice(0, 8));
  };

  const handleAirportClick = (airport) => {
    setSelectedAirport(airport);
    setSearchTerm("");
  };

  return (
    <div className="bg-white max-w-[1292px] mx-auto h-full pb-4 md:pb-5 lg:pb-6 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] px-4">
      <div className="pt-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <button className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_366_3107)">
                <path
                  d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"
                  stroke="#04669F"
                  strokeWidth="2"
                />
                <path
                  d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z"
                  fill="#04669F"
                />
              </g>
              <defs>
                <clipPath id="clip0_366_3107">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-semibold text-[#04669F]">
              One Way
            </span>
          </button>
          <button className="flex items-center gap-2 opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_366_3107)">
                <path
                  d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"
                  stroke="#1C3C6B"
                  strokeWidth="2"
                />
                <path
                  d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z"
                  fill="#1C3C6B"
                />
              </g>
              <defs>
                <clipPath id="clip0_366_3107">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-semibold text-[#1C3C6B]">
              Round Trip
            </span>
          </button>
          <button className="flex items-center gap-2 opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_366_3107)">
                <path
                  d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"
                  stroke="#1C3C6B"
                  strokeWidth="2"
                />
                <path
                  d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z"
                  fill="#1C3C6B"
                />
              </g>
              <defs>
                <clipPath id="clip0_366_3107">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-semibold text-[#1C3C6B]">
              Multi City
            </span>
          </button>
        </div>
        <div className="flight-search bar pt-2">
          <div className="search-box location from">
            <div
              onClick={() => setShowAirportSuggestion(!showAirportSuggestion)}
            >
              <span className="label">From</span>
              <div className="value">
                {selectedAirport
                  ? abbreviateCityName(selectedAirport.cityName)
                  : "Dhaka"}
              </div>
              <span className="sub-value">
                {selectedAirport
                  ? `${selectedAirport.code}, ${selectedAirport.airportName}`
                  : "DAC, Hazrat Shahjalal International Airport"}
              </span>
            </div>
            {showAirportSuggestion && (
              <div className="airport-suggestion">
                <div className="input-wrapper">
                  <span className="close"></span>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Type to search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <span
                    className="clear"
                    onClick={() => setSearchTerm("")}
                  ></span>
                </div>
                <div className="airport-list">
                  {filteredAirports.map((airport) => (
                    <div
                      className="airport"
                      key={airport.id}
                      onClick={() => handleAirportClick(airport)}
                    >
                      <div className="code">{airport.code}</div>
                      <hr className="hr" />
                      <div className="airport-location">
                        <div className="city-country">{airport.cityName}</div>
                        <div className="airport-name">
                          {airport.airportName}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="search-box location to has-swapper">
            <span className="swapper"></span>
            <span className="label">To</span>
            <div className="value">Cox's Bazar</div>
            <span className="sub-value"> CXB, Cox's Bazar Airport </span>
          </div>
          <div className="search-box date depart">
            <span className="label">Journey Date</span>
            <div className="value">
              26 <span>May'24</span>
            </div>
            <span className="sub-value">Sunday</span>
          </div>
          <div className="search-box date return">
            <span className="label">Return Date</span>
            <span className="sub-value inline-style">
              Save more on return flight
            </span>
          </div>
          <div className="search-box traveler">
            <span className="label">Traveler, Class</span>
            <div className="value">1 Traveler</div>
            <span className="sub-value">Economy</span>
          </div>
          <div className="search-box traveler mt-2 lg:mt-0 ml-2 bg-[#04669F] text-white flex items-center justify-center">
            <button className="">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
