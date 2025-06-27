import React, { useRef, useEffect, useState } from "react";

const OnlineEducationGraph = () => {
  const data = [
    { year: "2022", revenue: 185.2 },
    { year: "2023", revenue: 205.4 },
    { year: "2024", revenue: 250.6 },
    { year: "2025", revenue: 290.8 },
    { year: "2027", revenue: 350.2 },
    { year: "2030", revenue: 475.0 },
  ];
  const maxRevenue = 500;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-semibold text-purple-700">
              MARKET INSIGHTS
            </span>
          </div>
          <h2 className="text-center text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            The Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              {" "}
              Online Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl">
            The online education market is experiencing unprecedented growth,
            creating massive opportunities for course creators
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-5xl mx-auto p-8 bg-white border border-gray-200 rounded-2xl shadow-xl"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Online Education Market Revenue Worldwide
            </h3>
            <p className="text-sm text-gray-500">Revenue in billion US$</p>
          </div>

          <div className="relative h-96">
            {/* Y-axis */}
            <div className="absolute left-0 h-full w-12 flex flex-col justify-between text-sm text-gray-500 font-medium">
              <span>$500B</span>
              <span>$400B</span>
              <span>$300B</span>
              <span>$200B</span>
              <span>$100B</span>
              <span>$0</span>
            </div>

            {/* Grid lines */}
            <div className="absolute left-12 right-0 h-full">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="absolute w-full border-t border-gray-100"
                  style={{ top: `${(i / 5) * 100}%` }}
                />
              ))}
            </div>

            {/* Graph Area - SVG Line Chart */}
            <div className="relative ml-12 h-full w-[calc(100%-3rem)]">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="purpleGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#9333ea"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>

                {/* Area under the line */}
                <path
                  d={`
                    M 0 ${100 - (data[0].revenue / maxRevenue) * 100}
                    ${data
                      .map((item, index) => {
                        const x = (index / (data.length - 1)) * 100;
                        const y = 100 - (item.revenue / maxRevenue) * 100;
                        return `L ${x} ${y}`;
                      })
                      .join(" ")}
                    L 100 100
                    L 0 100
                    Z
                  `}
                  fill="url(#purpleGradient)"
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Line */}
                <path
                  d={`
                    M 0 ${100 - (data[0].revenue / maxRevenue) * 100}
                    ${data
                      .map((item, index) => {
                        const x = (index / (data.length - 1)) * 100;
                        const y = 100 - (item.revenue / maxRevenue) * 100;
                        return `L ${x} ${y}`;
                      })
                      .join(" ")}
                  `}
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  className={`transition-all duration-2000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    strokeDasharray: isVisible ? "0" : "1000",
                    strokeDashoffset: isVisible ? "0" : "1000",
                    transition: "stroke-dashoffset 2s ease-in-out",
                  }}
                />

                {/* Data points */}
                {data.map((item, index) => (
                  <g key={item.year}>
                    <circle
                      cx={`${(index / (data.length - 1)) * 100}`}
                      cy={`${100 - (item.revenue / maxRevenue) * 100}`}
                      r={hoveredPoint === index ? "2" : "1.5"}
                      fill="#7c3aed"
                      stroke="white"
                      strokeWidth="2"
                      className={`cursor-pointer transition-all duration-300 ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${2000 + index * 100}ms`,
                      }}
                      onMouseEnter={() => setHoveredPoint(index)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />

                    {/* Hover tooltip */}
                    {hoveredPoint === index && (
                      <g>
                        <rect
                          x={`${(index / (data.length - 1)) * 100 - 10}`}
                          y={`${100 - (item.revenue / maxRevenue) * 100 - 12}`}
                          width="20"
                          height="8"
                          fill="#7c3aed"
                          rx="1"
                        />
                        <text
                          x={`${(index / (data.length - 1)) * 100}`}
                          y={`${100 - (item.revenue / maxRevenue) * 100 - 6}`}
                          fill="white"
                          fontSize="3"
                          textAnchor="middle"
                          className="font-bold"
                        >
                          ${item.revenue}B
                        </text>
                      </g>
                    )}
                  </g>
                ))}
              </svg>

              {/* Value labels on points */}
              <div className="absolute inset-0">
                {data.map((item, index) => (
                  <div
                    key={item.year}
                    className={`absolute text-sm font-semibold text-purple-700 transition-all duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      left: `${(index / (data.length - 1)) * 100}%`,
                      top: `${100 - (item.revenue / maxRevenue) * 100 - 8}%`,
                      transform: "translateX(-50%)",
                      transitionDelay: `${2000 + index * 100}ms`,
                    }}
                  >
                    ${item.revenue}B
                  </div>
                ))}
              </div>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-12 right-0 flex justify-between text-sm text-gray-600 font-medium">
              {data.map((item) => (
                <span key={item.year}>{item.year}</span>
              ))}
            </div>
          </div>

          {/* Growth indicator */}
          <div className="mt-8 flex items-center justify-between p-4 bg-purple-50 rounded-xl">
            <div>
              <p className="text-sm text-gray-600">
                Total Market Growth (2022-2030)
              </p>
              <p className="text-2xl font-bold text-purple-700">+156%</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Projected Market Value by 2030
              </p>
              <p className="text-2xl font-bold text-purple-700">$475 Billion</p>
            </div>
          </div>
        </div>

        {/* Additional insight */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With the online education market set to reach{" "}
            <span className="font-semibold text-purple-700">
              $475 billion by 2030
            </span>
            , there has never been a better time to launch your online course
            business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineEducationGraph;
