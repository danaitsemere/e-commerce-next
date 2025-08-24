"use client";
import React, { useState } from "react";
import Image from "next/image";

const bycategories = [
  { label: "Phones", icon: "/images/Category-CellPhone.svg" },
  { label: "Computers", icon: "/images/Category-Computer.svg" },
  { label: "SmartWatch", icon: "/images/Category-SmartWatch.png" },
  { label: "Camera", icon: "/images/Category-Camera.svg" },
  { label: "HeadPhones", icon: "/images/Category-Headphone.svg" },
  { label: "Gaming", icon: "/images/Category-Gamepad.svg" },
];

const ByCategory: React.FC = () => {
  const [selected, setSelected] = useState("Camera");

  return (
    <div className="min-w-[2500px] -ml-18">
      <div className="flex items-center mb-4">
        <div className="w-3 h-6 rounded bg-red-600 mr-2"></div>
        <span className="text-red-600 font-semibold text-lg">ByCategories</span>
      </div>

      <h2 className="text-3xl font-bold mb-6">Browse By Category</h2>
      <div className="flex items-center -ml-24">

        <button
          className="w-25 h-9 flex items-center justify-center rounded-full bg-gray-100 mr-4"

        >
        </button>
        <div className="flex gap-10 flex-1">
          {bycategories.map(({ label, icon }) => (
            <button
              key={label}
              className={`flex flex-col items-center justify-center border rounded transition-all px-16 py-14 ${selected === label
                  ? "bg-[#FF004D] text-white border-[#FF004D] shadow-md"
                  : "bg-white text-black border-gray-300 hover:border-[#FF004D]"
                }`}
              onClick={() => setSelected(label)}
            >
              <span className="mb-3">
                <Image
                  src={icon}
                  alt={label}
                  width={40}
                  height={40}
                  style={{
                    filter: selected === label ? "invert(1) brightness(2)" : "none",
                  }}
                />
              </span>
              <span
                className={`font-medium ${selected === label ? "text-white" : "text-black"
                  }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>

        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 ml-4"
          aria-label="Next"
        >
         
        </button>
      </div>
    </div>
  );
};

export default ByCategory;