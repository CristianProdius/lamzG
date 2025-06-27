"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${offsetX}px ${offsetY}px, black, transparent`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (border.current === null) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      key={title}
      className="group bg-white border border-gray-200 px-6 py-10 text-center rounded-2xl sm:flex-1 relative shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={border}
      ></motion.div>

      {/* Icon container with gradient background */}
      <div className="inline-flex h-16 w-16 bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600 justify-center items-center rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-6 font-semibold text-gray-900 text-lg">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 leading-relaxed text-sm">
        {description}
      </p>

      {/* Optional: Add a subtle hover indicator */}
      <div className="mt-6 w-12 h-1 bg-gray-200 mx-auto rounded-full group-hover:w-20 group-hover:bg-purple-500 transition-all duration-300"></div>
    </div>
  );
};

export default Feature;
