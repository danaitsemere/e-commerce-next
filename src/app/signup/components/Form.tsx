"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
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
      <h2 className="text-3xl font-bold mb-2">Create an account</h2>
      <p className="mb-6 text-gray-700">Enter your details below</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="name"
          className="border-b border-gray-300 bg-transparent py-2 px-1 text-base outline-none"
          value={form.name}
          onChange={handleChange}
          required
        />

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
          autoComplete="new-password"
          className="border-b border-gray-300 bg-transparent py-2 px-1 text-base outline-none"
          value={form.password}
          onChange={handleChange}
          required
        />
        
        <button
          type="submit"
          className="bg-[#DB4444] hover:bg-[#b91c1c] transition text-white font-semibold rounded-md py-3 text-base mt-2"
        >
          Create Account
        </button>
      </form>
      <button
        type="button"
        className="flex items-center justify-center border border-gray-300 w-full py-3 rounded-md mt-4 gap-2 font-semibold text-base text-black bg-white hover:bg-gray-100 transition"
      >
        <FcGoogle className="text-2xl" />
        Sign up with Google
      </button>
      <p className="mt-7 text-center text-gray-700 text-base">
        Already have account?{" "}
        <Link href="/login" className="ml-1 underline text-black">
          Log in
        </Link>
      </p>
    </div>
  );
}