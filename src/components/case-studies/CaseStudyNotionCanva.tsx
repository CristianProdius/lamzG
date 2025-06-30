"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  Building2,
  GraduationCap,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudyNotionCanva() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/casestudies"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            How Education-First Funnels Helped Notion and Canva Scale to
            Millions — Without Paid Ads or Cold Outreach
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            A breakdown of how two SaaS companies turned structured learning
            into sustainable customer acquisition — and why B2B SaaS companies
            should take note.
          </motion.p>
        </div>
      </section>

      {/* Combined Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">170M+</p>
              <p className="text-sm text-gray-600">Canva Users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">85%</p>
              <p className="text-sm text-gray-600">Fortune 500</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">125M+</p>
              <p className="text-sm text-gray-600">Monthly Designs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Millions</p>
              <p className="text-sm text-gray-600">Notion Users</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Part 1: Notion */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Part 1: Notion — Growth Through Learning, Not Promotion
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                In a saturated market of productivity tools, Notion didn&apos;t
                outspend competitors — it out-taught them.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                By investing in scalable educational content, Notion empowered
                users to learn, implement, and advocate — without relying on
                demos, discounts, or traditional ads.
              </p>
            </motion.div>

            {/* Notion Strategies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Strategies:
              </h3>

              <div className="space-y-8">
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Market Education First:
                    </h4>
                    <p className="text-gray-600">
                      Courses on YouTube, Skillshare, Udemy, and Notion
                      University gave users instant, frictionless exposure to
                      the product — by solving real organizational problems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      User Empowerment:
                    </h4>
                    <p className="text-gray-600">
                      Notion training focused on how to build systems (e.g.
                      second brains, project dashboards, wikis) — not just how
                      to use the tool.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Creator Ecosystem:
                    </h4>
                    <p className="text-gray-600">
                      Community creators became organic distributors. Certified
                      educators and influencers taught Notion — scaling its
                      reach without internal marketing effort.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Notion Outcomes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Outcomes:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Millions of users acquired through organic education
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Entire ecosystems of creators producing training content
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Extremely high product stickiness: users embedded Notion
                    into workflows and stayed for years
                  </span>
                </div>
              </div>
            </div>

            <Card className="bg-purple-50 border-purple-200 border shadow-md">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-gray-800">
                  Key takeaway for B2B SaaS:
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  Teach workflows, not just features. Help your customers
                  succeed, and your product becomes indispensable.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Part 2: Canva */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Part 2: Canva — Teaching 170M+ Users to Design Without the
                Overwhelm
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Canva didn&apos;t market to designers. It marketed to
                professionals and teams who
                <span className="italic"> needed design outcomes</span> — fast.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Their solution? Education at scale.
              </p>
            </motion.div>

            {/* Canva Strategies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Strategies:
              </h3>

              <div className="space-y-8">
                <Card className="border-l-4 border-pink-600 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Canva Design School:
                    </h4>
                    <p className="text-gray-600">
                      A built-in learning hub delivering free, focused courses
                      on branding, resumes, presentations, social media, and
                      more — tailored for non-designers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-pink-600 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Community-Led Growth:
                    </h4>
                    <p className="text-gray-600">
                      YouTube, Skillshare, and independent creators produced
                      thousands of tutorials and walkthroughs, all driving new
                      users back to Canva.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-pink-600 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Transformation Over Features:
                    </h4>
                    <p className="text-gray-600">
                      Canva wasn&apos;t pitched as &quot;a better design
                      tool.&quot; It was presented as a simple way to
                      <span className="italic"> get real work done</span> — and
                      the courses reinforced that positioning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Canva Outcomes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Outcomes:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    170M+ users globally as of 2024
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Used by 85% of Fortune 500 companies
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    125M+ designs created monthly
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Top organic search term: &quot;How to use Canva&quot;
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    High trial-to-paid conversion rates and exceptional user
                    retention
                  </span>
                </div>
              </div>
            </div>

            <Card className="bg-pink-50 border-pink-200 border shadow-md">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-gray-800">
                  Key takeaway for B2B SaaS:
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  Build an onboarding experience that trains for results. The
                  easier it is for users to get value, the faster they convert
                  and stay.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What This Means */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              What This Means for B2B SaaS Companies
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              SaaS growth isn&apos;t just about product demos or sales decks.
              It&apos;s about education, context, and timing.
            </p>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Here&apos;s what both companies got right:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      They led with customer outcomes
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      They positioned learning as the entry point
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      They built communities around their tools
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      They turned customers into educators and evangelists
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">
              Education-First Growth
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Want to Build a
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Notion/Canva-Style
            </span>
            <br />
            Education Funnel for Your SaaS?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            If your product solves a real business problem, we&apos;ll help you:
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 text-left"
          >
            <div className="flex items-start group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Outcome-Focused Course
                </h4>
                <p className="text-gray-600 text-sm">
                  Design an outcome-focused course around it
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Natural Integration
                </h4>
                <p className="text-gray-600 text-sm">
                  Integrate your product naturally into the learning journey
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Organic Acquisition
                </h4>
                <p className="text-gray-600 text-sm">
                  Acquire qualified users without relying on paid ads
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Education-Led Sales
                </h4>
                <p className="text-gray-600 text-sm">
                  Drive conversions by teaching — not selling
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -top-2 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                <span className="relative flex items-center gap-2">
                  <span className="text-green-300 animate-pulse">●</span>
                  Book a Free Strategy Call
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mt-12 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Proven Framework</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>30-Day Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Full Support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
