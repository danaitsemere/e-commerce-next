import ProdCard from "../common/ProdCard";

const products = [
  { image: "/prod1.png", name: "Gamepad", price: "$120", oldPrice: "$160", rating: 4, reviews: 88 },
  { image: "/prod2.png", name: "Keyboard", price: "$960", oldPrice: "$1160", rating: 5, reviews: 75 },
];

export default function FlashSales() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <ProdCard key={idx} {...prod} />
          ))}
        </div>
        <button className="mt-6 bg-pink-600 text-white px-6 py-2 rounded">View All Products</button>
      </div>
    </section>
  );
}