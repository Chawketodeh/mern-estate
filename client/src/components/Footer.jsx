import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Dar Hub. All rights reserved.</p>
        <div className="flex gap-8 mt-2 md:mt-0">
          <Link to="/" className="hover:underline text-sm">
            Home
          </Link>
          <Link to="/about" className="hover:underline text-sm">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
