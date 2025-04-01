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
      {/* <NotificationBanner /> */}
      <div className="max-w-[1900px] mx-auto px-12 py-8 md:py-12 relative space-y-6">
        {/* Navbar container */}
        <div className="bg-white rounded-[32px] sticky top-6 z-50 shadow-sm">
          <Navbar />
        </div>

        {/* Main content container */}
        <div className="bg-white rounded-[32px] ring ring-gray-200">
          <HeroWithAnimations />
        </div>
        {/*<CustomersSection />*/}
        <ProblemsSection />
        <CTASection />
        <BenefitsSection />
        <HowItWorksSection />
        <ServicesSection />
      
        <SuccessStoriesSection />
        <ComparisonSection />
        <FAQSection />
        <ResultsSection />
      
      </div>
      <Footer />
    </div>
  );
}
