"use client";
import React from "react";


const products = [
  {
    name: "Breed Dry Dog Food",
    image: "images/9.png",
    price: 100,
    rating: 2,
    reviews: 35,
    colors: [],
    isNew: false,
  },
  {
    name: "CANON EOS DSLR Camera",
    image: "/images/10.png",
    price: 360,
    rating: 4,
    reviews: 95,
    colors: [],
    isNew: false,
    addToCart: true, 
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: "/images/11.png",
    price: 700,
    rating: 5,
    reviews: 325,
    colors: [],
    isNew: false,
  },
  {
    name: "Curology Product Set",
    image: "/images/12.png",
    price: 500,
    rating: 4,
    reviews: 145,
    colors: [],
    isNew: false,
  },
  {
    name: "Kids Electric Car",
    image: "/images/13.png",
    price: 960,
    rating: 5,
    reviews: 65,
    colors: ["#ff0000", "#000000"],
    isNew: true,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: "/images/14.png",
    price: 1160,
    rating: 3,
    reviews: 35,
    colors: ["#d4ff00", "#000000"],
    isNew: false,
  },
  {
    name: "GPII Shooter USB Gamepad",
    image: "/images/15.png",
    price: 660,
    rating: 4,
    reviews: 55,
    colors: ["#ff0000", "#000000"],
    isNew: true,
  },
  {
    name: "Quilted Satin Jacket",
    image: "/images/16.png",
    price: 660,
    rating: 4,
    reviews: 55,
    colors: ["#d4ff00", "#000000"],
    isNew: false,
  },
];

function StarRating({ rating }: { rating: number }) {
  const total = 5;
  return (
    <span>
      {[...Array(total)].map((_, i) =>
        i < rating ? (
          <span key={i} className="text-yellow-400">&#9733;</span>
        ) : (
          <span key={i} className="text-gray-300">&#9733;</span>
        )
      )}
    </span>
  );
}

const OurProducts: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-3 h-6 rounded bg-[#FF004D] mr-2"></div>
          <span className="text-[#FF004D] font-semibold text-lg">Our Products</span>
        </div>
        <h2 className="text-4xl font-bold mb-8">Explore Our Products</h2>
        <div className="flex justify-end mb-4 gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <svg width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div key={idx} className="relative bg-[#fafafa] rounded-lg p-4 flex flex-col items-center shadow-sm group">
        
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-100">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border hover:bg-gray-100 transition">
                  <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border hover:bg-gray-100 transition">
                  <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2 12c5-9 15-9 20 0" />
                  </svg>
                </button>
              </div>

              {prod.isNew && (
                <span className="absolute left-4 top-4 bg-[#10e47e] text-white px-3 py-1 text-xs rounded font-bold">NEW</span>
              )}

              <img
                src={prod.image}
                alt={prod.name}
                className="w-32 h-32 object-contain mb-4"
                draggable={false}
              />

              {prod.addToCart && (
                <button className="w-full bg-black text-white py-2 rounded mb-2 font-medium">Add To Cart</button>
              )}

              <div className="text-center font-medium mt-2">{prod.name}</div>

              <div className="flex items-center justify-center gap-1 text-sm mt-1">
                <span className="text-[#FF004D] font-bold">${prod.price}</span>
                <StarRating rating={prod.rating} />
                <span className="text-gray-500">({prod.reviews})</span>
              </div>

              <div className="flex gap-2 mt-2">
                {prod.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-5 h-5 rounded-full border-2 border-white"
                    style={{ backgroundColor: color, boxShadow: "0 0 0 1px #ddd" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#FF004D] text-white px-10 py-3 rounded font-semibold text-lg hover:bg-[#e60044] transition">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;