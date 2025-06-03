"use client";

import Clients from "@/components/clients";
import Features from "@/components/CreatorPage/features";
import HeroSection from "@/components/CreatorPage/Hero";
import Gurantee from "@/components/CreatorPage/gurantee";
import SuccessSection from "@/components/CreatorPage/SuccessSection";
import { useState } from "react";
import IncludedSection from "@/components/CreatorPage/IncludedSection";
import OnlineEducationGraph from "@/components/CreatorPage/OnlineEducationGraph";
import TeamMember from "@/components/CreatorPage/TeamMember";
import { Testimonials } from "@/components/CreatorPage/Testimonials";
import Faq from "@/components/CreatorPage/faq";
import { CTA } from "@/components/CreatorPage/cta";
import Modal from "@/components/CreatorPage/modal";

export default function Creator() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <HeroSection onOpenModal={handleModalOpen} />
      <Clients />
      <Features />
      <Gurantee onOpenModal={handleModalOpen} />
      <SuccessSection />
      <IncludedSection onOpenModal={handleModalOpen} />
      <OnlineEducationGraph />
      <TeamMember />
      <Testimonials />
      <Faq />
      <CTA onOpenModal={handleModalOpen} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
