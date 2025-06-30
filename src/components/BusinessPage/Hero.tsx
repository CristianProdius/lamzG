"use client";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <div className="py-12 md:py-20 w-full bg-white relative flex flex-col items-center justify-center antialiased">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-transparent to-white pointer-events-none" />

      <div className="flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[60vh] px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-5xl leading-[1.1] tracking-tight text-center mx-auto my-4"
        >
          We Build Strategic Courses That
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 italic">
            Grow Your Business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed"
        >
          At scale. Done for you. Led by our team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Separator className="my-12 mx-auto w-20 sm:w-32 bg-purple-200" />
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative text-center w-full max-w-6xl mx-auto"
        >
          <div className="relative z-10">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                Stats that back us up
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                We&apos;re not only about fancy, good-looking courses — we{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 font-bold">
                  scale businesses through education.
                </span>
              </p>
            </div>

            {/* Premium Light Theme Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -5 }}
                className="w-full max-w-[320px]"
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg border-0 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-60" />
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-purple-400" />
                  <CardContent className="py-10 px-8 relative z-10 text-center">
                    <motion.span
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 block mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      80,000+
                    </motion.span>
                    <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                      Students enrolled
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -5 }}
                className="w-full max-w-[320px]"
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg border-0 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-60" />
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 to-pink-400" />
                  <CardContent className="py-10 px-8 relative z-10 text-center">
                    <motion.span
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 block mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      40% CTR
                    </motion.span>
                    <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                      on Paid Digital Product Upsells
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ y: -5 }}
                className="w-full max-w-[320px] sm:col-span-2 lg:col-span-1"
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg border-0 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-60" />
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-400 to-purple-400" />
                  <CardContent className="py-10 px-8 relative z-10 text-center">
                    <motion.span
                      className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 block mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      26.8%
                    </motion.span>
                    <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                      Conversion Rate on Paid Digital Product Upsells
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
