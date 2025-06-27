"use client";

import React, { useEffect, useState } from "react";

export const testimonials = [
  {
    text: "I just launched my first course, and I got enrollments the same day! The production quality and support made everything feel seamless.",
    name: "Jessica Collins",
    username: "Course Creator",
  },
  {
    text: "Earning my first $500/month after only three months was a huge win. Couldn't have done it without the amazing guidance and free resources.",
    name: "Eric Johnson",
    username: "Online Instructor",
  },
  {
    text: "The best part? I didn't have to think about any marketing at all—the marketplace brought in students while I focused on content.",
    name: "Mark Sutherland",
    username: "Content Creator",
  },
  {
    text: "I'm thrilled with the outcome! The course tools were easy to use, and I saw my first $100 just weeks after launching.",
    name: "Pauline Meyer",
    username: "Course Instructor",
  },
  {
    text: "Getting enrollments immediately and seeing my course featured was beyond my expectations. Such an easy process with high-quality results.",
    name: "Tyler Brennan",
    username: "Digital Educator",
  },
  {
    text: "Surpassed $2,000 this month without lifting a finger for promotion. The marketplace setup really works!",
    name: "Clara Nguyen",
    username: "Online Teacher",
  },
  {
    text: "My Udemy course got enrollments right away, and I didn't even have to spend a dime on extra tools or software. So grateful for the help.",
    name: "Jared Lee",
    username: "Course Creator",
  },
  {
    text: "The video production quality is fantastic, and I already feel like I have a real strategy in place for my next course.",
    name: "Sophie Anderson",
    username: "Digital Instructor",
  },
  {
    text: "After three months, I'm consistently making $400/month. The structure and production support made it all possible!",
    name: "Mike Pereira",
    username: "Online Educator",
  },
  {
    text: "I wasn't expecting much at first, but my first course saw enrollments immediately. The guidance on setting everything up was exactly what I needed.",
    name: "Nicole Rivera",
    username: "Course Creator",
  },
  {
    text: "Managed to hit $1,000 a month with my course, and I didn't have to buy any extra software. Couldn't be happier with the result.",
    name: "Lucas Silva",
    username: "Digital Instructor",
  },
  {
    text: "Not having to worry about marketing or promotions is such a relief. The platform does all the work, and my courses are thriving.",
    name: "Emma Blake",
    username: "Online Teacher",
  },
  {
    text: "I'm new to online courses, but I got my first payment within days of uploading! The resources made the whole process stress-free.",
    name: "Liam Patel",
    username: "Course Creator",
  },
  {
    text: "I'm so glad I decided to go through with this course. My first Skillshare payout came quickly, and the production quality was excellent.",
    name: "Sara Hill",
    username: "Content Creator",
  },
  {
    text: "This month I hit $2,000, and I'm amazed at how easy it was to set up my course. Truly felt supported every step of the way.",
    name: "Ryan Brooks",
    username: "Online Instructor",
  },
  {
    text: "The course tools were free and easy to use. I've been earning over $100/month steadily, and the process couldn't have been smoother.",
    name: "Daniela Grant",
    username: "Digital Educator",
  },
  {
    text: "Got my first $85 within a few days of launching. The quality and support exceeded my expectations!",
    name: "Oliver Tan",
    username: "Course Creator",
  },
  {
    text: "Launching my course was a great experience. I saw enrollments immediately, and I'm starting to see real growth.",
    name: "Alex Park",
    username: "Online Educator",
  },
  {
    text: "The production quality alone has been a game-changer. I saw real results fast, and everything I needed was provided from the start.",
    name: "Megan Ford",
    username: "Digital Instructor",
  },
  {
    text: "It's incredible to have income coming in with no extra effort on my end. I just uploaded, and the enrollments kept coming.",
    name: "Carlos Ruiz",
    username: "Content Creator",
  },
];

const firstColumn = testimonials.slice(0, 7);
const secondColumn = testimonials.slice(7, 14);
const thirdColumn = testimonials.slice(14, 20);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateY((prev) => {
        const newValue = prev - 1;
        // Reset when scrolled halfway through the duplicated content
        if (Math.abs(newValue) >= 50 * props.testimonials.length) {
          return 0;
        }
        return newValue;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [props.testimonials.length]);

  return (
    <div className={props.className}>
      <div
        className="flex flex-col gap-6"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: "transform 0.5s linear",
        }}
      >
        {[...Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, username }, idx) => (
              <div
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:border-purple-300 max-w-xs w-full group"
                key={`${index}-${idx}`}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-purple-200 group-hover:text-purple-300 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{text}</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-900 leading-tight">
                      {name}
                    </div>
                    <div className="text-purple-600 text-sm">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, purple 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-2">
            <span className="text-sm font-semibold text-purple-700">
              TESTIMONIALS
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Still Not Convinced?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Hear From Our Students
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            From learners to successful course creators
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-700">98%</p>
            <p className="text-sm text-gray-600">Success Rate</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-700">60K+</p>
            <p className="text-sm text-gray-600">Students</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-700">4.9/5</p>
            <p className="text-sm text-gray-600">Rating</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-700">50+</p>
            <p className="text-sm text-gray-600">Countries</p>
          </div>
        </div>

        <div
          className="flex justify-center gap-6 overflow-hidden relative"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            height: "600px",
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Join thousands of successful course creators worldwide
          </p>
        </div>
      </div>
    </section>
  );
};
