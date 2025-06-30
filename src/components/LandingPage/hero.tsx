"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";

export function Hero() {
  return (
    <div className="py-8 md:py-16 w-full bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto px-6 md:px-4">
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-6xl text-center font-sans font-bold leading-[1.2] sm:leading-[1.3] text-gray-900">
          We Turn Knowledge Into Scalable Digital Products.
        </h1>
        <p></p>
        <p className="text-gray-600 max-w-xl mx-auto mt-4 md:mt-6 text-base sm:text-lg md:text-lg text-center relative z-10 px-2">
          Whether you&apos;re a business or a creator — we build and launch
          world-class online courses that sell, scale, and transform lives.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-10 sm:mt-12 md:mt-16 px-6 md:px-4 mb-8 md:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-12">
          Our Services
        </h2>

        {/* Services Grid - Mobile optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Service 1 */}
          <div className="relative group">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-md md:shadow-lg bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-xl">
              <Image
                src="/service-1.png" // Replace with your actual service image path
                alt="Service 1"
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative group">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-md md:shadow-lg bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-xl">
              <Image
                src="/service-2.png" // Replace with your actual service image path
                alt="Service 2"
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative group">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-md md:shadow-lg bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-xl">
              <Image
                src="/service-3.png" // Replace with your actual service image path
                alt="Service 3"
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 4 */}
          <div className="relative group">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-md md:shadow-lg bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-xl">
              <Image
                src="/service-4.png" // Replace with your actual service image path
                alt="Service 4"
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 5 - Centered on mobile when odd number */}
          <div className="relative group col-span-2 sm:col-span-1 max-w-[50%] sm:max-w-full mx-auto sm:mx-0 xl:col-span-1">
            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-md md:shadow-lg bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-xl">
              <Image
                src="/service-5.png" // Replace with your actual service image path
                alt="Service 5"
                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
