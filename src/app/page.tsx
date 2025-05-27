"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      <HeroHighlight className="pb-8 md:pb-16">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-tight md:leading-relaxed lg:leading-snug text-center mx-auto"
        >
          We Turn Knowledge Into <br className="hidden sm:block" />
          <Highlight className="text-black dark:text-white">
            Scalable Digital Products.
          </Highlight>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 0.2,
          }}
          className="mt-4 md:mt-6 text-base px-4 md:text-lg lg:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-400 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-center leading-relaxed"
        >
          Whether you&apos;re a business or a creator — we build and launch
          world-class online courses that sell, scale, and transform lives.
        </motion.p>
      </HeroHighlight>

      {/* Fade Transition Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none"
      />

      {/* Cards Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 -mt-16 md:-mt-24 lg:-mt-32"
      >
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pb-12 md:pb-20">
          <motion.div variants={cardVariants}>
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[28rem] md:w-[30rem] lg:w-[32rem] xl:w-[34rem] h-auto rounded-xl p-4 md:p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  🎯 I’m a Creator
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300 leading-relaxed"
                >
                  Join the Course Creation Academy →
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-8 md:mt-12 lg:mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-3 md:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs md:text-sm font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>

          <motion.div variants={cardVariants}>
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[28rem] md:w-[30rem] lg:w-[32rem] xl:w-[34rem] h-auto rounded-xl p-4 md:p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
                >
                  🏢 I’m a Business
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300 leading-relaxed"
                >
                  Explore B2B Course Creation Services →
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="1000"
                    width="1000"
                    className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="collaboration"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-8 md:mt-12 lg:mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-3 md:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs md:text-sm font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  >
                    Get Started
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
