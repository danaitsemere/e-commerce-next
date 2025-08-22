import ProdCard from "../../shared-components/common/ProdCard";

const products = [
  { image: "/images/5.png", name: "The north coat", price: 260, oldPrice: 360, rating: 5, reviews: 65, discount: 28 },
  { image: "/images/6.png", name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 5, reviews: 65, discount: 17 },
  { image: "/images/7.png", name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 5, reviews: 65, discount: 6 },
  { image: "/images/8.png", name: "Small BookSelf", price: 360, oldPrice: 400, rating: 5, reviews: 65, discount: 10 },
];

export default function BestSelling() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Best Selling Products</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-base">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <ProdCard key={idx} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}