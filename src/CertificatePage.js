import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // ✅ Import Navbar

const certificateTypes = [
  'Residency Certificate',
  'Clearance',
  'Indigency Certificate',
  'Business Permit',
];

export default function CertificatePage() {
  const [selected, setSelected] = useState('');
  const [requests, setRequests] = useState([]);

  // TODO: fetch requests from Firestore here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return alert('Please select a certificate type');

    // TODO: Save request to Firestore
    alert(`Requested: ${selected}`);
    setSelected('');
  };

  return (
    <>
      <Navbar /> {/* ✅ Navbar added here */}
      <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-6">
        <h2 className="text-2xl font-semibold mb-4">Request Certificate</h2>
        <form onSubmit={handleSubmit}>
          <select
            className="w-full p-2 border rounded mb-4"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select certificate type</option>
            {certificateTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Request
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Your Requests</h3>
          {requests.length === 0 ? (
            <p>No requests yet.</p>
          ) : (
            <ul className="list-disc list-inside">
              {requests.map((req, i) => (
                <li key={i}>{req.type} - Status: {req.status}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
