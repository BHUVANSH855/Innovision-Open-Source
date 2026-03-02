"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setType("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulated success (can connect to API later)
    setType("success");
    setMessage("Subscribed successfully! 🎉");
    setEmail("");
  };

  return (
    <div className="space-y-4 max-w-xs">
      <h4 className="font-light text-foreground">Newsletter</h4>
      <p className="text-sm text-muted-foreground font-light">
        Subscribe to get updates about new features and announcements.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
        >
          Subscribe
        </button>
      </form>

      {message && (
        <p
          className={`text-xs ${
            type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}