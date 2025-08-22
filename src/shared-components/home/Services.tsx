"use client";
import React from "react";


const services = [
  {
    icon: "/images/icon-delivery.svg",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: "/images/Icon-Customer-service.svg",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: "/images/Icon-secure.png",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];


const ACCENT = "#BDBDBD";

const Services: React.FC = () => (
  <section className="py-12 bg-white">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
      {services.map((service, idx) => (
        <div key={idx} className="flex flex-col items-center flex-1 text-center px-6">

          <span
            className="flex items-center justify-center mb-4"
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "#000",
              border: `6px solid ${ACCENT}`,
              boxSizing: "border-box",
              display: "inline-flex",
            }}
          >
            <img src={service.icon} alt={service.title} className="w-10 h-10" />
          </span>
          <h3 className="font-bold text-lg mb-2">{service.title}</h3>
          <p className="text-gray-600 text-base">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;