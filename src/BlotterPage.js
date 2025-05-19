import React, { useState } from 'react';
import Navbar from './Navbar'; // ✅ Import Navbar

export default function BlotterPage() {
  const [incident, setIncident] = useState('');
  const [blotters, setBlotters] = useState([]);

  // TODO: fetch blotters from Firestore here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!incident.trim()) return alert('Please describe the incident');

    // TODO: Save blotter to Firestore
    alert(`Blotter submitted: ${incident}`);
    setIncident('');
  };

  return (
    <>
      <Navbar /> {/* ✅ Navbar added */}
      <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-6">
        <h2 className="text-2xl font-semibold mb-4">File Blotter</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded mb-4"
            placeholder="Describe the incident"
            rows={4}
            value={incident}
            onChange={(e) => setIncident(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Your Blotters</h3>
          {blotters.length === 0 ? (
            <p>No blotters submitted.</p>
          ) : (
            <ul className="list-disc list-inside">
              {blotters.map((b, i) => (
                <li key={i}>{b.description} - Status: {b.status}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
