"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    key: "upsell",
    title: "Using a Course to Upsell Your Product or SaaS",
    result: "Our Results: 40% CTR and 26.8% Conversion Rate",
    video:
      "https://player.vimeo.com/video/1075478881?h=9cf359e10a&autoplay=0&title=0&byline=0&portrait=0",
    cta: "Let's talk about what's possible.",
  },
  {
    key: "coaching",
    title: "Sell High-Ticket Coaching or Consulting",
    result:
      "Use a course to build trust and pre-qualify leads for premium 1-on-1 offers.",
    video:
      "https://player.vimeo.com/video/1075479463?h=9e455b71f2&autoplay=0&title=0&byline=0&portrait=0",
    cta: "Let's talk about what's possible.",
  },
];

export function CourseShowcase() {
  return (
    <div className="relative bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0  pointer-events-none" />

      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {sections.map((s) => (
            <div key={s.key} className="flex flex-col gap-4 sm:gap-6">
              {/* Header with purple accent - responsive text sizing */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight text-center leading-tight sm:leading-[1.1]">
                  {s.title}
                </h2>
              </div>

              <Card
                className="
                bg-white
                border-0
                shadow-lg sm:shadow-xl
                rounded-xl sm:rounded-2xl lg:rounded-3xl
                transition-all duration-300
                hover:shadow-xl sm:hover:shadow-2xl
                sm:hover:-translate-y-1
                relative
                overflow-hidden
              "
              >
                {/* Purple Gradient Accent Bar */}
                <div className="absolute left-0 top-0 h-1.5 sm:h-2 w-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400" />

                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/30 pointer-events-none" />

                <CardContent className="relative p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Result text - responsive sizing */}
                  <div className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium text-center leading-relaxed">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 font-semibold">
                      {s.result}
                    </span>
                  </div>

                  {/* Video Container with Premium Styling */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 rounded-lg sm:rounded-xl lg:rounded-2xl blur opacity-40 sm:opacity-50"></div>
                    <div
                      className="
                      relative
                      w-full aspect-[16/9] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden
                      border border-purple-100
                      shadow-md sm:shadow-lg
                      bg-gray-50
                      transition-transform duration-300
                      hover:scale-[1.005] sm:hover:scale-[1.01]
                    "
                    >
                      <iframe
                        src={s.video}
                        title={s.title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        frameBorder={0}
                      />
                    </div>
                  </div>
                </CardContent>

                {/* Reduced padding top for better spacing */}
                <CardFooter className="relative px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10 pt-0 flex justify-center">
                  <Link
                    href="https://calendly.com/lamz/meeting"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      className="
                      w-full sm:w-auto
                      text-sm sm:text-base lg:text-lg 
                      px-4 sm:px-6 lg:px-8 
                      py-2.5 sm:py-3 lg:py-3.5 
                      font-semibold
                      bg-gradient-to-r from-purple-600 to-purple-400
                      text-white shadow-md sm:shadow-lg
                      rounded-lg sm:rounded-xl lg:rounded-2xl
                      transition-all duration-200
                      hover:shadow-lg sm:hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105
                      hover:from-purple-700 hover:to-purple-500
                      focus:ring-2 sm:focus:ring-4 focus:ring-purple-300/50
                      active:scale-95
                      h-10 sm:h-11 lg:h-12
                      min-w-[200px] sm:min-w-[240px]
                      text-center
                    "
                    >
                      {s.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
