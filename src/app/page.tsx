import { Navbar } from "@/components/navbar";
import { ProblemsSection } from "@/components/problems-section";
import { CTASection } from "@/components/cta-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { AIImageComparison } from "@/components/ai-image-comparison";
import { FAQSection } from "@/components/faq-section";
import { ResultsSection } from "@/components/results-section";
import { Footer } from "@/components/footer";
import { HeroWithAnimations } from "@/components/hero-with-animations";
import { BenefitsSection } from "@/components/benefits-section";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


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
        <AnimatedTestimonials
          testimonials={[
            {
              quote:
                "A fantastic picture of my fur babies! The quality and detail is brilliant! So so happy with my purchase!",
              name: "Louise S.",
              designation: "",
              src: "/images/customer/ac1.jpg",
            },
            {
              quote:
                "This is the 2nd canvas that we have done. The quality is A+, including the frames!! Great communication during the entire process, start to finish! We have a 3rd picture-canvas that will be in the works soon... We can't wait to work with you again!!",
              name: "Christopher S.",
              designation: "",
              src: "/images/customer/ac2.jpg",
            },
            {
              quote:
                "I'm so pleased with the portrait; it was a gift for my husband after our beloved lab passed away. The picture is absolutely perfect and captures his spirit beautifully.",
              name: "Leah A.",
              designation: "",
              src: "/images/customer/ac3.jpg",
            },
            {
              quote:
                "I'm sorry, not sorry, but I'm in love with this. Super easy to order. They sent a proof and the final photo is even better than expected because it has like a velvet feel to it almost like a vintage painting or art.",
              name: "Betsy T.",
              designation: "",
              src: "/images/customer/ac4.jpg",
            },
            {
              quote:
                "Amazing service, updated all the way and absolutely delighted with the portrait of our gorgeous dog. The quality is exceptional and the attention to detail is remarkable.",
              name: "Lauraine Q.",
              designation: "",
              src: "/images/customer/ac5.jpg",
            },
          ]}
          // autoplay={true}
        />
        <ServicesSection />
        <HowItWorksSection />
        <AIImageComparison />
        <BenefitsSection />
        {/*<CustomersSection />*/}
        {/* <ProblemsSection />
        <CTASection /> */}
        {/* <SuccessStoriesSection /> */}
        <FAQSection />
        <ResultsSection />
      </div>
      <Footer />
    </div>
  );
}
