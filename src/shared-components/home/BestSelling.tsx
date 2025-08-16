import ProdCard from "../common/ProdCard";

const products = [
  { image: "/coat.png", name: "The north coat", price: "$260", oldPrice: "$360", rating: 5, reviews: 65 },
  { image: "/bag.png", name: "Gucci duffle bag", price: "$960", oldPrice: "$1160", rating: 5, reviews: 65 },
];

export default function BestSelling() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <ProdCard key={idx} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}