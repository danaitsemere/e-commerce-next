import TopBar from "../shared-components/common/TopBar";
import Header from "../shared-components/common/Header";
import Banner from "../shared-components/home/Banner";
import Categories from "../shared-components/home/Categories";
import FlashSales from "../shared-components/home/FlashSales";
import ByCategory from "../shared-components/home/ByCategory";
import BestSelling from "../shared-components/home/BestSelling";
import MusicBanner from "../shared-components/home/MusicBanner";
import OurProducts from "../shared-components/home/OurProducts";
import NewArrival from "../shared-components/home/NewArrivals";
import Services from "../shared-components/home/Services";
import Footer from "../shared-components/common/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#FFF] min-h-screen w-full overflow-hidden">
      <TopBar />
      <Header />
      <div className="min-w-8xl mx-auto ">
        <div className="grid grid-cols-13 gap-8 mt-8">
          <div className="col-span-2  min-w-[500px] ml-29 ">
            <Categories />
          </div>
          <div className="col-span-10 min-w-[1100px] mx-auto ml-47 h-94">
            <Banner />
          </div>
        </div>
        <div className="mt-8  ml-25">
          <FlashSales />
        </div>
        <div className="mt-8 ml-48">
          <ByCategory />
        </div>
        <div className="mt-8 mr-1">
          <BestSelling />
        </div>
        <div className="mt-8 ml-32">
          <MusicBanner />
        </div> 
        <div className="mt-8 -ml-17">
          <OurProducts />
        </div>
        <div className="mt-8 ml-35 max-w-[1400px]">
          <NewArrival  />
        </div >
         <div className="mt-12 ">
        <Services />
        </div>
        
      </div>
      <Footer />
    </main>
  );
}