// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Barangay App</div>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/certificates" className="hover:underline">Certificates</Link>
        <Link to="/blotters" className="hover:underline">Blotters</Link>
      </div>
    </nav>
  );
};

export default Navbar;
