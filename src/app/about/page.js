import NavbarVeda from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import Footer from "@/components/Footer";
import OurImpact from "@/components/OurImpact";
import FutureVision from "@/components/FutureVision";
export const metadata = {
    title: "Bringing Nature Closer to Everyday Life",
    description:
        "Discover organic, herbal, and eco-friendly products designed to support a healthier, more balanced lifestyle.",
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