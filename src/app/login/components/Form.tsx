"use client";
import { useState } from "react";
import Link from "next/link";


export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <div className="w-full max-w-[380px] mx-auto">
      <h2 className="text-3xl font-bold mb-2">Log in to Exclusive</h2>
      <p className="mb-6 text-gray-700">Enter your details below</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="email"
          placeholder="Email or Phone Number"
          autoComplete="email"
          className="border-b border-gray-300 bg-transparent py-2 px-1 text-base outline-none"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          className="border-b border-gray-300 bg-transparent py-2 px-1 text-base outline-none"
          value={form.password}
          onChange={handleChange}
          required
        />
        <div className="flex items-center justify-between mt-2">
          <button
            type="submit"
            className="bg-[#DB4444] hover:bg-[#b91c1c] transition text-white font-semibold rounded-md py-3 text-base w-36"
          >
            Log In
          </button>
          <Link href="/forgot-password" className="text-[#DB4444] hover:underline font-semibold text-base">
            Forget Password?
          </Link>
        </div>
      </form>
    </div>
  );
}