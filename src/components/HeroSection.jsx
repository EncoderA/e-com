import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-primary">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
        <div className="flex flex-col text-white max-w-md">
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
              Adidas Men Running Sneakers
            </h2>
            <h6 className="text-sm sm:text-base font-light">
              Performance and design. Taken right to the edge.
            </h6>
          </div>
          <span className="text-sm text-center md:text-left font-medium uppercase tracking-wide mt-4 underline hover:underline cursor-pointer">
            Shop now
          </span>
        </div>

        <div className="mt-8 lg:mt-0">
          <Image
            src="/shoe.webp"
            width={320}
            height={320}
            alt="shoe image"
            className="scale-x-[-1] w-64 sm:w-72 lg:w-80 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
