import ProdCard from "../../shared-components/common/ProdCard";

const products = [
  { image: "/images/5.png", name: "The north coat", price: 260, oldPrice: 360, rating: 5, reviews: 65},
  { image: "/images/6.png", name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 5, reviews: 65},
  { image: "/images/7.png", name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 5, reviews: 65},
  { image: "/images/8.png", name: "Small BookSelf", price: 360, oldPrice: 400, rating: 5, reviews: 65},
];

export default function BestSelling() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1410px] mx-auto">
        <div className="mt-4 mb-2 flex items-center space-x-1">
          <button
            type="button"
            className="w-3 h-6 rounded bg-[#FF004D] mr-2 "
            
          >
          </button>
          <span className="text-red-600 font-semibold text-base">This Month</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Best Selling Products</h2>
          <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold text-base">View All</button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {products.map((prod, idx) => (
            <ProdCard key={idx} {...prod}
             iconPositionClassName="left-70 top-4" 
           />
          ))}
        </div>
      </div>
    </section>
  );
}