"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    <HeroHighlight>
      <div className="flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[60vh] px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-5xl leading-tight sm:leading-relaxed text-center mx-auto my-4"
        >
          We Build Strategic Courses That
          <br />
          <span className="sm:hidden"> </span>
          <Highlight className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Grow Your Business.
          </Highlight>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-white/80 text-center max-w-2xl mx-auto font-medium"
        >
          At scale. Done for you. Led by our team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Separator className="my-8 mx-auto w-16 sm:w-24 bg-white/30" />
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative text-center w-full max-w-6xl mx-auto"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full transform scale-150 opacity-60" />

          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight">
                Stats that back us up
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto font-medium leading-relaxed px-4">
                We&apos;re not only about fancy, good-looking courses — we{" "}
                <span className="text-white font-semibold">
                  scale businesses through education.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-5xl mx-auto px-4">
              <Card className="w-full max-w-[280px] group hover:scale-105 transition-all duration-300 shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="py-6 px-6 relative z-10 text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-2">
                    80,000+
                  </span>
                  <p className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wide leading-relaxed">
                    Students enrolled
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-[280px] group hover:scale-105 transition-all duration-300 shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="py-6 px-6 relative z-10 text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-2">
                    40% CTR
                  </span>
                  <p className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wide leading-relaxed">
                    on Paid Digital Product Upsells
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-[280px] sm:col-span-2 lg:col-span-1 group hover:scale-105 transition-all duration-300 shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="py-6 px-6 relative z-10 text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white block mb-2">
                    26.8%
                  </span>
                  <p className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wide leading-relaxed">
                    Conversion Rate on Paid Digital Product Upsells
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
