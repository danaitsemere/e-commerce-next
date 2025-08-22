"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => (
  <div className="flex gap-6 mt-4">
    <a href="#" aria-label="Facebook" className="text-white hover:text-red-600 text-2xl">
      <FaFacebookF />
    </a>
    <a
      href="#"
      aria-label="Twitter"
      className="bg-white rounded-full p-1 text-[#1da1f2] hover:text-red-600 text-2xl"
      style={{ lineHeight: 0, display: "inline-flex" }}
    >
      <FaTwitter />
    </a>
    <a href="#" aria-label="Instagram" className="text-white hover:text-red-600 text-2xl">
      <FaInstagram />
    </a>
    <a href="#" aria-label="LinkedIn" className="text-white hover:text-red-600 text-2xl">
      <FaLinkedinIn />
    </a>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-16 pb-6 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-3">Exclusive</h2>
        <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
        <div className="mb-2 text-[#bdbdbd]">Get 10% off your first order</div>
        <form className="flex mt-3">
          <input type="email" placeholder="Enter your email" className="bg-black border border-[#bdbdbd] rounded-l px-4 py-2 text-white outline-none w-full" />
          <button type="submit" className="bg-black border-t border-b border-r border-[#bdbdbd] rounded-r px-4 flex items-center" aria-label="Subscribe">
            <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <div className="mb-2 text-[#bdbdbd]">111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</div>
        <div className="mb-2 text-[#bdbdbd]">exclusive@gmail.com</div>
        <div className="text-[#bdbdbd]">+88015-88888-9999</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Account</h3>
        <ul className="space-y-2 text-[#bdbdbd]">
          <li><a href="#" className="hover:text-white">My Account</a></li>
          <li><a href="#" className="hover:text-white">Login / Register</a></li>
          <li><a href="#" className="hover:text-white">Cart</a></li>
          <li><a href="#" className="hover:text-white">Wishlist</a></li>
          <li><a href="#" className="hover:text-white">Shop</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
        <ul className="space-y-2 text-[#bdbdbd]">
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
          <li><a href="#" className="hover:text-white">FAQ</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Download App</h3>
        <div className="mb-2 text-[#bdbdbd] text-sm">Save $3 with App New User Only</div>
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/Qrcode.png" alt="QR Code" className="w-16 h-16 bg-white p-1 rounded" />
          <div className="flex flex-col gap-2">
            <img src="/images/play.png" alt="Get it on Google Play" className="h-8" />
            <img src="/images/apple.png" alt="Download on the App Store" className="h-8" />
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
    <div className="mt-10 border-t border-[#222] pt-6 text-center text-[#bdbdbd] text-sm flex items-center justify-center gap-2">
      <svg width="18" height="18" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M15 9.354C14.328 8.453 13.208 8 12 8c-2.208 0-4 1.343-4 3s1.792 3 4 3c1.208 0 2.328-.453 3-1.354" /></svg>
      Copyright Rimel 2022. All right reserved
    </div>
  </footer>
);

export default Footer;