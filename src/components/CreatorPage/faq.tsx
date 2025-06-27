"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const items = [
  {
    question: "What is the goal of the Course Creation Consultation Program?",
    answer:
      "The goal is to help you create a course optimized for profitability, launch it across multiple online course marketplaces, and maximize visibility through search engine optimization. We guide you to scale your courses in these marketplaces and, if desired, host them on your website.",
  },
  {
    question: "Do I need prior experience, a following, or funds for ads?",
    answer:
      "No experience, following, or ad investment is needed! We use organic strategies to help you achieve results.",
  },
  {
    question: "How is the program structured?",
    answer:
      "The program includes three weekly coaching calls, 24/7 private messaging, and optional support from our in-house team for editing, design, and SEO.",
  },
  {
    question: "What results can I expect from this program?",
    answer:
      "Most clients generate sales within the first days on marketplaces, thanks to our optimized approach. We help you maximize reach and long-term profits.",
  },
  {
    question: "Can you help with niche selection and course content?",
    answer:
      "Absolutely. We assist with niche identification, target audience development, and course structuring to align with audience needs and boost enrollments.",
  },
  {
    question: "Will I learn how to market my course without paid ads?",
    answer:
      "Yes, organic marketing is central to our program. We focus on marketplace traffic and growth techniques, making paid advertising unnecessary.",
  },
  {
    question:
      "What if I need additional help with video production or editing?",
    answer:
      "Our program includes optional support from our team for video editing, thumbnail design, and SEO, ensuring your content is polished and professional.",
  },
  {
    question: "How soon can I start seeing results?",
    answer:
      "Results vary, but most clients begin seeing enrollments within a few days of uploading, utilizing marketplace optimization and our community-driven strategies.",
  },
  {
    question:
      "How is this program different from other course creation services?",
    answer:
      "Our approach focuses on organic growth, marketplace automation, and a personalized coaching model, making it accessible for creators at all levels—even with zero followers.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0 group">
      <button
        className="w-full py-6 text-left flex items-center justify-between hover:text-purple-600 transition-colors duration-300"
        onClick={onClick}
      >
        <span className="flex-1 text-lg font-semibold text-gray-900 group-hover:text-purple-600 pr-4 transition-colors">
          {question}
        </span>
        <div
          className={`
          w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
          transition-all duration-300
          ${
            isOpen
              ? "bg-gradient-to-br from-purple-600 to-purple-700 text-white rotate-180"
              : "bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600"
          }
        `}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        <p className="text-gray-600 leading-relaxed pb-6">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-semibold text-purple-700">FAQ</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our course creation program
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="divide-y divide-gray-200">
            {items.map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                question={question}
                answer={answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 lg:p-10 border border-purple-100">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              We are here to help! Schedule a free consultation to discuss your
              course creation journey.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Your Questions Answered →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
