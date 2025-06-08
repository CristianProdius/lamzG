"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react"; // Example icon from lucide-react
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
    <div className="relative bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%)]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {sections.map((s) => (
            <div key={s.key} className="flex flex-col gap-4 sm:gap-6">
              {/* Header outside the card */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 px-4">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-100 tracking-wide text-center leading-tight">
                  {s.title}
                </h2>
              </div>

              <Card
                className="
                bg-white/70 dark:bg-neutral-900/70
                backdrop-blur-xl
                border border-transparent
                shadow-[0_8px_32px_0_rgba(31,38,135,0.10)]
                rounded-2xl sm:rounded-3xl
                transition-transform duration-300
                hover:scale-[1.02] sm:hover:scale-[1.025]
                hover:shadow-[0_12px_40px_0_rgba(80,0,200,0.12)]
                relative
                overflow-hidden
                mx-2 sm:mx-0
              "
              >
                {/* Gradient Accent Bar */}
                <div className="absolute left-0 top-0 h-1.5 sm:h-2 w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 rounded-t-2xl sm:rounded-t-3xl" />

                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 pb-0">
                  <div className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-neutral-500 dark:text-neutral-400 font-medium italic text-center sm:text-left leading-relaxed">
                    {s.result}
                  </div>

                  <div
                    className="
                    w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6
                    border border-neutral-200 dark:border-neutral-800
                    shadow-inner
                    bg-gradient-to-br from-neutral-100/60 to-white/80 dark:from-neutral-800/60 dark:to-neutral-900/80
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
                </CardContent>

                <CardFooter className="p-4 sm:p-6 pt-0 flex justify-center">
                  <Link
                    href="/creator"
                    className="w-full sm:w-auto max-w-sm sm:max-w-none"
                  >
                    <Button
                      className="
                      w-full sm:w-auto
                      text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 font-medium sm:font-semibold
                      bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500
                      text-white shadow-lg
                      rounded-lg sm:rounded-xl
                      transition-all duration-200
                      hover:brightness-110 hover:scale-105
                      ring-2 ring-fuchsia-200/40
                      focus:ring-4 focus:ring-pink-300/60
                      active:scale-95
                      h-10 sm:h-12
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
