"use client";
import React from "react";
import Feature from "./feature";
import { Cog, DollarSign, User, Star, Quote } from "lucide-react";

const features = [
  {
    title: "Course Creation",
    description:
      "How to build a course that will make your students stick around for the long term, by doing less & having more fun. This will allow you to scale and create even more",
    icon: <Cog className="w-6 h-6" />,
  },
  {
    title: "Marketplace Sales Automation",
    description:
      "How To Automate Enrollments by Leveraging Search Results of Online Course Marketplaces... Using A Little-Known Secret Absolutely No One But Our Clients Have Their Hands on",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Our 0 ads 0 followers Framework",
    description:
      "How To Create A Plug and Play Sales System That Helps you Skyrocket Your Course Enrollments. This system has personally helped us close over 260+ clients in less than 2 years.",
    icon: <User className="w-6 h-6" />,
  },
];

const Features = () => {
  return (
    <div className="text-white px-4 py-8 sm:py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter">
          What you Will Learn on your Free Training
        </h2>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-blue-300">
                CLIENT SUCCESS STORY
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Real Results from Real Students
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how our proven system helped Sergio transform his expertise
              into a thriving online business
            </p>
          </div>

          {/* Testimonial Content */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-6 sm:p-12">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Video Container */}
                <div className="lg:col-span-2 mx-auto w-full max-w-sm">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>

                    {/* Video Frame */}
                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
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
                  <Quote className="w-12 h-12 text-blue-400/60 mb-6 mx-auto lg:mx-0" />

                  {/* Testimonial Text */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                    &quot;This system completely transformed my business. I went
                    from struggling to get students to having a
                    <span className="text-blue-400 font-bold">
                      {" "}
                      consistent stream of enrollments
                    </span>{" "}
                    without spending a dime on ads.&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                        S
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg">Sergio</div>
                        <div className="text-gray-400 text-sm">
                          Course Creator & Entrepreneur
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 px-3 py-1.5 rounded-full border border-yellow-600/30">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Results Highlights */}
                  <div className="mt-8 grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="bg-green-600/10 border border-green-600/30 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-400">
                        500+
                      </div>
                      <div className="text-sm text-gray-400">
                        Enrollments in 1st Month
                      </div>
                    </div>
                    <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-400">
                        2470+
                      </div>
                      <div className="text-sm text-gray-400">
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
