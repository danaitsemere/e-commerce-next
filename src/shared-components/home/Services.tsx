export default function Services() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto flex justify-around">
        <div className="flex flex-col items-center">
          <svg width="40" height="40" fill="black"><circle cx="20" cy="20" r="20" /></svg>
          <span className="font-bold mt-2">Free Delivery</span>
        </div>
        <div className="flex flex-col items-center">
          <svg width="40" height="40" fill="black"><circle cx="20" cy="20" r="20" /></svg>
          <span className="font-bold mt-2">Customer Service</span>
        </div>
        <div className="flex flex-col items-center">
          <svg width="40" height="40" fill="black"><circle cx="20" cy="20" r="20" /></svg>
          <span className="font-bold mt-2">Money Back</span>
        </div>
      </div>
    </section>
  );
}