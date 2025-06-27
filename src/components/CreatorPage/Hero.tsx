"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Player from "@vimeo/player";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const player = new Player(iframe);

      player.setVolume(1); // Set volume to 100%

      player.on("loaded", () => {
        player.play();
      });

      return () => {
        player.unload();
      };
    }
  }, []);

  return (
    <div className="bg-white text-gray-900 pt-8 md:pt-12 px-4 min-h-screen">
      <div className="container relative mx-auto">
        {/* Header Alert */}
        <div className="flex items-center justify-center my-8 px-4 w-full">
          <motion.a
            href=""
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 border py-2 px-4 rounded-full border-purple-200 bg-purple-50 hover:bg-purple-100 transition-all w-auto shadow-sm hover:shadow-md"
          >
            <div className="bg-green-500 px-3 py-1 rounded-full flex items-center animate-pulse">
              <span className="text-[10px] font-bold text-white sm:text-xs uppercase tracking-wider">
                LIVE NOW
              </span>
            </div>
            <span className="text-xs sm:text-sm md:text-base text-purple-900 font-medium">
              For Creators and Freelancers Only
            </span>
          </motion.a>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 italic">
              Knowledge
            </span>{" "}
            Into A Thriving Online Course Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed"
          >
            Create and launch your profitable online course in 30 days - no
            following, no ads, guaranteed results
          </motion.p>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="vsl-container relative w-full max-w-4xl mx-auto mb-12"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 shadow-2xl">
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative bg-white rounded-2xl p-2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <iframe
                    src="https://player.vimeo.com/video/1052329231?h=0540f3a723&badge=0&autopause=0&player_id=0&app_id=58479&muted=false"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="main"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Video label */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                Watch Free Training Video
              </span>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center mt-8"
        >
          <button
            onClick={onOpenModal}
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg sm:text-xl py-4 px-8 sm:py-5 sm:px-10 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Start Watching Now</span>
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2,470+ students enrolled</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
