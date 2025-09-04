"use client";
import Link from "next/link";
import React from "react";

export const CTA = () => {
  return (
    <div className="bg-white text-gray-900 py-[72px] text-center sm:py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Ready to Create a Course That Grows Your Business?
        </h2>

        <Link href="https://calendly.com/lamz/one-on-one-call">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 mt-12 shadow-lg hover:shadow-xl">
            <span>Let&apos;s talk about what&apos;s possible.</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
