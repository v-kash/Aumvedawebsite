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
  title: "Aumveda Wellness - Premium Organic & Ayurvedic Products for Natural Living",
  description: "Discover authentic Ayurvedic wellness products, organic herbal supplements, and natural skincare solutions. Rooted in ancient wisdom, crafted for modern wellness. Shop premium quality products for a balanced, healthier lifestyle.",
  keywords: "ayurvedic products, organic wellness, herbal supplements, natural skincare, holistic health, ayurveda online, eco-friendly wellness, organic health products",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aumveda Wellness - Premium Organic & Ayurvedic Products",
    description: "Authentic Ayurvedic wellness products for natural, balanced living",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Aumveda Wellness - Natural Ayurvedic Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumveda Wellness - Premium Ayurvedic Products",
    description: "Authentic Ayurvedic wellness products for natural living",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aumveda Wellness",
    alternateName: "Aumveda",
    description: "Premium organic and Ayurvedic wellness products for natural living",
    url: "https://aumvedawellness.com",
    logo: {
      "@type": "ImageObject",
      url: "https://aumvedawellness.com/logo.png",
      width: 600,
      height: 600,
    },
    image: "https://aumvedawellness.com/og-home.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "aumvedawellness@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://facebook.com/aumveda",
      "https://instagram.com/aumveda",
      "https://twitter.com/aumveda",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };


  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Aumveda Wellness?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aumveda Wellness provides organic Ayurvedic products for natural health and balanced living."
      }
    },
    {
      "@type": "Question",
      "name": "Are your products organic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we focus on natural, herbal, and eco-friendly ingredients."
      }
    }
  ]
};

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aumveda Wellness",
    url: "https://aumvedawellness.com",
    description: "Premium organic and Ayurvedic wellness products",
    publisher: {
      "@type": "Organization",
      name: "Aumveda Wellness",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aumvedawellness.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aumveda Wellness - Home",
    description: "Discover premium organic and Ayurvedic wellness products for natural living",
    url: "https://aumvedawellness.com",
    isPartOf: {
      "@type": "WebSite",
      name: "Aumveda Wellness",
      url: "https://aumvedawellness.com",
    },
    about: {
      "@type": "Thing",
      name: "Ayurvedic Wellness Products",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aumvedawellness.com",
        },
      ],
    },
  };

  // Local Business Schema (if you have physical location)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Aumveda Wellness",
    image: "https://aumvedawellness.com/logo.png",
    "@id": "https://aumvedawellness.com",
    url: "https://aumvedawellness.com",
    telephone: "+91-9000006000", // ADD YOUR PHONE
    address: {
      "@type": "PostalAddress",
      streetAddress: " 1-8-15/2FF8-1, Bhavani Nagar Colony Main Road,beside ETDC, North KamalaNa, Near ETDC, GKNILAYAM, Telangana,Hyderabad, 500062", 
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500062", // ADD YOUR PINCODE
      addressCountry: "IN",
    },
   
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      
    },
    sameAs: [
      "https://facebook.com/aumveda",
      "https://instagram.com/aumveda",
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main>
        <NatureHero />
        <NavbarVeda />
        <AboutSection />
        <WhyAumvedaSection />
        <WhatWeOfferSection />
        <OurApproach />
        <WhyTrust />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}