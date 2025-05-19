import React, { useState } from "react";

const CertificatePage = () => {
  const [certificateType, setCertificateType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request submitted for: ${certificateType}`);
    // You can add actual form handling here
  };

  return (
    <div style={styles.container}>
      <h2>Issuance of Certificate</h2>
      <p>Here you can request an official barangay certificate.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <select
          value={certificateType}
          onChange={(e) => setCertificateType(e.target.value)}
          required
          style={styles.input}
        >
          <option value="" disabled>Select Certificate Type</option>
          <option value="Residency">Certificate of Residency</option>
          <option value="Indigency">Certificate of Indigency</option>
          <option value="Barangay Clearance">Barangay Clearance</option>
          <option value="Solo Parent">Solo Parent Certificate</option>
          <option value="Business Clearance">Business Clearance</option>
        </select>

        <input type="text" placeholder="Full Name" required style={styles.input} />
        <input type="text" placeholder="Purpose" required style={styles.input} />
        <button type="submit" style={styles.button}>Submit Request</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CertificatePage;
