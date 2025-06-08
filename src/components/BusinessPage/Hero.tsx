"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)]">
      <HeroHighlight>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-white max-w-3xl leading-relaxed text-center mx-auto"
        >
          We Build Strategic Courses That
          <br />
          <Highlight className="text-white">Grow Your Business.</Highlight>
        </motion.h1>

        <p className="mt-4 text-base md:text-lg text-white/80 text-center max-w-xl mx-auto">
          At scale. Done for you. Led by our team.
        </p>

        <Separator className="my-6 mx-auto w-16 bg-white/30" />

        {/* Premium Stats Section */}
        <div className="relative text-center mb-8 mt-8 px-4">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full transform scale-150 opacity-60" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight">
                Stats that back us up
              </h2>
              <p className="text-sm md:text-base text-white/70 mb-6 max-w-lg mx-auto font-medium leading-relaxed">
                We're not only about fancy, good-looking courses — we{" "}
                <span className="text-white font-semibold">
                  scale businesses through education.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto"
            >
              <Card className="w-48 md:w-52 group hover:scale-105 transition-all duration-300 shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="py-4 px-4 relative z-10">
                  <span className="text-2xl md:text-3xl font-black text-white block mb-1">
                    80,000+
                  </span>
                  <p className="text-xs text-white/70 font-medium uppercase tracking-wide">
                    Students enrolled
                  </p>
                </CardContent>
              </Card>

              <Card className="w-48 md:w-52 group hover:scale-105 transition-all duration-300 shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="py-4 px-4 relative z-10">
                  <span className="text-2xl md:text-3xl font-black text-white block mb-1">
                    40% CTR
                  </span>
                  <p className="text-xs text-white/70 font-medium uppercase tracking-wide">
                    on Paid Digital Product Upsells
                  </p>
                </CardContent>
              </Card>

              <Card className="w-48 md:w-52 group hover:scale-105 transition-all duration-300 shadow-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/15 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="py-4 px-4 relative z-10">
                  <span className="text-2xl md:text-3xl font-black text-white block mb-1">
                    26.8%
                  </span>
                  <p className="text-xs text-white/70 font-medium uppercase tracking-wide">
                    Conversion Rate on Paid Digital Product Upsells
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <Link href="/creator">
            <Button
              size="lg"
              className="text-base px-6 py-3 bg-white text-black hover:bg-white/90 font-semibold"
            >
              Let's talk about what's possible
            </Button>
          </Link>
        </div>
      </HeroHighlight>
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 w-full h-32
          bg-gradient-to-b
          from-transparent
          to-white
          dark:to-neutral-950
          z-10
        "
        aria-hidden="true"
      />
    </div>
  );
}
