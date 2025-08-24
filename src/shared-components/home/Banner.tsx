"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Banner() {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black flex items-center relative h-full mt-10 mb-13">
      <div className="text-white pl-12 pr-4 flex flex-col justify-center h-full w-1/2">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/images/ios.svg" alt="Apple logo" width={32} height={32} />
          <span className="font-medium text-lg">iPhone 14 Series</span>
        </div>
        <h2 className="text-4xl font-extrabold leading-tight mb-6">
          Up to 10% <br />off Voucher
        </h2>
        <button className="flex items-center gap-2 text-white bg-transparent px-0 py-0 font-semibold w-fit">
          <span className="underline underline-offset-5 decoration-2">Shop Now</span>
          <FiArrowRight className="ml-1" size={24} />
        </button>
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <Image
          src="/images/iphone-removebg-preview.png"
          alt="iPhone 14"
          width={379}
          height={300}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        <span className="w-3 h-3 rounded-full bg-gray-400 block"></span>
        <span className="w-3 h-3 rounded-full bg-red-600 block"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400 block"></span>
        <span className="w-3 h-3 rounded-full bg-gray-400 block"></span>
      </div>
    </div>
  );
}
