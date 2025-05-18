import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h2>Community App Dashboard</h2>
      <ul>
        <li><button onClick={() => alert("Issuance of Certificate")}>Issuance of Certificate</button></li>
        <li><button onClick={() => alert("Blotter Reporting")}>Blotter Reporting</button></li>
        <li><button onClick={() => alert("Borrow Equipment")}>Borrow Barangay Equipment</button></li>
        <li><button onClick={() => alert("Volunteer Programs")}>Volunteer Programs</button></li>
        <li><button onClick={() => alert("Event Scheduling")}>Event Scheduling</button></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
