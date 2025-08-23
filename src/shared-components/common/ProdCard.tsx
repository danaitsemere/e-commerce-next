import { FiHeart, FiEye } from "react-icons/fi";
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
}: ProdCardProps) {
  const gradientId = `half-star-${encodeURIComponent(name)}`;
  return (
    <div className="   bg-gray-50 rounded-lg p-4
        w-[220px] sm:w-[300px] md:w-[300px] lg:w-[50px] xl:w-[400px]
        flex-shrink-0 relative shadow group transition-all duration-200">

    {showDiscount !== false && discount !== undefined && (
  <span className="absolute left-4 top-4  text-white text-xs px-2 py-1 rounded">
    -{discount}%
  </span>
)}

      <div className={`absolute flex flex-col gap-2 z-10 ${iconPositionClassName}`}>
  <button title="Wishlist" className="bg-white rounded-full p-1 shadow">
    <FiHeart className=" w-5 h-5" />
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

        {!(isCart || showButtonOnHover) && (
          <div style={{ height: 40 }} />
        )}
      </div>

      <div className="mt-4 font-semibold text-base text-black">{name}</div>

      <div className="flex items-center gap-2 my-1">
        <span className="text-red-600 font-bold">${price}</span>
        <span className="line-through text-gray-400">${oldPrice}</span>
      </div>

      <div className="flex items-center text-yellow-400 text-sm">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
          <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 inline">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
        {rating % 1 !== 0 && (
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4 inline">
            <defs>
              <linearGradient id={gradientId}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path fill={`url(#${gradientId})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        )}
        <span className="ml-2 text-gray-500 text-xs">({reviews})</span>
      </div>
    </div>
  );
}