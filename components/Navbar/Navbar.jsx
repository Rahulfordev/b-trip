"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../../public/image/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className="bg-white text-[#04669F]">
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          <div className="flex-shrink-0 flex items-center">
            <Image src={Logo} alt="logo" className="w-24 md:w-[141px]" />
          </div>
          <div className="hidden md:flex md:items-center md:gap-20">
            <div className="hidden md:flex md:space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium">
                Home
              </a>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium">
                Flight
              </a>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("tour")}
                  className="px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2"
                >
                  Tour
                  <IoIosArrowDown />
                </button>
                {dropdownOpen === "tour" && (
                  <div className="absolute left-0 mt-7 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("haj")}
                  className="px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2"
                >
                  Haj
                  <IoIosArrowDown />
                </button>
                {dropdownOpen === "haj" && (
                  <div className="absolute left-0 mt-7 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("visa")}
                  className="px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2"
                >
                  Visa
                  <IoIosArrowDown />
                </button>
                {dropdownOpen === "visa" && (
                  <div className="absolute left-0 mt-7 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="px-3 py-2 rounded-md text-lg font-medium">
                Blog
              </a>
            </div>
            <div>
              <button className="text-xl font-semibold px-7 py-3 rounded-[38px] bg-[#04669F] text-white">
                Login
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <FaTimes className="text-[#04669F] text-xl" />
              ) : (
                <FaBars className="text-[#04669F] text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Flight
            </a>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tour")}
                className="flex items-center gap-1 w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                Tour
                <IoIosArrowDown />
              </button>
              {dropdownOpen === "tour" && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 3
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("haj")}
                className="flex items-center gap-1 w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                Haj
                <IoIosArrowDown />
              </button>
              {dropdownOpen === "haj" && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 3
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("visa")}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center gap-1"
              >
                Visa
                <IoIosArrowDown />
              </button>
              {dropdownOpen === "visa" && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Service 3
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <div>
              <button className="text-lg font-medium px-6 py-2 rounded-[38px] bg-[#04669F] text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
