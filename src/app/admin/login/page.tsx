"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen bg-matte-black flex flex-col justify-center items-center p-6">
      <div className="bg-charcoal p-12 border border-white/10 w-full max-w-md text-center">
        <h1 className="font-serif text-3xl text-champagne mb-2">Aura Admin</h1>
        <p className="text-warm-white/50 text-sm mb-8">Enter your password to access the dashboard</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-champagne transition-colors text-center tracking-widest text-warm-white"
          />
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button
            type="submit"
            className="w-full bg-champagne text-matte-black py-3 uppercase tracking-widest text-sm font-medium hover:bg-champagne-light transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
