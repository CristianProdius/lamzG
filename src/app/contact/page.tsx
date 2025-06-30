"use client";

import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Let&apos;s Transform Your Knowledge{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Into A Course
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Schedule a free consultation to discuss your course creation
              journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Benefits */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
                  Why Book A Call With Us?
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Personalized Strategy
                      </h3>
                      <p className="text-gray-600">
                        Get a personalized course creation strategy tailored to
                        your unique expertise and goals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Proven Framework
                      </h3>
                      <p className="text-gray-600">
                        Learn our proven marketplace optimization framework
                        that&apos;s helped launch 30+ successful courses
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Organic Growth
                      </h3>
                      <p className="text-gray-600">
                        Discover how to launch and scale without ads or building
                        a massive following
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Additional trust elements */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-3xl font-bold text-gray-900">30+</p>
                      <p className="text-sm text-gray-600">Courses Launched</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900">112K+</p>
                      <p className="text-sm text-gray-600">Students Taught</p>
                    </div>
                    <div className="text-center sm:text-right">
                      <p className="text-3xl font-bold text-gray-900">168</p>
                      <p className="text-sm text-gray-600">Countries Reached</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[600px] md:h-[700px] transform hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6">
                  <h3 className="text-white text-center text-lg sm:text-xl font-semibold">
                    Book Your Free Strategy Call
                  </h3>
                </div>
                <div className="h-[calc(100%-64px)] sm:h-[calc(100%-88px)]">
                  <InlineWidget
                    url="https://calendly.com/lamz/one-on-one-call"
                    styles={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-gray-600 text-base sm:text-lg mb-4">
              Prefer to reach out directly?
            </p>
            <a
              href="mailto:contact@yourcoursecompany.com"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              lambros@lamzcoursecreation.com
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
