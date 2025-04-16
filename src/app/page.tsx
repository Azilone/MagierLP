import { Navbar } from "@/components/navbar";
import { ProblemsSection } from "@/components/problems-section";
import { CTASection } from "@/components/cta-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { SuccessStoriesSection } from "@/components/success-stories-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FAQSection } from "@/components/faq-section";
import { ResultsSection } from "@/components/results-section";
import { Footer } from "@/components/footer";
import { HeroWithAnimations } from "@/components/hero-with-animations";
import { BenefitsSection } from "@/components/benefits-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 ... py-8 ... relative space-y-6 ">

        {/* ADD sticky top-0 z-50 to THIS div */}
        <div className="sticky top-4 z-50 bg-white rounded-[32px] shadow-sm "> {/* Added top-4 for spacing example */}
          <Navbar /> {/* Navbar component no longer needs sticky */}
        </div>

        {/* Main content container */}
        <div className="bg-white rounded-[32px] ring ring-gray-200">
          <HeroWithAnimations />
        </div>
        {/*<CustomersSection />*/}
        <ProblemsSection />
        <CTASection />
        <HowItWorksSection />
        <ServicesSection />
        <BenefitsSection />
        {/* <SuccessStoriesSection /> */}
        <ComparisonSection />
        <FAQSection />
        <ResultsSection />
      </div>
      <Footer />
    </div>
  );
}
