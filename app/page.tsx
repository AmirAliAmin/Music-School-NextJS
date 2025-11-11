import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import Testimonial from "@/components/Testimonial";
import HeroSection from "@/components/ui/HeroSection";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyUs/>
      <Testimonial/>
      <UpcomingWebinar/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
