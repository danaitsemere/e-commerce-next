"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <form className="space-y-6 w-full">
      <h2 className="text-2xl font-bold">Log in to Exclusive</h2>
      <p className="text-sm">Enter your details below</p>
      <input
        type="text"
        placeholder="Email or Phone Number"
        className="border-b py-2 w-full outline-none"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b py-2 w-full outline-none"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
      <div className="flex items-center justify-between mt-4">
        <button type="submit" className="bg-pink-600 text-white py-2 px-8 rounded font-bold">
          Log In
        </button>
        <a href="#" className="text-pink-600 text-sm ml-2">Forget Password?</a>
      </div>
    </form>
  );
}