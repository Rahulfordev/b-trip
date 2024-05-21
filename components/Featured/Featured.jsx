const Featured = () => {
  return (
    <div className="max-w-[1292px] mx-auto px-4 sm:px-6 lg:px-8 pt-11">
      <div className="flex justify-center gap-5 flex-wrap mx-auto">
        <div className="bg-[url('/image/featured/featured-1.png')] bg-cover bg-center bg-no-repeat w-[630px] h-[424px] rounded-[10px]">
          <div className="bg-[#04669f57] w-full h-full rounded-[10px] text-white">
            <div className="pl-5">
              <button className="bg-[#E50024] rounded font-semibold text-base mt-[71px] p-4">
                HOLIDAY SALE
              </button>
              <h1 className="text-4xl font-semibold pt-[46px]">
                Air Ticketing
              </h1>
              <p className="text-sm font-medium pt-5 max-w-[246px]">
                Find Your Perpect Hotel Get the best Prices on 20,000+
                properties the best prices on
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/image/featured/featured-2.png')] bg-cover bg-center bg-no-repeat w-full sm:w-[276px] h-[424px] rounded-[10px]">
          <div className="bg-[#04669F] w-full h-full opacity-90 rounded-[10px] text-white flex flex-col justify-center pl-4">
            <h1 className="text-4xl font-semibold max-w-[116px]">
              Haj & Umrah
            </h1>
            <p className="text-sm font-semibold max-w-[174px] pt-5">
              Join for free and get our tailorednewsletters full of hot travel
              deals.
            </p>
          </div>
        </div>
        <div className="bg-[url('/image/featured/featured-3.png')] bg-cover bg-center bg-no-repeat w-full sm:w-[276px] h-[424px] rounded-[10px]">
          <div className="bg-[#0466B7] w-full h-full opacity-90 rounded-[10px] text-white flex flex-col justify-center pl-4">
            <h1 className="text-4xl font-semibold">Travel Tips</h1>
            <p className="text-sm font-semibold max-w-[188px] pt-5">
              Tips from our travel experts to make your nest trip even better
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
