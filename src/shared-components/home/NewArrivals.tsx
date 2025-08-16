import Image from "next/image";

export default function NewArrivals() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">New Arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg flex flex-col justify-end p-6" style={{ minHeight: 280 }}>
            <Image src="/ps5.png" alt="PlayStation 5" width={400} height={128} className="object-contain" />
            <div>
              <h3 className="font-bold">PlayStation 5</h3>
              <p className="text-xs">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="bg-black text-white px-4 py-1 rounded mt-2">Shop Now</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image src="/women.png" alt="Women&apos;s Collections" width={96} height={96} className="object-contain mb-2" />
              <h3 className="font-bold">Women&apos;s Collections</h3>
              <p className="text-xs mb-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="bg-black text-white px-4 py-1 rounded">Shop Now</button>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image src="/speakers.png" alt="Speakers" width={96} height={96} className="object-contain mb-2" />
              <h3 className="font-bold">Speakers</h3>
              <button className="bg-black text-white px-4 py-1 rounded">Shop Now</button>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <Image src="/perfume.png" alt="Perfume" width={96} height={96} className="object-contain mb-2" />
              <h3 className="font-bold">Perfume</h3>
              <button className="bg-black text-white px-4 py-1 rounded">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-3">
            <div>
              <svg width="32" height="32" fill="black"><circle cx="16" cy="16" r="16" /></svg>
            </div>
            <div>
              <div className="font-bold text-sm">FREE AND FAST DELIVERY</div>
              <div className="text-xs">Free delivery for all orders over $140</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <svg width="32" height="32" fill="black"><circle cx="16" cy="16" r="16" /></svg>
            </div>
            <div>
              <div className="font-bold text-sm">24/7 CUSTOMER SERVICE</div>
              <div className="text-xs">Friendly 24/7 customer support</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <svg width="32" height="32" fill="black"><circle cx="16" cy="16" r="16" /></svg>
            </div>
            <div>
              <div className="font-bold text-sm">MONEY BACK GUARANTEE</div>
              <div className="text-xs">We return money within 30 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
