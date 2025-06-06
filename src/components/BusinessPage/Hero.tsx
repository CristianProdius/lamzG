"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "lucide-react";

export function Hero() {
  return (
    <div className="relative ">
      <HeroHighlight>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          We Build Strategic Courses That
          <br />
          <Highlight className="text-black dark:text-white">
            Grow Your Business.
          </Highlight>
        </motion.h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 text-center max-w-2xl mx-auto">
          At scale. Done for you. Led by our team.
        </p>

        <Separator className="my-8 mx-auto w-24 bg-neutral-800" />

        <div className="text-center mb-8 mt-6">
          <h2 className="text-base md:text-lg font-medium mb-1 text-neutral-500 dark:text-neutral-400 tracking-wide uppercase">
            Stats that back us up
          </h2>
          <p className="text-sm md:text-base text-neutral-400 dark:text-neutral-500 mb-4 max-w-md mx-auto">
            We’re not only about fancy, good-looking courses — we scale
            businesses through education.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Card className="w-40 shadow-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <CardContent className="py-3 px-2">
                <span className="text-xl font-semibold text-primary">
                  80,000+
                </span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Students enrolled
                </p>
              </CardContent>
            </Card>
            <Card className="w-40 shadow-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <CardContent className="py-3 px-2">
                <span className="text-xl font-semibold text-primary">
                  40% CTR
                </span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  on Paid Digital Product Upsells
                </p>
              </CardContent>
            </Card>
            <Card className="w-40 shadow-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <CardContent className="py-3 px-2">
                <span className="text-xl font-semibold text-primary">
                  26.8%
                </span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Conversion Rate on Paid Digital Product Upsells
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <Link href="/creator">
            <Button size="lg" className="text-lg px-8 py-4">
              Let’s talk about what’s possible
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
