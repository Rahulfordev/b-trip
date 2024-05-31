/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";

const normalizeString = (str) => {
  return str.replace(/’/g, "'").toLowerCase();
};

const abbreviateCityName = (cityName) => {
  return cityName.split(",")[0];
};

const AirportSelector = ({
  label,
  initialAirport,
  onSelectAirport,
  airportData,
}) => {
  const [showAirportSuggestion, setShowAirportSuggestion] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirports, setFilteredAirports] = useState([]);

  useEffect(() => {
    setFilteredAirports(airportData.slice(0, 8));
  }, [airportData]);

  const handleSearchChange = (e) => {
    const value = normalizeString(e.target.value);
    setSearchTerm(value);

    const filtered = airportData.filter((airport) =>
      normalizeString(airport.cityName).includes(value)
    );
    setFilteredAirports(filtered.slice(0, 8));
  };

  const handleAirportClick = (airport) => {
    onSelectAirport(airport);
    setShowAirportSuggestion(false);
    setSearchTerm("");
  };

  return (
    <div className="search-box location">
      <div onClick={() => setShowAirportSuggestion(!showAirportSuggestion)}>
        <span className="label">{label}</span>
        <div className="value">
          {abbreviateCityName(initialAirport.cityName)}
        </div>
        <span className="sub-value">{`${initialAirport.code}, ${initialAirport.airportName}`}</span>
      </div>
      {showAirportSuggestion && (
        <div className="airport-suggestion">
          <div className="input-wrapper">
            <span
              className="close"
              onClick={() => setShowAirportSuggestion(false)}
            ></span>
            <input
              type="text"
              autoComplete="off"
              placeholder="Type to search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="clear" onClick={() => setSearchTerm("")}></span>
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
                  <div className="airport-name">{airport.airportName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportSelector;
