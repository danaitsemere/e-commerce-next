"use client";

import { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Sign up to Exclusive</h2>
      <p className="text-sm">Enter your details below</p>
      <input
        type="text"
        placeholder="Email or Phone Number"
        className="border-b py-2 w-full outline-none"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        autoComplete="username"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b py-2 w-full outline-none"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
        autoComplete="current-password"
      />

      <div className="flex justify-center my-4">
        <Image
          src="/signup-banner.jpg"
          alt="Sign up banner"
          width={400}
          height={150}
          className="rounded"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          type="submit"
          className="bg-pink-600 text-white py-2 px-8 rounded font-bold"
        >
          Sign Up
        </button>
        <a href="#" className="text-pink-600 text-sm ml-2">
          Already have an account?
        </a>
      </div>
    </form>
  );
}