"use client";
import React from "react";
import {
  Settings,
  Users,
  Puzzle,
  Brain,
  BarChart3,
  UserPlus,
  Clock,
  Globe,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const successStories = [
  {
    videoId: "1052300064",
    achievement: "From 0 to 7,920+ Students in Just 3 Months",
    thumbnail: "/thumbnail1.webp",
  },
  {
    videoId: "1052300098",
    achievement: "$1000/M WITHOUT SHOWING MY FACE",
    thumbnail: "/thumbnail2.webp",
  },
  {
    videoId: "1052300130",
    achievement: "SET IT & FORGET IT",
    thumbnail: "/thumbnail3.webp",
  },
];

const features = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Course Creation Framework",
    description:
      "Streamline your course creation process with our proven A-Class system.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Support Team",
    description:
      "We do course creation better than anyone else. You are in good hands",
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "Platform Integration",
    description:
      "Whatever platform you need connected, we will configure and optimize it.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Marketing",
    description:
      "Intelligently nurture new students with automated email & social flows.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Sales System",
    description:
      "Close more students with your own streamlined enrollment workflow.",
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Student Onboarding",
    description:
      "Frictionless onboarding that sets the tone for course success.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Progress Tracking",
    description: "Automated student dashboard that eliminates manual tracking.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Market Intelligence",
    description: "Automated updates on every metric in your course business.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data-Driven Growth",
    description:
      "Access accurate data to make well-informed scaling decisions.",
  },
];

const VimeoEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="video"
      />
    </div>
  );
};

const SuccessSection = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white to-white px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Success Stories Section */}
        <div className="pb-32">
          <div className="py-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8 transition-all duration-300 hover:bg-purple-200">
                <span className="text-sm font-semibold text-purple-700">
                  ✨ SUCCESS STORIES
                </span>
              </div>
              <h3 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Recent Results We&apos;ve Achieved For
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  Creators & Freelancers
                </span>{" "}
                Just Like You
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="group transition-all duration-300">
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-1">
                      <div className="bg-white rounded-xl overflow-hidden">
                        <VimeoEmbed videoId={story.videoId} />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 text-center mt-6 px-4">
                    {story.achievement}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-8 transition-all duration-300 hover:bg-purple-200">
            <span className="text-sm font-semibold text-purple-700">
              🎯 HOW WE OPERATE
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            You Could Call Our Formula An
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              &quot;Unfair Advantage&quot;
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Or, You Can Claim This Unfair Advantage For Your Own Course
            Business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Your Unfair Advantage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
