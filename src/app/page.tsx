import CourseRevenueCalculator from "@/components/LandingPage/calculator";
import { CardsForLinking } from "@/components/LandingPage/card";
import { Hero } from "@/components/LandingPage/hero";
import PremiumStatsComponent from "@/components/LandingPage/PremiumStatsComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <CardsForLinking />
      <PremiumStatsComponent />
      <CourseRevenueCalculator />
    </>
  );
}
