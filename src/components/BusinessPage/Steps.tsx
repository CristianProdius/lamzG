"use client";

import { Separator } from "@/components/ui/separator";

const images = [
  {
    src: "/1.jpg",
    alt: "Strategic Planning",
    gradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800",
  },
  {
    src: "/2.jpg",
    alt: "Video Production",
    gradient: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-pink-700",
  },
  {
    src: "/3.png",
    alt: "Hosting & Delivery",
    gradient: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700",
  },
  {
    src: "/4.png",
    alt: "Marketing & Scaling",
    gradient: "bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700",
  },
];

export default function WhatWeTakeCareOf() {
  return (
    <div className="relative bg-[linear-gradient(to_top,#000,#200D42_45%,#4f21A1_65%)]">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 tracking-tight text-white">
          What we take care of:
        </h2>
        <p className="text-lg md:text-xl text-center text-neutral-300 mb-10 max-w-2xl mx-auto font-medium">
          A Complete Done-For-You Solution — Built for Business Results
        </p>
        <Separator className="my-8 mx-auto w-24 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 opacity-60" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`
                ${image.gradient}
                relative overflow-hidden rounded-3xl min-h-[350px]
                transform transition-transform duration-300 hover:scale-[1.02]
                shadow-2xl group cursor-pointer
              `}
            >
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>

              {/* Full width image */}
              <div className="relative z-10 h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Image overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Step number overlay */}
                <div className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 bg-white/90 rounded-full backdrop-blur-sm shadow-lg">
                  <span className="text-xl font-bold text-gray-800">
                    {idx + 1}
                  </span>
                </div>
              </div>

              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
