import Blog from "@/components/Home/Blog/Blog";
import Featured from "@/components/Home/Featured/Featured";
import Footer from "@/components/Common/Footer/Footer";
import HeroSection from "@/components/Home/Hero/Hero";
import Navbar from "@/components/Common/Navbar/Navbar";
import PopularFlight from "@/components/Home/PopularFlight/PopularFlight";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import TourPackages from "@/components/Home/TourPackages/TourPackages";

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
