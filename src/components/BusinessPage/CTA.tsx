"use client";
import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <div className=" text-white py-[72px] text-center sm:py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Ready to Create a Course That Grows Your Business?
        </h2>

        <Link href="/creator">
          <button className="bg-white text-black sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 mt-12">
            <span>Let’s talk about what’s possible.</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
