"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  return (
    <form className="space-y-5 w-full">
      <h2 className="text-2xl font-bold">Create an account</h2>
      <p className="text-sm">Enter your details below</p>
      <input
        type="text"
        placeholder="Name"
        className="border-b py-2 w-full outline-none"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
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
      <button type="submit" className="bg-pink-600 text-white py-2 rounded font-bold w-full">
        Create Account
      </button>
      <button type="button" className="border py-2 rounded w-full flex items-center justify-center gap-2">
        <img src="/google.svg" alt="Google" className="w-5 h-5" /> Sign up with Google
      </button>
      <div className="text-center text-sm">
        Already have account?
        <a href="/login" className="text-pink-600 ml-2">Log in</a>
      </div>
    </form>
  );
}