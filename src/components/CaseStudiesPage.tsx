"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Award,
  BarChart3,
  Rocket,
  LineChart,
  ArrowUpRight,
  Play,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

// Bento Grid Component
type BentoGridProps = {
  className?: string;
  children: React.ReactNode;
};
const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

// Bento Grid Item Component
type BentoGridItemProps = {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
  href: string;
};
const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: BentoGridItemProps) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "row-span-1 group relative overflow-hidden rounded-3xl p-0 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full",
          className
        )}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>

        {/* Inner Container */}
        <div className="relative h-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 group-hover:border-transparent transition-colors duration-300 overflow-hidden">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Content Container */}
          <div className="relative h-full flex flex-col p-6">
            {/* Header Section */}
            <div className="mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4">
              {header}
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-300">
                      {icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Case Study
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Read Full Story</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Skeleton Components for Case Studies
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[10rem] flex-col space-y-3 p-4"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-purple-200/50 dark:border-purple-800/30 p-3 items-center space-x-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shrink-0 shadow-lg" />
        <div className="w-full bg-gradient-to-r from-purple-100 to-pink-100 h-3 rounded-full dark:from-purple-900/30 dark:to-pink-900/30" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-blue-200/50 dark:border-blue-800/30 p-3 items-center space-x-3 w-3/4 ml-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm"
      >
        <div className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 h-3 rounded-full dark:from-blue-900/30 dark:to-cyan-900/30" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shrink-0 shadow-lg" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-green-200/50 dark:border-green-800/30 p-3 items-center space-x-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 shrink-0 shadow-lg" />
        <div className="w-full bg-gradient-to-r from-green-100 to-emerald-100 h-3 rounded-full dark:from-green-900/30 dark:to-emerald-900/30" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2, repeat: Infinity },
    },
  };
  const arr = new Array(5).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[10rem] flex-col space-y-3 p-4 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-purple-300/20 blur-3xl"></div>

      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="relative flex flex-row rounded-2xl p-3 bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-purple-100/80 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-purple-900/30 backdrop-blur-sm shadow-sm border border-white/50 dark:border-gray-800/50 w-full h-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl animate-pulse"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[10rem] rounded-2xl flex-col relative overflow-hidden shadow-inner"
      style={{
        background:
          "linear-gradient(-45deg, #9333ea, #ec4899, #8b5cf6, #d946ef, #9333ea)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* Center Content */}
      <motion.div className="h-full w-full rounded-2xl flex items-center justify-center relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
          <Play className="h-16 w-16 text-white relative z-10 drop-shadow-2xl" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/50 rounded-full animate-bounce animation-delay-4000"></div>
      </motion.div>
    </motion.div>
  );
};

/*const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5, scale: 0.9 },
    hover: { x: 0, rotate: 0, scale: 1 },
  };
  const second = {
    initial: { x: -20, rotate: 5, scale: 0.9 },
    hover: { x: 0, rotate: 0, scale: 1 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[10rem] flex-row space-x-3 p-4"
    >
      <motion.div
        variants={first}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full w-1/3 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-4 border border-purple-200/50 dark:border-purple-800/30 shadow-lg flex flex-col items-center justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl mb-3 transform group-hover:rotate-12 transition-transform">
          <span className="text-white font-bold text-lg">1</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">
          Course Creation
        </p>
        <div className="mt-3 px-3 py-1 bg-purple-500/10 rounded-full">
          <p className="text-xs font-medium text-purple-700 dark:text-purple-300">
            Foundation
          </p>
        </div>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4 border border-green-200/50 dark:border-green-800/30 shadow-xl flex flex-col items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"></div>
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-xl mb-3 transform group-hover:rotate-12 transition-transform">
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">
          Funnel Building
        </p>
        <div className="mt-3 px-3 py-1 bg-green-500/10 rounded-full">
          <p className="text-xs font-medium text-green-700 dark:text-green-300">
            Conversion
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={second}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full w-1/3 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-4 border border-blue-200/50 dark:border-blue-800/30 shadow-lg flex flex-col items-center justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl mb-3 transform group-hover:rotate-12 transition-transform">
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">
          Scale & Grow
        </p>
        <div className="mt-3 px-3 py-1 bg-blue-500/10 rounded-full">
          <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
            Expansion
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[10rem] items-center justify-center p-4">
      <div className="grid grid-cols-2 gap-4 w-full">
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 dark:from-purple-950 dark:via-purple-900 dark:to-pink-950 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/30 shadow-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            9.5x
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Performance
          </p>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-cyan-950 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/30 shadow-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            26.8%
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Conversion
          </p>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
        </motion.div>
      </div>
    </div>
  );
};*/

// Case Studies Data
const items = [
  {
    title: "594 Customers Without Ad Spend",
    description: (
      <span className="text-sm">
        Educational course outperformed traditional content by 9.5x and
        converted cold traffic.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <Rocket className="h-4 w-4 text-purple-500" />,
    href: "/casestudies/594-customers-no-ads",
  },
  {
    title: "400 Professionals in 30 Days",
    description: (
      <span className="text-sm">
        Education-based content positioned a SaaS tool without pitching or
        discounts.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Award className="h-4 w-4 text-purple-500" />,
    href: "/casestudies/ai-platform-400-professionals",
  },
  {
    title: "Scaling to 170M+ Users",
    description: (
      <span className="text-sm">
        How Notion and Canva turned structured learning into customer
        acquisition.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <BarChart3 className="h-4 w-4 text-purple-500" />,
    href: "/casestudies/notion-canva-education-funnels",
  },
  /*{
    title: "Education-First Sales Engine",
    description: (
      <span className="text-sm">
        Smartlead.ai's teaching approach acquired high-value B2B customers
        without ads or SDRs.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Zap className="h-4 w-4 text-purple-500" />,
    href: "/casestudies/smartlead-cold-email",
  },
   {
    title: "The Power of Value-Led Funnels",
    description: (
      <span className="text-sm">
        Discover our proven methodology for building education-first acquisition
        systems.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <BookOpen className="h-4 w-4 text-purple-500" />,
    href: "/methodology",
  }, */
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Case Studies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tighter"
          >
            Real Results from
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education-First Funnels
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how we&apos;ve helped SaaS companies build scalable
            customer acquisition systems through strategic education.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12"
          >
            {[
              {
                value: "170M+",
                label: "Users Reached",
                color: "from-purple-600 to-pink-600",
              },
              {
                value: "$0",
                label: "Ad Spend",
                color: "from-blue-600 to-cyan-600",
              },
              {
                value: "9.5x",
                label: "Performance",
                color: "from-green-600 to-emerald-600",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <p
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Bento Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each case study represents a unique journey of transformation
              through education-first strategies
            </p>
          </motion.div>

          <BentoGrid className="max-w-7xl mx-auto">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={cn("[&>p:text-lg]", item.className)}
                  icon={item.icon}
                  href={item.href}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
              Cumulative Impact
            </h2>
            <p className="text-xl text-gray-600">
              The combined results across all our case studies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "170M+",
                label: "Total Users Reached",
                icon: <Users className="w-5 h-5" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "$0",
                label: "Ad Spend Required",
                icon: <Target className="w-5 h-5" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                value: "26.8%",
                label: "Average Conversion",
                icon: <TrendingUp className="w-5 h-5" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                value: "9.5x",
                label: "Performance vs Traditional",
                icon: <LineChart className="w-5 h-5" />,
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform`}
                >
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-white text-gray-900 py-[72px] text-center sm:py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
            Ready to Create a Course That Grows Your Business?
          </h2>

          <Link href="https://calendly.com/lamz/one-on-one-call">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105 mt-12 shadow-lg hover:shadow-xl">
              <span>Let&apos;s talk about what&apos;s possible.</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
