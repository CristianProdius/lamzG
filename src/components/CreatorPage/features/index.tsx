"use client";
import React from "react";
import Feature from "./feature";
import { Cog, DollarSign, User, Star, Quote } from "lucide-react";

const features = [
  {
    title: "Course Creation",
    description:
      "How to build a course that will make your students stick around for the long term, by doing less & having more fun. This will allow you to scale and create even more",
    icon: <Cog className="w-7 h-7" />,
  },
  {
    title: "Marketplace Sales Automation",
    description:
      "How To Automate Enrollments by Leveraging Search Results of Online Course Marketplaces... Using A Little-Known Secret Absolutely No One But Our Clients Have Their Hands on",
    icon: <DollarSign className="w-7 h-7" />,
  },
  {
    title: "Our 0 ads 0 followers Framework",
    description:
      "How To Create A Plug and Play Sales System That Helps you Skyrocket Your Course Enrollments. This system has personally helped us close over 260+ clients in less than 2 years.",
    icon: <User className="w-7 h-7" />,
  },
];

const Features = () => {
  return (
    <div className="bg-white text-gray-900 px-4 py-12 sm:py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            What You Will Learn in Your
            <span className="block text-purple-600 mt-2">Free Training</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the proven strategies that have helped hundreds of course
            creators build sustainable businesses
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col sm:flex-row gap-6">
          {features.map(({ title, description, icon }) => (
            <Feature
              title={title}
              description={description}
              key={title}
              icon={icon}
            />
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 sm:mt-32">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-5 py-2.5 mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">
                Client Success Story
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Real Results from Real Students
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how our proven system helped Sergio transform his expertise
              into a thriving online business
            </p>
          </div>

          {/* Testimonial Content */}
          <div className="relative">
            {/* Subtle Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-gray-50/50 to-purple-50/50 rounded-3xl blur-3xl"></div>

            <div className="relative bg-white backdrop-blur-sm border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-lg">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Video Container */}
                <div className="lg:col-span-2 mx-auto w-full max-w-sm">
                  <div className="relative">
                    {/* Subtle Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 rounded-3xl blur-xl opacity-50"></div>

                    {/* Video Frame */}
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-300">
                      <div
                        style={{
                          padding: "177.78% 0 0 0",
                          position: "relative",
                        }}
                      >
                        <iframe
                          src="https://player.vimeo.com/video/1083147194?h=c3e67018dc&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                          title="Sergio Testimonial"
                          className="rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-3 text-center lg:text-left">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-purple-200 mb-6 mx-auto lg:mx-0" />

                  {/* Testimonial Text */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-gray-800">
                    &quot;This system completely transformed my business. I went
                    from struggling to get students to having a
                    <span className="text-purple-600 font-bold">
                      {" "}
                      consistent stream of enrollments
                    </span>{" "}
                    without spending a dime on ads.&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-md">
                        S
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg text-gray-900">
                          Sergio
                        </div>
                        <div className="text-gray-600 text-sm">
                          Course Creator & Entrepreneur
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Results Highlights */}
                  <div className="mt-8 grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-green-700">
                        500+
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Enrollments in 1st Month
                      </div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-purple-700">
                        2,470+
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Students Enrolled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vimeo Script */}
      <script src="https://player.vimeo.com/api/player.js" async />
    </div>
  );
};

export default Features;
