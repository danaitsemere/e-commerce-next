"use client";

import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

interface ProdCardProps {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount?: number;
  rating: number;
  reviews: number;
  isCart?: boolean;
  showButtonOnHover?: boolean;
  showDiscount?: boolean;
  iconPositionClassName?: string;
  colors?: string[];
  showButtonPlaceholder?: boolean;
}

export default function ProdCard({
  name,
  image,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  isCart = false,
  showButtonOnHover = false,
  showDiscount = true,
  iconPositionClassName = "right-4 top-4",
  colors = [],
}: ProdCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div
      className={`bg-gray-50 rounded-lg p-4
        w-[220px] sm:w-[300px] md:w-[300px] lg:w-[50px] xl:w-[400px]
        flex-shrink-0 relative shadow group transition-all duration-200`}
    >
      {showDiscount !== false && discount !== undefined && (
        <span className="absolute left-4 top-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      <div className={`absolute flex flex-col gap-2 z-10 ${iconPositionClassName}`}>
        <button title="Wishlist" className="bg-white rounded-full p-1 shadow">
          <FiHeart className="w-5 h-5" />
        </button>
        <button title="View" className="bg-white rounded-full p-1 shadow">
          <FiEye className="text-gray-700 w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center items-center h-36">
        <Image src={image} alt={name} width={120} height={120} className="object-contain" />
      </div>

      <div className="w-full mt-3" style={{ minHeight: 40 }}>
        {(isCart || showButtonOnHover) && (
          <button
            className={`w-full py-2 rounded bg-black text-white font-semibold text-sm transition-opacity duration-200
              ${showButtonOnHover && !isCart ? "opacity-0 group-hover:opacity-100" : ""}
            `}
          >
            Add To Cart
          </button>
        )}

        {!(isCart || showButtonOnHover) && <div style={{ height: 40 }} />}
      </div>

      <div className="mt-4 font-semibold text-base text-black">{name}</div>

      <div className="flex items-center gap-2 my-1">
        <span className="text-red-600 font-bold">${price}</span>
        <span className="line-through text-gray-400">${oldPrice}</span>
      </div>

      {colors.length > 0 && (
        <div className="flex gap-2 mt-1">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-200 inline-block"
              style={{ backgroundColor: color }}
              aria-label={`Color option ${index + 1}`}
              role="img"
            />
          ))}
        </div>
      )}

      <div className="flex items-center text-yellow-400 text-sm mt-2">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4 inline" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="w-4 h-4 inline" />}
        <span className="ml-2 text-gray-500 text-xs">({reviews})</span>
      </div>
    </div>
  );
}
