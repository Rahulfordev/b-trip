/* eslint-disable react/no-unescaped-entities */
import SearchForm from "@/components/Common/SearchForm/SearchForm";
import SearchMenu from "@/components/Common/SearchMenu/SearchMenu";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url('/image/hero-section/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[632px] w-full">
        <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-14 lg:pb-32 pt-8">
            <p className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[64px] font-semibold text-white">
              Welcome
            </p>
            <p className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[64px] font-semibold text-white">
              to Btrip
            </p>
          </div>
          <div className="relative">
            <SearchMenu />
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
