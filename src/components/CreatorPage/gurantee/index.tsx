"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TrendingUp, Target, Rocket, Zap, Gem } from "lucide-react";

interface GuaranteeProps {
  onOpenModal: () => void;
}

const Guarantee = ({ onOpenModal }: GuaranteeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cards = [
    {
      title: "Start Scaling Your Course Empire",
      isHeading: true,
    },
    {
      text: "Most course creators don't realize how much revenue potential is lost through inefficient course creation and marketing systems.",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    },
    {
      text: "They waste time and resources on scattered tactics that don't address the fundamental issues—leaving them stuck with low enrollments and unable to scale their course business. Course Creation Academy changes that.",
      icon: <Target className="w-8 h-8 text-purple-600" />,
    },
    {
      text: "We go well beyond basic course creation: we transform your entire educational business infrastructure.",
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
    },
    {
      text: "From content development to student acquisition and engagement, our proven framework revolutionizes how your online course business performs.",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
    },
    {
      text: "Win back your time, maximize your impact, and unlock sustainable course income.",
      icon: <Gem className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="container mx-auto max-w-7xl relative" ref={ref}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`mb-8 ${card.isHeading ? "" : "max-w-4xl mx-auto"}`}
          >
            {card.isHeading ? (
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <div className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                    Transform Your Business
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                  Start Scaling Your
                  <span className="block text-purple-600 mt-2">
                    Course Empire
                  </span>
                </h2>
                <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the system that is helping course creators build
                  sustainable, scalable businesses
                </p>
              </div>
            ) : (
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                      {card.icon}
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: cards.length * 0.15 }}
          className="mt-16 text-center"
        >
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-12 max-w-3xl mx-auto border border-purple-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Course Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of successful course creators who have scaled their
              impact and income
            </p>
            <button
              onClick={onOpenModal}
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg sm:text-xl py-4 px-8 sm:py-5 sm:px-10 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Watch Free Training</span>
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required • Instant access
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guarantee;
