"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // SVG patterns for different states and themes
  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  // Mobile-optimized dot patterns (smaller dots)
  const mobileDotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='8' cy='8' r='1.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='8' cy='8' r='1.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='8' cy='8' r='1.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='8' cy='8' r='1.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    if (!event.currentTarget || event.touches.length === 0) return;
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const touch = event.touches[0];

    mouseX.set(touch.clientX - left);
    mouseY.set(touch.clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex min-h-screen sm:h-[40rem] w-full items-center justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Default dot patterns - Desktop */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden hidden sm:block"
        style={{
          backgroundImage: dotPatterns.light.default,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block sm:dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
        }}
      />

      {/* Default dot patterns - Mobile */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden block sm:hidden"
        style={{
          backgroundImage: mobileDotPatterns.light.default,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block sm:hidden"
        style={{
          backgroundImage: mobileDotPatterns.dark.default,
        }}
      />

      {/* Hover effect patterns - Desktop */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden hidden sm:block"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block sm:dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Touch effect patterns - Mobile */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-active:opacity-100 dark:hidden block sm:hidden"
        style={{
          backgroundImage: mobileDotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-active:opacity-10 dark:block sm:hidden"
        style={{
          backgroundImage: mobileDotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Responsive gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      <div
        className={cn(
          "relative z-20 w-full max-w-7xl mx-auto text-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-white/90 via-fuchsia-400 to-white/90 px-1 pb-1 text-fuchsia-800 dark:from-black/80 dark:via-fuchsia-400 dark:to-black/80 dark:text-fuchsia-100 text-sm sm:text-base shadow-[0_2px_8px_0_rgba(120,0,120,0.10)]`,
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 rounded-lg ring-2 ring-fuchsia-400/40 dark:ring-fuchsia-400/60 pointer-events-none"
      />
    </motion.span>
  );
};
