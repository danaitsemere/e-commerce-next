"use client";
import React from "react";

const newArrivals = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "/images/playstation.png",
    cta: "Shop Now",
    wide: true,
  },
  {
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: "/images/woman.png",
    cta: "Shop Now",
    wide: false,
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: "/images/speakers.png",
    cta: "Shop Now",
    wide: false,
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: "/images/perfume.png",
    cta: "Shop Now",
    wide: false,
  },
];

const NewArrivals: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-3 h-6 rounded bg-[#FF004D] mr-2"></div>
          <span className="text-[#FF004D] font-semibold text-lg">Featured</span>
        </div>
        <h2 className="text-4xl font-bold mb-8">New Arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="md:row-span-2 md:col-span-2 relative rounded-lg overflow-hidden min-h-[340px] flex items-end" style={{ background: "#111" }}>
            <img
              src={newArrivals[0].image}
              alt={newArrivals[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              draggable={false}
              style={{ objectPosition: "left" }}
            />
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{newArrivals[0].title}</h3>
              <p className="mb-4">{newArrivals[0].description}</p>
              <button className="underline font-semibold">{newArrivals[0].cta}</button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="flex flex-col gap-4">

            <div className="relative rounded-lg overflow-hidden min-h-[160px] flex items-end" style={{ background: "#232323" }}>
              <img
                src={newArrivals[1].image}
                alt={newArrivals[1].title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                draggable={false}
              />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{newArrivals[1].title}</h3>
                <p className="text-sm mb-3">{newArrivals[1].description}</p>
                <button className="underline font-semibold">{newArrivals[1].cta}</button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="relative rounded-lg overflow-hidden min-h-[160px] flex items-end" style={{ background: "#232323" }}>
                <img
                  src={newArrivals[2].image}
                  alt={newArrivals[2].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  draggable={false}
                />
                <div className="relative z-10 p-6 text-white">
                  <h3 className="text-lg font-bold mb-1">{newArrivals[2].title}</h3>
                  <p className="text-xs mb-3">{newArrivals[2].description}</p>
                  <button className="underline font-semibold">{newArrivals[2].cta}</button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="relative rounded-lg overflow-hidden min-h-[160px] flex items-end" style={{ background: "#232323" }}>
                <img
                  src={newArrivals[3].image}
                  alt={newArrivals[3].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  draggable={false}
                />
                <div className="relative z-10 p-6 text-white">
                  <h3 className="text-lg font-bold mb-1">{newArrivals[3].title}</h3>
                  <p className="text-xs mb-3">{newArrivals[3].description}</p>
                  <button className="underline font-semibold">{newArrivals[3].cta}</button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;