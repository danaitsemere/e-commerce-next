import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black flex items-center relative h-[300px] mt-2">
      <div className="text-white pl-12 pr-4 flex flex-col justify-center h-full w-1/2">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/apple.svg" alt="Apple logo" width={32} height={32} />
          <span className="font-medium text-lg">iPhone 14 Series</span>
        </div>
        <h2 className="text-4xl font-extrabold leading-tight mb-6">
          Up to 10% <br />off Voucher
        </h2>
        <button className="mt-2 px-6 py-3 bg-white text-black rounded font-semibold flex items-center gap-2 w-fit">
          Shop Now
          <span className="ml-1">&rarr;</span>
        </button>
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <Image
          src="/banner-iphone14.png"
          alt="iPhone 14"
          width={0}
          height={0}
          style={{ width: 'auto', height: '220px' }}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        <span className="w-3 h-3 rounded-full bg-gray-400 block"></span>
        <span className="w-3 h-3 rounded-full bg-pink-600 block"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400 block"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400 block"></span>
      </div>
    </div>
  );
}
