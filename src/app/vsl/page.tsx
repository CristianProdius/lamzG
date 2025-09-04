"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const VslSection = () => {
  const router = useRouter();

  const handleBookClick = () => {
    router.push("/contact");
  };

  const handleJoinNowClick = () => {
    window.location.href = "https://buy.stripe.com/dR6cN0gzbcaR7fyeUV";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 pt-6 md:pt-10 pb-12 md:pb-20">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4 md:gap-8">
            {/* Logo */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Image
                src="/ccclogo.png"
                alt="logo"
                className="h-10 md:h-14 w-auto"
                width={56}
                height={56}
              />
            </div>

            {/* Special Offer Badge */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                <p className="text-sm sm:text-base font-semibold text-center">
                  <span className="line-through opacity-75">$1,280</span>{" "}
                  <span className="text-lg sm:text-xl">$480</span>{" "}
                  <span className="text-xs sm:text-sm opacity-90">
                    • First 500 members only
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Full Demo & Training Video
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how to transform your expertise into a successful
                online course
              </p>
            </div>

            {/* Video Container */}
            <div className="relative w-full max-w-4xl mx-auto mb-8 md:mb-12">
              <motion.div
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
                    "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
                    "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-black">
                    <iframe
                      src="https://player.vimeo.com/video/1115230490?h=4990abe118&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="main"
                    ></iframe>
                  </div>
                </div>
              </motion.div>

              {/* Video Caption */}
              <p className="text-center text-gray-600 mt-6 text-base sm:text-lg italic">
                Please watch the complete training video before joining the
                course
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 text-center mb-8 text-base sm:text-lg">
                Choose the option that works best for you
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleJoinNowClick}
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base sm:text-lg font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl inline-flex items-center justify-center gap-2 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Join Now</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleBookClick}
                  className="group bg-white text-gray-900 text-base sm:text-lg font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl inline-flex items-center justify-center gap-2 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-indigo-300"
                >
                  <span>Book A Meeting</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-6 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">30+</p>
                    <p className="text-sm text-gray-600">Courses Created</p>
                  </div>
                  <div className="border-l border-gray-300 pl-6">
                    <p className="text-2xl font-bold text-gray-900">112K+</p>
                    <p className="text-sm text-gray-600">Students</p>
                  </div>
                  <div className="border-l border-gray-300 pl-6">
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VslSection;
