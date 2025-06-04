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
import HeroAwardBanner from "@/components/award-banner";
import { FoundersNote } from "@/components/founders-note";
import assets from "@/data/assets.json";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-8 relative space-y-8">
        <div className="sticky top-4 bg-white rounded-layout ring ring-gray-200 z-[1000]"> {/* Added top-4 for spacing example */}
          <Navbar /> {/* Navbar component no longer needs sticky */}
        </div>

        {/* Main content container */}
        <div className="bg-white rounded-layout bg-gradient-to-t from-white via-white to-background-light/90 ring ring-gray-200">
          <HeroWithAnimations />
        </div>
        <HeroAwardBanner />
        {/* Put Award and "Seen on TikTok & Instagram" */}
        <div id="testimonials">
          <AnimatedTestimonials
            testimonials={[
              {
                quote:
                  "A fantastic picture of my fur babies! The quality and detail is brilliant! So so happy with my purchase!",
                name: "Louise S.",
                designation: "",
                src: assets.images.customers["1"],
              },
              {
                quote:
                  "This is the 2nd canvas that we have done. The quality is A+, including the frames!! Great communication during the entire process, start to finish! We have a 3rd picture-canvas that will be in the works soon... We can't wait to work with you again!!",
                name: "Christopher S.",
                designation: "",
                src: assets.images.customers["2"],
              },
              {
                quote:
                  "I'm so pleased with the portrait; it was a gift for my husband after our beloved lab passed away. The picture is absolutely perfect and captures his spirit beautifully.",
                name: "Leah A.",
                designation: "",
                src: assets.images.customers["3"],
              },
              {
                quote:
                  "I'm sorry, not sorry, but I'm in love with this. Super easy to order. They sent a proof and the final photo is even better than expected because it has like a velvet feel to it almost like a vintage painting or art.",
                name: "Betsy T.",
                designation: "",
                src: assets.images.customers["4"],
              },
              {
                quote:
                  "Amazing service, updated all the way and absolutely delighted with the portrait of our gorgeous dog. The quality is exceptional and the attention to detail is remarkable.",
                name: "Lauraine Q.",
                designation: "",
                src: assets.images.customers["5"],
              },
            ]}
            // autoplay={true}
          />
        </div>
     
        <div id="services">
          <ServicesSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <AIImageComparison />
        <div id="founders-note" className="py-4">
          <FoundersNote
            founderName="Kévin"
            founderRole="Founder"
            petName="Moumou"
            founderImage="https://i.pravatar.cc/300?img=32"
            message="When I adopted Moumou I wanted a keepsake that didn't cost a fortune or take weeks. GetPawtrait is my promise: premium, affordable memories for every animal lover. We're a small, pet-obsessed team that designs, prints, and packs every order as if it were our own."
            className="max-w-3xl mx-auto"
          />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
   
        <div id="results">
          <ResultsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
