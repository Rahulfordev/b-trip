import Blog from "@/components/Blog/Blog";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import PopularFlight from "@/components/PopularFlight/PopularFlight";
import Testimonial from "@/components/Testimonial/Testimonial";
import TourPackages from "@/components/TourPackages/TourPackages";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Featured />
      <TourPackages />
      <PopularFlight />
      <Blog />
      <Testimonial />
      <Footer />
    </main>
  );
}
