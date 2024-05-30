"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../../../public/image/logo/logo.png";
import Link from "next/link";

import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className="bg-white text-[#04669F] sticky top-0 z-50 shadow-custom-black">
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[68px]">
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logo"
                className="w-[85px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:gap-20">
            <div className="hidden md:flex md:space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/Flight-Details"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Flight
              </Link>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("tour")}
                  className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  Tour
                  <IoIosArrowDown />
                </button>
                {dropdownOpen === "tour" && (
                  <div className="absolute left-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 2
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 3
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("haj")}
                  className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  Haj
                  <IoIosArrowDown />
                </button>
                {dropdownOpen === "haj" && (
                  <div className="absolute left-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 2
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 3
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("visa")}
                  className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                >
                  Visa
                  <IoIosArrowDown />
                </button>
                {dropdownOpen === "visa" && (
                  <div className="absolute left-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 1
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 2
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Service 3
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
            </div>
            <div>
              <button className="text-sm font-semibold px-7 py-3 rounded-[38px] bg-[#04669F] text-white">
                Login
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <ResponsiveNavbar
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
