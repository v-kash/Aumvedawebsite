import NatureHero from "@/components/Naturehero";
import NavbarVeda from "@/components/Navbar";
import AboutSection from "@/components/About";
import WhyAumvedaSection from "@/components/Whyaumveda";
import WhatWeOfferSection from "@/components/WhatWeOffer";
import OurApproach from "@/components/OurApproach";
import WhyTrust from "@/components/WhyTrust";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Bringing Nature Closer to Everyday Life",
  description:
    "Discover organic, herbal, and eco-friendly products designed to support a healthier, more balanced lifestyle.",
};

export default function HomePage() {
  return (
    <main>
      <NatureHero />
      <NavbarVeda />
      <AboutSection />
      <WhyAumvedaSection/>
      <WhatWeOfferSection/>
      <OurApproach />
      <WhyTrust />
      <CTASection />
      <ContactSection />
      <Footer/>
    </main>
  );
}