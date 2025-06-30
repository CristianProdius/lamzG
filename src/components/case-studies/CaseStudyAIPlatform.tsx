"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  Clock,
  Award,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudyAIPlatform() {
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
            How One AI Platform Drove Qualified Interest From 400 Professionals
            — In 30 Days, Without Paid Ads
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            An inside look at how education-based content positioned a SaaS tool
            as the go-to solution — without pitching, discounts, or cold
            outreach.
          </motion.p>
        </div>
      </section>

      {/* Key Metrics */}
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
              <p className="text-3xl font-bold text-gray-900">400+</p>
              <p className="text-sm text-gray-600">Learners</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">30</p>
              <p className="text-sm text-gray-600">Days</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Featured</p>
              <p className="text-sm text-gray-600">On Skillshare</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">6</p>
              <p className="text-sm text-gray-600">Lessons</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This case study outlines how we launched a short-form educational
              course to introduce a new SaaS platform — and generated over 400
              engaged learners and qualified leads in the first month.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              No hard selling. No demos. Just education tailored to the
              audience&apos;s real needs.
            </p>
          </div>

          {/* Course Screenshot */}
          <div className="mb-16">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8">
                <Image
                  src="/case-study-ai-platform-overview.png" // Replace with actual image
                  alt="AI Platform course overview"
                  width={800}
                  height={400}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </Card>
          </div>

          {/* The Funnel Framework */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              The Funnel Framework
            </h2>
            <p className="text-lg text-gray-700 font-semibold mb-8">
              Start With Value — Not a Pitch
            </p>

            <div className="space-y-12">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      1. Start With Education
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The course opened with actionable content: &quot;What are
                      AI agents, and how can small businesses use them
                      effectively?&quot;
                    </p>
                    <p className="text-gray-600 mb-6">
                      No sign-up requirements. No pushy product mentions. Just
                      practical insights — which built attention and credibility
                      from day one.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Image
                        src="/case-study-ai-lesson-1.png" // Replace with actual image
                        alt="Course lesson preview"
                        width={600}
                        height={300}
                        className="w-full rounded"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      2. Build Context and Trust
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Across five structured lessons, learners explored
                      real-world use cases, clear technical explanations, and
                      productivity workflows.
                    </p>
                    <p className="text-gray-600 mb-6">
                      The brand wasn&apos;t mentioned — but the problem it
                      solves was clarified and explored in depth.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Image
                        src="/case-study-ai-lessons.png" // Replace with actual image
                        alt="Course lessons structure"
                        width={600}
                        height={300}
                        className="w-full rounded"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      3. Introduce the Platform — After Value Delivery
                    </h3>
                    <p className="text-gray-600 mb-6">
                      In Lesson 6, the platform (Enso) was introduced.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Not as a sales pitch — but as the most logical next step
                      for anyone who now understood what AI agents are and
                      wanted to deploy them.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Image
                        src="/case-study-ai-platform-intro.png" // Replace with actual image
                        alt="Platform introduction"
                        width={600}
                        height={300}
                        className="w-full rounded"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Key Outcomes
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  400+ learners in the first 30 days
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  High engagement scores and positive feedback across platforms
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Platform introduced at the moment of peak clarity (Lesson 6)
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Course featured in &quot;AI & Innovation&quot; on Skillshare
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Lead capture set up to onboard interested users into the
                  ecosystem
                </span>
              </div>
            </div>

            {/* Achievement Badge */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <Image
                  src="/case-study-ai-featured.png" // Replace with actual image
                  alt="Featured on Skillshare"
                  width={800}
                  height={300}
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Why It Worked */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why This Worked (and What It Means for SaaS)
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Trust and understanding were built before the product was ever
                  mentioned
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  The course established the problem, the need, and the urgency
                  — without any pressure
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  The offer was contextual, relevant, and timely
                </span>
              </div>
            </div>

            <Card className="bg-purple-50 border-purple-200 border shadow-md mb-8">
              <CardContent className="p-6">
                <p className="text-lg text-gray-800 font-medium text-center italic">
                  &quot;It didn&apos;t feel like a funnel. It felt like
                  learning.&quot;
                </p>
              </CardContent>
            </Card>

            <p className="text-lg text-gray-700 mb-4">
              If you&apos;re building a product that&apos;s solving a real
              problem — but struggling to cut through the noise — this strategy
              creates a scalable education channel that converts.
            </p>
            <p className="text-lg text-gray-700">
              It&apos;s not just about signups. It&apos;s about signups that{" "}
              <span className="italic">stick</span> — because they understand
              the &quot;why&quot; behind your product.
            </p>
          </div>

          {/* Student Screenshots */}
          <div className="mb-16 grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-gray-50 p-6">
                <Image
                  src="/case-study-ai-student-1.png" // Replace with actual image
                  alt="Student dashboard"
                  width={400}
                  height={300}
                  className="w-full rounded"
                />
              </div>
            </Card>
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-gray-50 p-6">
                <Image
                  src="/case-study-ai-student-2.png" // Replace with actual image
                  alt="Student feedback"
                  width={400}
                  height={300}
                  className="w-full rounded"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white"></div>

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
            <span className="text-sm font-semibold">For SaaS Platforms</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Want to Explore This For
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Platform?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            If you&apos;re in SaaS — and looking to acquire better-qualified
            users while building brand equity through education —
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-medium text-gray-900 mb-12 max-w-3xl mx-auto"
          >
            We can help build a tailored course-based funnel that aligns with
            your ICP, ACV, and user journey.
          </motion.p>

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
                  Book a Strategy Call
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
              <span>Tailored Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>ICP Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>ROI Driven</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
