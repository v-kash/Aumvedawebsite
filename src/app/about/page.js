import NavbarVeda from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import Footer from "@/components/Footer";
import OurImpact from "@/components/OurImpact";
import FutureVision from "@/components/FutureVision";
export const metadata = {
  title: "About Us - Our Ayurvedic Wellness Mission",
  description: "Learn about Aumveda Wellness's commitment to authentic Ayurvedic products, sustainable practices, and holistic health solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
  },
};

export default function HomePage() {

  
    return (
        <main>
            <AboutHero />
            <NavbarVeda />
            <OurStory />
            <MissionVision />
            <OurImpact />
            <FutureVision />
            <Footer />
        </main>
    );
}