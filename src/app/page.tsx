import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import DestinationsShowcase from "@/components/sections/DestinationsShowcase";
import FlightPath from "@/components/sections/FlightPath";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import GroupToursTeaser from "@/components/sections/GroupToursTeaser";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <DestinationsShowcase />
      <FlightPath />
      <WhyChooseUs />
      <HowItWorks />
      <GroupToursTeaser />
      <Testimonials />
      <CTASection />
    </>
  );
}
