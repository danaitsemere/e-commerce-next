"use client";
import { useRef, useState } from "react";
import ProdCard from "../../shared-components/common/ProdCard";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: "/images/1.jpg",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    isCart: true,
  },
  {
    name: "AK-900 Wired Keyboard",
    image: "/images/2.jpg",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4.2,
    reviews: 75,
    isCart: false,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image: "/images/3.jpg",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 4.7,
    reviews: 99,
    isCart: false,
  },
  {
    name: "S-Series Comfort Chair",
    image: "/images/4.jpg",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.1,
    reviews: 99,
    isCart: false,
  },
  {
    name: "S-Series Comfort Chair",
    image: "/images/4.jpg",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.1,
    reviews: 99,
    isCart: false,
  },
];

export default function FlashSales() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeCartIndex, setActiveCartIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full overflow-x">
      <div className="min-w-[2200px] mx-auto -ml-20">
        <div className="mt-4 mb-2 flex items-center space-x-1">
          <button
            type="button"
            className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center focus:outline-none"
            aria-label="Today's Highlight"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="white"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8L21 10h-8l1-8z" />
            </svg>
          </button>
          <span className="text-red-600 font-semibold text-base">Today's</span>
        </div>
        <div className="flex items-center mb-5 gap-4">
          <div className="flex items-center gap-16">
            <h2 className="font-bold text-4xl mb-1">Flash Sales</h2>
            <div className="flex flex-col items-center">
              <div className="flex gap-6 justify-center mb-1">
                {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                  <span
                    key={label}
                    className="text-xs text-gray-500 font-medium text-center tracking-tight w-12"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 justify-center items-center font-bold text-2xl tracking-tight">
                {["03", "23", "19", "56"].map((time, i) => (
                  <span key={i} className="text-center w-12 relative">
                    {time}
                    {i < 3 && (
                      <span className="text-red-600 font-bold mx-1 absolute right-[-14px] top-1/2 transform -translate-y-1/2">
                        :
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 ml-198">
            <button
              onClick={() => scroll("left")}
              className="bg-gray-100 rounded-full p-3 focus:outline-none flex items-center justify-center"
            >
              <ArrowLongLeftIcon className="w-6 h-6 text-red-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-gray-100 rounded-full p-5 flex items-center justify-center focus:outline-none"
            >
              <ArrowLongRightIcon className="w-6 h-6 text-red-600" />
            </button>
          </div>
        </div>
        <div className="pb-2 overflow-x-visible">
          <div
            ref={scrollRef}
            className="flex gap-4 w-full overflow-x-auto scroll-smooth no-scrollbar"
            style={{ paddingLeft: "12px", paddingRight: "12px" }}
          >
            {products.map((p, i) => (
              <div
                key={i}
                className="transition-all duration-200"

                onClick={() => setActiveCartIndex(i)}
              >
                <ProdCard
                  {...p}
                  isCart={activeCartIndex === i}
                  showButtonOnHover={false}
                  showButtonPlaceholder={true} 
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold text-base">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}