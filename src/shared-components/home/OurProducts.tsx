import ProdCard from "../../shared-components/common/ProdCard";

const products = [
  {
    name: "Breed Dry Dog Food",
    image: "/images/9.png",
    price: 100,
    oldPrice: 120,
    rating: 2,
    reviews: 35,
    colors: [],
    isNew: false,
  },
  {
    name: "CANON EOS DSLR Camera",
    image: "/images/10.png",
    price: 360,
    oldPrice: 450,
    discount: 20,
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
    oldPrice: 800,
    rating: 5,
    reviews: 325,
    colors: [],
    isNew: false,
  },
  {
    name: "Curology Product Set",
    image: "/images/12.png",
    price: 500,
    oldPrice: 550,
    rating: 4,
    reviews: 145,
    colors: [],
    isNew: false,
  },
  {
    name: "Kids Electric Car",
    image: "/images/13.png",
    price: 960,
    oldPrice: 1200,
    rating: 5,
    reviews: 65,
    colors: ["#ff0000", "#000000"],
    isNew: true,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: "/images/14.png",
    price: 1160,
    oldPrice: 1300,
    rating: 3,
    reviews: 35,
    colors: ["#d4ff00", "#000000"],
    isNew: false,
  },
  {
    name: "GPII Shooter USB Gamepad",
    image: "/images/15.png",
    price: 660,
    oldPrice: 700,
    rating: 4,
    reviews: 55,
    colors: ["#ff0000", "#000000"],
    isNew: true,
  },
  {
    name: "Quilted Satin Jacket",
    image: "/images/16.png",
    price: 660,
    oldPrice: 750,
    rating: 4,
    reviews: 55,
    colors: ["#d4ff00", "#000000"],
    isNew: false,
  },
];

export default function OurProducts() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-3 h-6 rounded bg-[#FF004D] mr-2"></div>
          <span className="text-[#FF004D] font-semibold text-lg">Our Products</span>
        </div>
        <h2 className="text-4xl font-bold mb-8">Explore Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-25">
          {products.map((prod, idx) => (
            <ProdCard
              key={idx}
              name={prod.name}
              image={prod.image}
              price={prod.price}
              oldPrice={prod.oldPrice}
              discount={prod.discount}
              rating={prod.rating}
              reviews={prod.reviews}
              isCart={prod.addToCart || false}
              showButtonOnHover={false}
              showDiscount={prod.discount !== undefined}
              iconPositionClassName="right-4 top-4"
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#FF004D] text-white px-10 py-3 rounded font-semibold text-lg hover:bg-[#e60044] transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
