"use client";
import React, { useRef } from "react";
import { Check } from "lucide-react";

// Create a reusable card component with subtle hover effect
const ProfessionalCard = ({
  children,
  className,
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative border ${
        highlight
          ? "border-purple-200 bg-gradient-to-br from-purple-50 to-white"
          : "border-gray-200 bg-white"
      } rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-purple-300 overflow-hidden ${className}`}
    >
      {/* Subtle gradient follow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.05), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface IncludedSectionProps {
  onOpenModal: () => void;
}

const IncludedSection = ({ onOpenModal }: IncludedSectionProps) => {
  const features = [
    "Set proper foundations in your course creation business.",
    "Combine your passion and expertise with a profitable niche & create an in-demand course.",
    "Get accepted in online course marketplaces with our proven framework.",
    "Leverage course marketplace organic traffic to bring steady enrollments to your courses",
    "Build courses that circulate students to other digital products of yours to create an evergreen business",
    "Learn when and how to move your course to your own website and increase profit margins",
    "Systemise your business & deliver kickass results.",
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-semibold text-purple-700">
              COMPREHENSIVE PROGRAM
            </span>
          </div>
          <h2 className="text-center text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Here&apos;s What You Get in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              The Program
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl">
            Everything you need to build, launch, and scale your online course
            business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <ProfessionalCard key={index} className="p-6 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-full p-1.5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {feature}
                  </p>
                </div>
              </ProfessionalCard>
            ))}
          </div>

          <div className="space-y-6 lg:sticky lg:top-8">
            <ProfessionalCard className="p-8" highlight={true}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  The Endgame?
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                You build an online course business that scales easily & you
                become a successful entrepreneur by teaching thousands of people
                the things you love.
              </p>
            </ProfessionalCard>

            <ProfessionalCard className="p-8" highlight={true}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What are you waiting for?
                </h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We guarantee that we will not stop working with you until you
                see results, so it&apos;s risk-free. Students get 3+ 1-on-1
                weekly coaching calls & access to a bustling course creation
                community.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                If you want to transform your online course business from a
                source of pain/struggle to a source of pleasure/freedom,
                Schedule A Call.
              </p>
            </ProfessionalCard>

            <button
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              onClick={onOpenModal}
            >
              Watch Free Training
              <span className="text-xl">→</span>
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                No credit card required • 100% Risk-Free
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
