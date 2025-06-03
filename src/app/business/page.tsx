import { CourseShowcase } from "@/components/BusinessPage/CourseShowcase";
import { Hero } from "@/components/BusinessPage/Hero";
import { WhatWeTakeCareOf } from "@/components/BusinessPage/Steps";
import { WhyCreateCourse } from "@/components/BusinessPage/WhyCreateCourse";
import { WhyWorkWithUs } from "@/components/BusinessPage/WhyUs";
import Clients from "@/components/clients";
import { CTA } from "@/components/BusinessPage/CTA";

export default function Creator() {
  return (
    <>
      <Hero />
      <CourseShowcase />
      <WhatWeTakeCareOf />
      <WhyCreateCourse />
      <WhyWorkWithUs />
      <Clients />
      <CTA />
    </>
  );
}
