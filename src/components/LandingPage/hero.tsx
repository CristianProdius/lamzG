"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold leading-[1.3]">
          We Turn Knowledge Into Scalable Digital Products.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-xl mx-auto my-2 md:text-lg text-center relative z-10">
          Whether you&apos;re a business or a creator — we build and launch
          world-class online courses that sell, scale, and transform lives.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
