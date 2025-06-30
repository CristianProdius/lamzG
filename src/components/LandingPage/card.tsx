"use client";
import { useRouter } from "next/navigation";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function CardsForLinking() {
  const router = useRouter();

  return (
    <div className="w-full bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-5xl mx-auto items-center justify-center p-4 lg:px-16">
        <CardContainer className="inter-var flex-1 flex-grow basis-0">
          <CardBody
            className="bg-white relative group/card hover:shadow-2xl hover:shadow-purple-400/40 hover:cursor-pointer border-gray-200 w-full mx-auto h-auto rounded-xl border"
            onClick={() => router.push("/saas")}
          >
            <div className="p-6 md:px-12 text-center">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-800 w-full text-center"
              >
                🏢 I&apos;m a Business
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-2"
              >
                Explore B2B Course Creation Services
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var flex-1 flex-grow basis-0">
          <CardBody
            className="bg-white relative group/card hover:shadow-2xl hover:shadow-purple-400/40 hover:cursor-pointer border-gray-200 w-full mx-auto h-auto rounded-xl border"
            onClick={() => router.push("/creator")}
          >
            <div className="p-6 md:px-12 text-center">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-800 w-full text-center"
              >
                🎯 I&apos;m a Creator
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-2"
              >
                Join the Course Creation Academy
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
