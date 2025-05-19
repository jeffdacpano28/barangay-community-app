// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">Barangay App</div>
      <div className="space-x-4">
        {/* <Link to="/dashboard">Dashboard</Link> */}
        {/* <Link to="/certificate">Certificates</Link> */}
        {/* <Link to="/blotter">Blotters</Link> */}

      </div>
    </nav>
  );
};

export default Navbar;
