// src/Layout.js
import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="p-4">{children}</div>
    </>
  );
}
