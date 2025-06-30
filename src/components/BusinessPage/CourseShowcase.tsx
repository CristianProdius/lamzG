"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

type SectionKey = "saas" | "consulting";

const sections: Record<
  SectionKey,
  {
    key: string;
    title: string;
    result: string;
    video: string;
    cta: string;
  }
> = {
  saas: {
    key: "upsell",
    title: "Using a Course to Upsell Your Product or SaaS",
    result: "Our Results: 40% CTR and 26.8% Conversion Rate",
    video:
      "https://player.vimeo.com/video/1075478881?h=9cf359e10a&autoplay=0&title=0&byline=0&portrait=0",
    cta: "Let's talk about what's possible.",
  },
  consulting: {
    key: "coaching",
    title: "Sell High-Ticket Coaching or Consulting",
    result:
      "Use a course to build trust and pre-qualify leads for premium 1-on-1 offers.",
    video:
      "https://player.vimeo.com/video/1075479463?h=9e455b71f2&autoplay=0&title=0&byline=0&portrait=0",
    cta: "Let's talk about what's possible.",
  },
};

interface CourseShowcaseProps {
  variant?: SectionKey;
}

export function CourseShowcase({ variant = "saas" }: CourseShowcaseProps) {
  // Get the appropriate section based on the variant prop
  const section = sections[variant] || sections.saas;

  return (
    <div className="relative bg-white">
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Header with purple accent - responsive text sizing */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 flex-shrink-0" />
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight text-center leading-tight sm:leading-[1.1]">
              {section.title}
            </h2>
          </div>

          {/* Result text - responsive sizing */}
          <div className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium text-center leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 font-semibold">
              {section.result}
            </span>
          </div>

          {/* Video Container with Premium Styling */}
          <div className="relative mb-6 sm:mb-8">
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
                src={section.video}
                title={section.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                frameBorder={0}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
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
                {section.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
