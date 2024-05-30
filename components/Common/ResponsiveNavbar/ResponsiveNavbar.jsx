"use client";
import Link from "next/link";
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

import Logo from "../../../public/image/logo/logo.png";

function ResponsiveNavbar({ dropdownOpen, toggleDropdown }) {
  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto z-40">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content group flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="shadow-none ml-8 btn bg-transparent hover:bg-transparent border-none drawer-button lg:hidden"
        >
          <FaBars className="text-2xl bg-transparent text-[#04669F]" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="font-custom text-base menu pt-6 lg:pt-4 lg:mx-4 w-60 lg:rounded-md min-h-full lg:min-h-[90%] bg-[#fff] text-[#04669F] flex flex-col justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logo"
                className="w-[85px] cursor-pointer"
              />
            </Link>
            <div className="flex flex-col gap-y-2 mt-3">
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100"
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
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <button className="text-sm font-medium w-full py-2 rounded bg-[#04669F] text-white">
              Login
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
