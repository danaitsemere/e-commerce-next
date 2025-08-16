type ProdCardProps = {
  image: string
  name: string
  price: string
  oldPrice?: string
  rating: number
  reviews: number
  isNew?: boolean
}

export default function ProdCard({
  image,
  name,
  price,
  oldPrice,
  rating,
  reviews,
  isNew,
}: ProdCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col group hover:shadow-lg transition">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-40 object-contain mb-2" />
        {isNew && <span className="absolute top-2 left-2 bg-green-500 text-xs text-white px-2 py-1 rounded">NEW</span>}
      </div>
      <h3 className="font-semibold text-sm mb-1">{name}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-pink-600 font-bold">{price}</span>
        {oldPrice && <span className="text-gray-500 line-through text-xs">{oldPrice}</span>}
      </div>
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} width="14" height="14" fill={i < rating ? "#FFAD33" : "#E0E0E0"}><path d="M7 0l2 5h5l-4 3 2 5-4-3-4 3 2-5-4-3h5z"/></svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">({reviews})</span>
      </div>
      <button className="bg-black text-white py-2 rounded font-semibold w-full mt-auto hover:bg-pink-600 transition">
        Add To Cart
      </button>
    </div>
  );
}