"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const images = [
  {
    src: "/1.png",
    alt: "Strategic Planning",
  },
  {
    src: "/2.png",
    alt: "Video Production",
  },
  {
    src: "/3.png",
    alt: "Hosting & Delivery",
  },
  {
    src: "/4.png",
    alt: "Marketing & Scaling",
  },
];

export default function WhatWeTakeCareOf() {
  return (
    <div className="relative bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-white pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            What we take care of
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            A Complete Done-For-You Solution — Built for Business Results
          </p>
          <Separator className="mt-6 sm:mt-8 mx-auto w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400" />
        </div>

        {/* Grid Layout - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Purple gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 z-20" />

              {/* Image Container - Full height to show entire image */}
              <div className="relative overflow-hidden bg-gray-100">
                <Image
                  width={600}
                  height={400}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle purple gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-60" />

                {/* Step number badge */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-lg rounded-full">
                  <span className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                    {idx + 1}
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl" />
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-purple-300/20 rounded-full blur-xl" />
            </div>
          ))}
        </div>

        {/* Optional CTA section */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Ready to transform your expertise into a thriving course business?
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 text-sm sm:text-base">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
