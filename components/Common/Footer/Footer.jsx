import React from "react";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import LogoWhite from "../../../public/image/logo/logo-white.png";

import footer1 from "../../../public/image/footer/footer-1.png";
import footer2 from "../../../public/image/footer/footer-2.png";
import footer3 from "../../../public/image/footer/footer-3.png";
import footer4 from "../../../public/image/footer/footer-4.png";
import footer5 from "../../../public/image/footer/footer-5.png";
import footer6 from "../../../public/image/footer/footer-6.png";
import footer7 from "../../../public/image/footer/footer-7.png";
import footer8 from "../../../public/image/footer/footer-8.png";
import footer9 from "../../../public/image/footer/footer-9.png";
import footer10 from "../../../public/image/footer/footer-10.png";
import footer11 from "../../../public/image/footer/footer-11.png";

const Footer = () => {
  return (
    <footer className="bg-[#04669F] py-8">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:flex justify-between grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h3 className="text-[16px] font-bold text-white mb-2">Discovers</h3>
            <div className="text-white font-normal text-sm flex items-center gap-x-[19px]">
              <ul className="flex flex-col gap-y-[6px]">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Terms</li>
                <li className="cursor-pointer">Talent & Culture</li>
              </ul>
              <ul className="flex flex-col gap-y-[6px]">
                <li className="cursor-pointer">Refund Policy</li>
                <li className="cursor-pointer">EMI Policy</li>
                <li className="cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="">
            <h3 className="text-[16px] font-bold text-white mb-2">
              Payment Methods
            </h3>
            <ul className="grid grid-cols-4 gap-x-0 gap-y-2 sm:gap-x-2 sm:gap-y-2">
              <li>
                <Image src={footer1} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer2} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer3} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer4} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer5} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer6} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer7} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer8} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer9} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer10} alt="payment-feature" />
              </li>
              <li>
                <Image src={footer11} alt="payment-feature" />
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-[16px] font-bold text-white mb-2">
              Need Help ?
            </h3>
            <div>
              <p className="text-sm font-normal text-white max-w-[300px]">
                We are Always here for you! Knock us on Messenger anytime or
                Call our Hotline (10AM - 10PM).
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-[16px] font-bold text-white mb-2">Contact</h3>
            <div className="text-white">
              <p className="pb-[6px] cursor-pointer">info@btrip.com</p>
              <p className="cursor-pointer">+88 09678 002211</p>
              <div className="flex items-center gap-x-[10px] pt-5">
                <div className="w-10 h-10 bg-[#ffffff28] rounded-full flex items-center justify-center cursor-pointer">
                  <FaFacebookF className="text-base" />
                </div>
                <div className="w-10 h-10 bg-[#ffffff28] rounded-full flex items-center justify-center cursor-pointer">
                  <FaYoutube className="text-base" />
                </div>
                <div className="w-10 h-10 bg-[#ffffff28] rounded-full flex items-center justify-center cursor-pointer">
                  <FaInstagram className="text-base" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <hr className="border-white mt-3 mb-4" />
          <div className="flex items-center justify-between">
            <Image
              src={LogoWhite}
              className="w-[85px] cursor-pointer"
              alt="logo"
            />
            <p className="text-sm font-normal text-white">
              © Copyright Btrip Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
