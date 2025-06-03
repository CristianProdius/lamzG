import CourseRevenueCalculator from "@/components/LandingPage/calculator";
import { CardsForLinking } from "@/components/LandingPage/card";
import { Hero } from "@/components/LandingPage/hero";
import PremiumStatsComponent from "@/components/LandingPage/PremiumStatsComponent";
import { Nav } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CardsForLinking />
      <PremiumStatsComponent />
      <CourseRevenueCalculator />
    </>
  );
}
