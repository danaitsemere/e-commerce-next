"use client";

import TopBar from "../shared-components/common/TopBar";
import Header from "../shared-components/common/Header";
import Categories from "../shared-components/home/Categories";
import Banner from "../shared-components/home/Banner";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex justify-center w-full bg-white">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-12 gap-0 pt-4">
          <Categories />
          <section className="col-span-9 flex flex-col">
            <Banner />
          </section>
        </div>
      </main>
    </div>
  );
}