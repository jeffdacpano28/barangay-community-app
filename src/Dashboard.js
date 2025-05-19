import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Announcements Sidebar */}
        <div
          className="w-1/5 bg-yellow-50 p-4 cursor-pointer hover:bg-yellow-100"
          onClick={() => navigate("/announcements")}
        >
          <h2 className="text-xl font-semibold mb-2">📢 Announcements</h2>
          <p>No announcements</p>
        </div>

        {/* Center Dashboard Content */}
        <div className="w-3/5 p-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Community App Dashboard</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/certificates")}
              className="bg-blue-100 hover:bg-blue-200 py-4 rounded-xl shadow"
            >
              Issuance of Certificate
            </button>

            <button
              onClick={() => navigate("/blotters")}
              className="bg-blue-100 hover:bg-blue-200 py-4 rounded-xl shadow"
            >
              Blotter Reporting
            </button>

            <button
              className="bg-blue-100 py-4 rounded-xl shadow"
              onClick={() => navigate("/equipment")}
            >
              Borrow Barangay Equipment
            </button>

            <button
              className="bg-blue-100 py-4 rounded-xl shadow"
              onClick={() => navigate("/volunteer")}
            >
              Volunteer Programs
            </button>

            <button
              className="bg-blue-100 py-4 rounded-xl shadow"
              onClick={() => navigate("/events")}
            >
              Event Scheduling
            </button>
          </div>
        </div>

        {/* Profile Sidebar */}
        <div
          className="w-1/5 bg-blue-50 p-4 cursor-pointer hover:bg-blue-100 text-right"
          onClick={() => navigate("/profile")}
        >
          <h2 className="text-xl font-semibold mb-2">👤 Profile</h2>
          <p>Loading...</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
