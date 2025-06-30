// app/casestudies/[id]/page.tsx
import { notFound } from "next/navigation";
import CaseStudy594Customers from "@/components/case-studies/CaseStudy594Customers";
import CaseStudyAIPlatform from "@/components/case-studies/CaseStudyAIPlatform";
import CaseStudyNotionCanva from "@/components/case-studies/CaseStudyNotionCanva";
import CaseStudySmartlead from "@/components/case-studies/CaseStudySmartlead";

// Define the case study components mapping
const caseStudyComponents = {
  "594-customers-no-ads": CaseStudy594Customers,
  "ai-platform-400-professionals": CaseStudyAIPlatform,
  "notion-canva-education-funnels": CaseStudyNotionCanva,
  "smartlead-cold-email": CaseStudySmartlead,
};

// Generate static params for all case studies (for static generation)
export async function generateStaticParams() {
  return Object.keys(caseStudyComponents).map((id) => ({
    id: id,
  }));
}

// Metadata generation - params is now async in Next.js 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params
  const { id } = await params;

  const caseStudyTitles = {
    "594-customers-no-ads":
      "How We Turned an Educational Course Into 594 Customers — Without Ad Spend",
    "ai-platform-400-professionals":
      "How One AI Platform Drove Qualified Interest From 400 Professionals",
    "notion-canva-education-funnels":
      "How Education-First Funnels Helped Notion and Canva Scale to Millions",
    "smartlead-cold-email":
      "How Smartlead.ai Turned Cold Email Education Into a Scalable SaaS Sales Engine",
  };

  const title = caseStudyTitles[id as keyof typeof caseStudyTitles];

  if (!title) {
    return {
      title: "Case Study Not Found | CCA",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${title} | CCA Case Studies`,
    description: `Read how we helped achieve remarkable results through education-first marketing. Learn the strategies and see the metrics.`,
  };
}

// Page component - params is now async in Next.js 15
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params
  const { id } = await params;

  const CaseStudyComponent =
    caseStudyComponents[id as keyof typeof caseStudyComponents];

  // If no matching case study found, show 404
  if (!CaseStudyComponent) {
    notFound();
  }

  // Render the appropriate case study component
  return <CaseStudyComponent />;
}
