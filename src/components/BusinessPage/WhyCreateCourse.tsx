"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  Users,
  GraduationCap,
  Rocket,
  Smile,
  Headset,
} from "lucide-react"; // Replace with your own SVGs for ultimate polish

const benefits = [
  {
    icon: <TrendingUp className="w-7 h-7 text-indigo-600" />,
    title: "Generate Evergreen Leads",
    description:
      "Use a free or low-ticket course as part of your sales funnel to attract ideal customers.",
  },
  {
    icon: <Users className="w-7 h-7 text-fuchsia-600" />,
    title: "Train Your Employees Internally",
    description:
      "Standardize onboarding, streamline internal processes, and save time with scalable internal training.",
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-blue-600" />,
    title: "Build Industry Authority",
    description:
      "Position your brand as a thought leader with professionally produced, valuable course content.",
  },
  {
    icon: <Rocket className="w-7 h-7 text-pink-600" />,
    title: "Increase Product Adoption",
    description:
      "Use a course to onboard users, reduce in-app friction, and help them realize your product's value faster—boosting retention and engagement.",
  },
  {
    icon: <Smile className="w-7 h-7 text-green-600" />,
    title: "Ensure Customer Success",
    description:
      "Provide self-serve, personalized learning to proactively solve issues, improve satisfaction, and lighten the load on your support team.",
  },
  {
    icon: <Headset className="w-7 h-7 text-yellow-600" />,
    title: "Reduce Support Costs",
    description:
      "Cut down repetitive questions and free up your team for high-level support by educating customers at scale.",
  },
];

export function WhyCreateCourse() {
  return (
    <div className="relative bg-white">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 tracking-tight text-gray-900">
          Why Create a Course for Your Business?
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
          Courses Are More Than Just Content — They&apos;re a Business Growth
          Tool
        </p>
        {/* Visual suggestion placeholder */}
        <div className="flex justify-center mb-12">
          {/* Replace with your custom SVG/illustration for ultimate polish */}
          <div className="flex gap-6">
            <TrendingUp className="w-10 h-10 text-indigo-500" />
            <Rocket className="w-10 h-10 text-pink-500" />
            <Users className="w-10 h-10 text-fuchsia-500" />
            <GraduationCap className="w-10 h-10 text-blue-500" />
          </div>
        </div>
        <Separator className="my-8 mx-auto w-24 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <Card
              key={benefit.title}
              className="
              bg-white
              backdrop-blur-xl
              border border-gray-200
              shadow-lg
              rounded-3xl
              transition-transform
              hover:scale-[1.025]
              hover:shadow-xl
              relative
              overflow-hidden
              p-1
            "
            >
              {/* Gradient Accent Bar */}
              <div
                className={`absolute left-0 top-0 h-2 w-full rounded-t-3xl ${
                  idx % 2 === 0
                    ? "bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                    : "bg-gradient-to-r from-pink-400 to-blue-400"
                }`}
              />
              <CardContent className="pt-8 pb-6 px-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {benefit.icon}
                  <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                    {benefit.title}
                  </span>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
