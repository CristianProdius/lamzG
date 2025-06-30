"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  MousePointer,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudy594Customers() {
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
            How We Turned an Educational Course Into 594 Customers — Without Ad
            Spend
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            A breakdown of a value-led funnel that outperformed traditional
            content by 9.5x — and converted cold traffic into qualified leads
            and buyers.
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
              <p className="text-3xl font-bold text-gray-900">3,788</p>
              <p className="text-sm text-gray-600">Enrolled Students</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <MousePointer className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">40%</p>
              <p className="text-sm text-gray-600">CTR to Paid Asset</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">26.8%</p>
              <p className="text-sm text-gray-600">Conversion Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Email Capture</p>
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
              This case study outlines how we transformed a straightforward
              educational course into a repeatable, high-performing customer
              acquisition system — one that reached over 3,700 individuals and
              converted nearly 600 into paying users, without relying on paid
              ads.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              We&apos;ll walk you through the structure, the thinking behind it,
              and how this same framework can be applied to SaaS customer
              acquisition.
            </p>
          </div>

          {/* Funnel Visualization */}
          <div className="mb-16">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8">
                <Image
                  src="/case-study-funnel-graph.png" // Replace with actual image
                  alt="Funnel performance graph"
                  width={800}
                  height={300}
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
                      1. Lead With Education — Not a Pitch
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The course delivered practical, tool-based education (AI
                      for content creation). No sales messaging upfront. Just
                      real solutions to a real problem.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Image
                        src="/case-study-lesson-preview.png" // Replace with actual image
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
                      2. Build Authority Over Time
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Over 5 structured lessons, students were introduced to
                      real-world workflows, prompts, and use cases. This built
                      trust and positioned the brand as a solution expert — not
                      just another seller.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Image
                        src="/case-study-workflow.png" // Replace with actual image
                        alt="Course workflow"
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
                      3. Present the Offer When It Makes Sense
                    </h3>
                    <p className="text-gray-600">
                      Only after value was delivered and trust established, we
                      introduced a paid asset — a comprehensive prompt list. By
                      that point, students had the context and the need. The
                      offer was logical, not intrusive.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Results Deep Dive */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Results
            </h2>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-5xl font-bold text-purple-600 mb-2">
                      594
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                      Purchases Generated
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-purple-600 mb-2">
                      9.5x
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                      Better Than Organic YouTube
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    3,788 enrolled students
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    40% clicked through to the paid asset
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    594 purchases (26.8% CVR)
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    100% of leads captured via email for future touchpoints
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">
                    9.5x better performance vs. organic YouTube funnel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Funnel Diagram */}
          <div className="mb-16">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-gray-50 p-8">
                <Image
                  src="/case-study-funnel-diagram.png" // Replace with actual image
                  alt="Sales funnel visualization"
                  width={800}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>
            </Card>
          </div>

          {/* Why It Worked */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why It Worked (And Why It&apos;s Relevant to SaaS)
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Trust was built before any offer was made
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  The upsell was a direct extension of the value already
                  received
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  The educational content positioned the product as a natural
                  solution
                </span>
              </div>
            </div>

            <Card className="bg-purple-50 border-purple-200 border shadow-md">
              <CardContent className="p-6">
                <p className="text-lg text-gray-800 font-medium text-center italic">
                  &quot;It wasn&apos;t a funnel. It was a guided
                  experience.&quot;
                </p>
              </CardContent>
            </Card>
          </div>

          {/* B2B SaaS Application */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For B2B SaaS Teams:
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  If your product solves a clear problem, this strategy builds
                  trust at scale — and converts learners into buyers with
                  significantly less friction.
                </p>
                <p className="text-lg text-gray-700">
                  Whether your ACV is $1,000 or $20,000, your buyers still need
                  to understand
                  <span className="italic"> why</span> your product matters
                  before they convert. Teaching them is the most effective path.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
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
            <span className="text-sm font-semibold">Ready to Scale?</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Want to See How This Can
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work for You?
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
            If you&apos;re a SaaS company looking to increase customer
            acquisition without scaling ad budgets —
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl font-medium text-gray-900 mb-12 max-w-3xl mx-auto"
          >
            We&apos;ll help you build an education-based funnel that fits your
            ICP, messaging, and revenue model.
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
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>30-Minute Call</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No Commitment</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
