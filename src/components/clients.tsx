"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [
    "coursera",
    "kajabi",
    "Linkedin",
    "skillshare",
    "teachable",
    "udmey",
  ];

  return (
    <div
      className="bg-white py-12 md:py-16 
    "
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Trusted by Leading Platforms
          </p>
          <h3 className="text-2xl font-semibold text-gray-900">
            Where Our Courses Are Featured
          </h3>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-16 flex-none pr-16 items-center"
              animate={{ translateX: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center min-w-[120px]"
                >
                  <Image
                    src={`/clients/${logo}.svg`}
                    className="h-8 md:h-10 w-auto object-contain max-w-none   transition-opacity duration-300"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={`${logo} Logo`}
                  />
                </div>
              ))}
              {/* Second set of logos for seamless animation */}
              {logos.map((logo) => (
                <div
                  key={`second-${logo}`}
                  className="flex items-center justify-center min-w-[120px]"
                >
                  <Image
                    src={`/clients/${logo}.svg`}
                    className="h-8 md:h-10 w-auto object-contain max-w-none   transition-opacity duration-300 "
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={`${logo} Logo`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
