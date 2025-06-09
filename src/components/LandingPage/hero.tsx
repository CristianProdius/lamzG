"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";

export function Hero() {
  return (
    <div className="py-2 md:py-16 w-full bg-[linear-gradient(to_bottom,#a46edb,#4f21A1_45%,#200D42_65%,#000_82%)] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-6xl text-center font-sans font-bold leading-[1.3]">
          We Turn Knowledge Into Scalable Digital Products.
        </h1>
        <p></p>
        <p className="text-gray-300 max-w-xl mx-auto my-2 md:text-lg text-center relative z-10">
          Whether you&apos;re a business or a creator — we build and launch
          world-class online courses that sell, scale, and transform lives.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-12 md:mt-16 px-4 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {/* Service 1 */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105">
              <Image
                src="/service-1.png" // Replace with your actual service image path
                alt="Service 1"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105">
              <Image
                src="/service-2.png" // Replace with your actual service image path
                alt="Service 2"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105">
              <Image
                src="/service-3.png" // Replace with your actual service image path
                alt="Service 3"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 4 */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105">
              <Image
                src="/service-4.png" // Replace with your actual service image path
                alt="Service 4"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Service 5 */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105">
              <Image
                src="/service-5.png" // Replace with your actual service image path
                alt="Service 5"
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
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
