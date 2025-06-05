import React from "react";
import CourseRevenueCalculator from "./calculator";

type StatsCardProps = {
  number: string;
  label: string;
  description: string;
};

const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label,
  description,
}) => (
  <div className="group relative overflow-hidden rounded-xl border bg-white/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 dark:bg-gray-900/50 dark:border-gray-800">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-950/20 dark:to-purple-950/20"></div>
    <div className="relative">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
        {label}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        {description}
      </div>
    </div>
  </div>
);

const PremiumStatsComponent = () => {
  const stats = [
    {
      number: "100+",
      label: "Courses Produced",
      description: "High-quality educational content",
    },
    {
      number: "112,000+",
      label: "Students Enrolled",
      description: "Learners worldwide",
    },
    {
      number: "168",
      label: "Countries Reached",
      description: "Global impact",
    },
    {
      number: "23",
      label: "Different Niches",
      description: "Diverse expertise areas",
    },
  ];

  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#200D42_45%,#4f21A1_65%,#a46edb_82%)] pt-4">
      <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center font-sans font-bold leading-[1.3]">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming education across the globe with innovative course
            creation services
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <span>Trusted by educators worldwide</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>
      <CourseRevenueCalculator />
    </div>
  );
};

export default PremiumStatsComponent;
