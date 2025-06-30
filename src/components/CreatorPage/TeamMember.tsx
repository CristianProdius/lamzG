"use client";
import React from "react";
import Image from "next/image";

const TeamMember = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-semibold text-purple-700">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-center text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Meet Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              {" "}
              Operations Expert
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image Section */}
              <div className="relative lg:order-2 flex-shrink-0">
                <div className="relative">
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                  <Image
                    width={300}
                    height={300}
                    src="/lamz.webp"
                    alt="Lambros Lazopoulos - CEO"
                    className="relative w-full max-w-[300px] rounded-2xl shadow-lg"
                  />
                  {/* Purple accent border */}
                  <div className="absolute inset-0 rounded-2xl ring-4 ring-purple-500 ring-opacity-30"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                    CEO & FOUNDER
                  </span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Hi, I&apos;m Lamz 👋
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I&apos;m Lambros Lazopoulos (LAMZ), helping experts turn
                    their knowledge into profitable online courses. With over{" "}
                    <span className="font-semibold text-purple-700">
                      60,000 students worldwide
                    </span>
                    , I&apos;ve built a successful Course Creation Academy that
                    transforms teachers into entrepreneurs.
                  </p>

                  <p className="text-lg">
                    Through proven strategies and direct coaching, I guide
                    creators from marketplace platforms to building their own
                    thriving course businesses.
                  </p>
                </div>

                {/* Stats or achievements */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-purple-700">60K+</p>
                    <p className="text-sm text-gray-600">Students Worldwide</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-purple-700">100+</p>
                    <p className="text-sm text-gray-600">Success Stories</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Learn From My Experience →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Trusted by course creators in
            <span className="font-semibold text-purple-700">
              {" "}
              50+ countries
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
