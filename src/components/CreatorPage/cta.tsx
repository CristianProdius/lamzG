"use client";
import React from "react";
import Image from "next/image";

interface CTAProps {
  onOpenModal: () => void;
}

export const CTA = ({ onOpenModal }: CTAProps) => {
  return (
    <div className=" text-white py-[72px] text-center sm:py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Transform Your Knowledge Into a Thriving Online Course Business
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Join Over 7,000+ Course Creators Who&apos;ve Built Profitable Courses
          Without Ads or Following
        </p>

        <button
          onClick={onOpenModal}
          className="bg-white text-black sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 mt-12"
        >
          <span>Watch Free Training</span>
        </button>
      </div>
    </div>
  );
};
