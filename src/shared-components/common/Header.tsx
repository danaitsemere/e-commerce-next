"use client";

import Link from "next/link";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white w-full border-b">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between py-6 px-8">
        <span className="font-extrabold text-3xl">Exclusive</span>

        <nav className="flex items-center gap-10">
          <Link href="/" className="font-medium text-lg border-b-2 border-black pb-1">
            Home
          </Link>
          <Link href="#" onClick={(e) => e.preventDefault()} className="font-medium text-lg">
            Contact
          </Link>
          <Link href="#" onClick={(e) => e.preventDefault()} className="font-medium text-lg">
            About
          </Link>
          <Link href="/signup" className="font-bold text-lg">
            Sign Up
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-100 rounded px-4 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 outline-none w-56 text-base"
            />
            <button aria-label="Search">
              <FiSearch size={20} />
            </button>
          </div>

          <button aria-label="Favorites">
            <FiHeart size={24} />
          </button>

          <button aria-label="Cart">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
