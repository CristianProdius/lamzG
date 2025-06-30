"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  DollarSign,
  HeadphonesIcon,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudySmartlead() {
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
            How Smartlead.ai Turned Cold Email Education Into a Scalable SaaS
            Sales Engine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 font-medium"
          >
            A case report on how one B2B SaaS company used teaching—not
            selling—to acquire high-value customers without ads, SDRs, or
            discounts.
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
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Explosive</p>
              <p className="text-sm text-gray-600">Organic Growth</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <DollarSign className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Lower</p>
              <p className="text-sm text-gray-600">CAC</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <DollarSign className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Higher</p>
              <p className="text-sm text-gray-600">LTV</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-gray-900">Reduced</p>
              <p className="text-sm text-gray-600">Support Volume</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Context */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Context
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Smartlead.ai is a cold email automation platform designed for
              agencies and B2B sales teams. Competing in a saturated space—with
              tools like Lemlist, Instantly, and Mailshake—Smartlead didn&apos;t
              win by shouting louder. It won by teaching better.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rather than pushing demos or chasing MQLs with paid ads, Smartlead
              invested in
              <span className="font-semibold">
                {" "}
                strategic, educational content
              </span>{" "}
              that walked its ideal customers through the exact process of doing
              cold outreach right — and positioned the tool as the natural next
              step.
            </p>
          </div>

          {/* Key Assets */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Key Assets in Their Education Funnel
            </h2>

            <div className="space-y-12">
              {/* Asset 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Free Cold Email Training
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A series of short-form video tutorials and written guides
                      covering:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        Email warm-up strategies
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        Deliverability best practices
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        Domain rotation & inbox scaling
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        Real-life cold email workflows for agencies and lead-gen
                        teams
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      These were published on their website, community, YouTube,
                      and distributed in onboarding emails.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Asset 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      No-Hard-Sell Positioning
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Rather than pushing Smartlead early, their content focused
                      on solving actual bottlenecks their users face — like
                      emails landing in spam or domain blocks.
                    </p>
                    <p className="text-gray-600">
                      Only <span className="italic">after</span> value was
                      delivered did they position Smartlead as:
                    </p>
                    <Card className="bg-purple-50 border-purple-200 border mt-4">
                      <CardContent className="p-4">
                        <p className="text-gray-800 font-medium text-center">
                          &quot;The platform that lets you execute what you just
                          learned — at scale.&quot;
                        </p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Asset 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-purple-600 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Creator & Partner Ecosystem
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Smartlead encouraged power users, influencers, and sales
                      coaches to create courses, walkthroughs, and comparison
                      content.
                    </p>
                    <p className="text-gray-600">
                      This grassroots strategy multiplied exposure without paid
                      promotion — a tactic reminiscent of Canva and Notion.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* What Happened Next */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              What Happened Next
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Explosive Organic Growth
                  </h3>
                  <p className="text-gray-700">
                    Smartlead became a top choice for cold outreach by
                    word-of-mouth, educational SEO, and creator-led video
                    content.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Lower CAC, Higher LTV
                  </h3>
                  <p className="text-gray-700">
                    New users arrived pre-educated. They signed up faster,
                    activated quicker, and needed less handholding.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Support Volume Decreased
                  </h3>
                  <p className="text-gray-700">
                    Pre-recorded education reduced onboarding friction and made
                    new users feel in control.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Power Users Became Distributors
                  </h3>
                  <p className="text-gray-700">
                    Sales agencies and outreach coaches built their services
                    around Smartlead — bringing clients with them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Key Takeaways for SaaS Founders
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Smartlead didn&apos;t rely on high-pressure funnels or outbound
              SDRs.
            </p>

            <Card className="bg-purple-50 border-purple-200 border shadow-md mb-8">
              <CardContent className="p-6">
                <p className="text-xl text-gray-800 font-medium text-center">
                  They <span className="font-bold">educated the market</span>,
                  and the market rewarded them.
                </p>
              </CardContent>
            </Card>

            <p className="text-lg text-gray-700 font-semibold mb-4">
              Here&apos;s what you can learn from their approach:
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700">
                  Teach workflows, not features
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700">
                  Let the product be the &quot;how&quot; — not the hook
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700">
                  Use short-form education to build clarity and trust
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                <span className="text-gray-700">
                  Turn your users into teachers
                </span>
              </div>
            </div>
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
            <span className="text-sm font-semibold">Start Building Today</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Want to Build an
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education Funnel
            </span>
            <br />
            for Your SaaS?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            If your platform solves a real business problem, I can help you
            design a
            <span className="font-semibold text-gray-900 bg-gradient-to-r from-purple-100 to-pink-100 px-2 py-1 rounded-md mx-1">
              course-powered acquisition strategy
            </span>
            that drives signups, builds trust, and reduces churn — without
            relying on ads or cold emails.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-12"
          >
            Let&apos;s build your
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              education engine
            </span>
            .
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

                <span className="relative">Book a Free Strategy Call</span>
              </Button>
            </Link>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-900">More Signups</p>
              <p className="text-xs text-gray-500">Quality users</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-900">Build Trust</p>
              <p className="text-xs text-gray-500">Authentic connection</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-900">Reduce Churn</p>
              <p className="text-xs text-gray-500">Engaged users</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
