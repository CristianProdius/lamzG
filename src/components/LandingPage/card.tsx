"use client";
import { useRouter } from "next/navigation";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function CardsForLinking() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-5xl mx-auto items-center justify-center p-4 lg:px-16">
      <CardContainer className="inter-var flex-1 flex-grow basis-0">
        <CardBody
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full mx-auto h-auto rounded-xl border"
          onClick={() => router.push("/business")}
        >
          <div className="p-6 md:px-12">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              🏢 I&apos;m a Business
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Explore B2B Course Creation Services →
            </CardItem>
            <CardItem
              translateZ="100"
              className="w-full mt-4 flex items-center justify-center"
            >
              <Image
                src="/illustrations/business.png"
                height="1000"
                width="1000"
                className="h-auto w-50 object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Business services thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var flex-1 flex-grow basis-0">
        <CardBody
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full mx-auto h-auto rounded-xl border
        "
          onClick={() => router.push("/creator")}
        >
          <div className="p-6 md:px-12">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              🎯 I&apos;m a Creator
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Join the Course Creation Academy →
            </CardItem>
            <CardItem
              translateZ="100"
              className="w-full mt-4 flex items-center justify-center"
            >
              <Image
                src="/illustrations/creator.png"
                height="1000"
                width="1000"
                className="h-auto w-50 object-contain rounded-xl group-hover/card:shadow-xl"
                alt="Creator academy thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
