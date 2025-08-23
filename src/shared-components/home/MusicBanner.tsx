"use client";
import React from "react";

const MUSIC_BANNER_IMAGE = "/images/speaker1.png"; 

const countdown = [
  { value: "23", label: "Hours" },
  { value: "05", label: "Days" },
  { value: "59", label: "Minutes" },
  { value: "35", label: "Seconds" },
];

const MusicBanner: React.FC = () => {
  return (
    <section className="w-[1420px] rounded-lg overflow-hidden mt-8" style={{ background: "radial-gradient(ellipse at right, #1a1a1a 70%, #000 100%)" }}>
      <div className="flex flex-col md:flex-row items-center min-h-[400px] px-8 py-10 relative">

        <div className="flex-1 z-10 ml-8">
          <div className="mb-2">
            <span className="text-green-400 font-semibold text-lg">Categories</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 max-w-md leading-tight">
            Enhance Your<br />Music Experience
          </h2>
          <div className="flex gap-4 mb-8">
            {countdown.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-full shadow-md">
                <span className="font-bold text-2xl text-black">{item.value}</span>
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
          <button className="bg-green-400 text-white rounded px-10 py-3 font-semibold text-lg hover:bg-green-500 transition">
            Buy Now!
          </button>
        </div>

        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0 mr-3">
          <img
            src={MUSIC_BANNER_IMAGE}
            alt="Music Banner Speaker"
            className="w-[700px] max-w-full object-contain select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MusicBanner;