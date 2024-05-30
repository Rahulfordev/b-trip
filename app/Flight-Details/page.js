import Navbar from "@/components/Common/Navbar/Navbar";
import SearchForm from "@/components/Common/SearchForm/SearchForm";
import Footer from "@/components/Common/Footer/Footer";
import Flight from "@/components/FlightDetails/Flight/Flight";

const FlightDetails = () => {
  return (
    <div>
      <Navbar />
      <SearchForm />
      <Flight />
      <Footer />
    </div>
  );
};

export default FlightDetails;
