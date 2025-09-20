import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import LogoIcon from "./navbar/Logo";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="w-full md:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row  items-center justify-between md:pl-24 mb-12">
          <div className="w-full md:w-62">
            <div className="flex items-center gap-2">
              <LogoIcon size={30} />
              <h2 className="text-xl font-bold text-gray-800">E-Comm</h2>
            </div>
            <div className="text-foreground py-3 rounded">
              <p className="text-gray-700 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>

          <div className="w-full md:w-62">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>
            <p className="text-gray-700 text-xs mb-4">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8  rounded flex items-center justify-center">
                <FaFacebookF className="text-[#385C8E] w-4 h-4" />
              </div>
              <div className="w-8 h-8  rounded flex items-center justify-center">
                <FaTwitter className="text-[#03A9F4] w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-62">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <div className="text-gray-700 text-xs space-y-1">
              <p>E-Comm, 4578</p>
              <p>Marmora Road,</p>
              <p>Glasgow D04 89GR</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around gap-8 mb-16">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Information</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Service</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">My Account</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Our Offers</h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="w-11/12 h-0.5 bg-white" />
        </div>
        <div className="mt-4 flex items-center justify-end mr-4 md:mr-14 ">
          <Image src="/cards.png" width={200} height={200} alt="cards logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
