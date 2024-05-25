"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../../public/image/logo/logo.png";
import Link from "next/link";

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
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#"
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
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <FaTimes className="text-[#04669F] text-2xl" />
              ) : (
                <FaBars className="text-[#04669F] text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "h-[100vh]" : "h-0"
        } duration-200 lg:hidden overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Flight
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("tour")}
              className="flex items-center justify-between gap-1 w-full text-left px-3 py-2 hover:bg-gray-100 text-base font-medium"
            >
              Tour
              <IoIosArrowDown className="text-base" />
            </button>
            {dropdownOpen === "tour" && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
              className="flex items-center justify-between gap-1 w-full text-left px-3 py-2 hover:bg-gray-100 text-base font-medium"
            >
              Haj
              <IoIosArrowDown className="text-base" />
            </button>
            {dropdownOpen === "haj" && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
              className="flex items-center justify-between gap-1 w-full text-left px-3 py-2 hover:bg-gray-100 text-base font-medium"
            >
              Visa
              <IoIosArrowDown className="text-base" />
            </button>
            {dropdownOpen === "visa" && (
              <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
          <div className="bottom-0">
            <button className="text-sm font-medium w-full py-2 rounded bg-[#04669F] text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
