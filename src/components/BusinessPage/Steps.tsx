"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, Video, Globe, Rocket } from "lucide-react"; // Lucide icons for each step

const steps = [
  {
    icon: <Brain className="w-7 h-7 text-indigo-500" />,
    title: "1. Strategic Planning & Curriculum Design",
    description: `Before we shoot a single second of footage, we collaborate with you to map out your course’s goals, content structure, and outcomes. This ensures your course aligns with your business model — whether you want to train staff, upsell a product, or convert new leads.`,
  },
  {
    icon: <Video className="w-7 h-7 text-fuchsia-500" />,
    title: "2. Full Production – Shooting & Editing",
    description: `We handle everything from scripting to shooting to editing. You’ll work with a creative director and production team that ensures your course is visually engaging, brand-aligned, and professionally polished. Whether remote or on-site, we adapt to your setup.`,
  },
  {
    icon: <Globe className="w-7 h-7 text-blue-500" />,
    title: "3. Hosting & Delivery",
    description: `We don’t just give you videos — we give you a full course experience. We’ll help you choose the best platform (or integrate with your existing tools), organize your modules, structure the learning journey, and create a frictionless student experience.`,
  },
  {
    icon: <Rocket className="w-7 h-7 text-pink-500" />,
    title: "4. Marketing & Scaling",
    description: `Once your course is live, we’ll help you build a marketing system that actually gets results. From organic content to email automation to sales funnels, we apply the same strategies that have generated thousands of enrollments for our own in-house courses.`,
  },
];

export function WhatWeTakeCareOf() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 tracking-tight text-neutral-800 dark:text-white">
        What we take care of:
      </h2>
      <p className="text-lg md:text-xl text-center text-neutral-600 dark:text-neutral-300 mb-10 max-w-2xl mx-auto font-medium">
        A Complete Done-For-You Solution — Built for Business Results
      </p>
      <p className="text-base md:text-lg text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
        You don’t just need a course. You need a course that serves a purpose —
        and performs. Our team of strategists, writers, videographers, editors,
        and marketers handle every aspect of course creation so you can focus on
        your business.
      </p>
      <Separator className="my-8 mx-auto w-24 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 opacity-60" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <Card
            key={step.title}
            className="
              bg-white/70 dark:bg-neutral-900/70
              backdrop-blur-xl
              border border-transparent
              shadow-[0_8px_32px_0_rgba(31,38,135,0.10)]
              rounded-3xl
              transition-transform
              hover:scale-[1.025]
              hover:shadow-[0_12px_40px_0_rgba(80,0,200,0.12)]
              relative
              overflow-hidden
              p-1
            "
          >
            {/* Gradient Accent Bar */}
            <div
              className={`absolute left-0 top-0 h-2 w-full rounded-t-3xl ${
                idx === 0
                  ? "bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                  : idx === 1
                  ? "bg-gradient-to-r from-fuchsia-400 to-pink-400"
                  : idx === 2
                  ? "bg-gradient-to-r from-blue-400 to-indigo-400"
                  : "bg-gradient-to-r from-pink-400 to-indigo-400"
              }`}
            />
            <CardContent className="pt-8 pb-6 px-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {step.icon}
                <span className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">
                  {step.title}
                </span>
              </div>
              <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
