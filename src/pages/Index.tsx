import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesSection from "@/components/home/ServicesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventsAndCTA from "@/components/home/EventsAndCTA";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <EventsAndCTA />
    </Layout>
  );
};

export default Index;
