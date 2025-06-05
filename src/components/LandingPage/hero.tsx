"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function Hero() {
  return (
    <div className="min-h-[80vh] w-full  bg-[linear-gradient(to_bottom,#a46edb,#4f21A1_45%,#200D42_65%,#000_82%)] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-2xl md:text-6xl  text-center font-sans font-bold leading-[1.3]">
          We Turn Knowledge Into Scalable Digital Products.
        </h1>
        <p></p>
        <p className="text-gray-300 max-w-xl mx-auto my-2  md:text-lg text-center relative z-10">
          Whether you&apos;re a business or a creator — we build and launch
          world-class online courses that sell, scale, and transform lives.
        </p>
      </div>

      <BackgroundBeams />
    </div>
  );
}
