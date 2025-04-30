import { Navbar } from "@/components/navbar";
import { ProblemsSection } from "@/components/problems-section";
import { CTASection } from "@/components/cta-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { SuccessStoriesSection } from "@/components/success-stories-section";
import { ComparisonSection } from "@/components/comparison-section";
import { AIImageComparison } from "@/components/ai-image-comparison";
import { FAQSection } from "@/components/faq-section";
import { ResultsSection } from "@/components/results-section";
import { Footer } from "@/components/footer";
import { HeroWithAnimations } from "@/components/hero-with-animations";
import { BenefitsSection } from "@/components/benefits-section";
import { ComparisonSection2 } from "@/components/comparison-section-2";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 py-8 relative space-y-8">

        {/* ADD sticky top-0 z-50 to THIS div */}
        <div className="sticky top-4 z-50 bg-white rounded-[32px]  ring ring-gray-200"> {/* Added top-4 for spacing example */}
          <Navbar /> {/* Navbar component no longer needs sticky */}
        </div>

        {/* Main content container */}
        <div className="bg-white rounded-[32px]  bg-gradient-to-t from-white via-white to-[#f8f7fd]/90 ring ring-gray-200">
          <HeroWithAnimations />
        </div>
        <ComparisonSection />
        <ComparisonSection2 />
        <AIImageComparison />
        {/*<CustomersSection />*/}
        <ProblemsSection />
        <CTASection />
        <HowItWorksSection />
        <ServicesSection />
        <BenefitsSection />
        {/* <SuccessStoriesSection /> */}
     
        <FAQSection />
        <ResultsSection />
      </div>
      <Footer />
    </div>
  );
}
