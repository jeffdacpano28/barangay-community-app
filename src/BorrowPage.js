import React, { useState } from "react";

const BorrowPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    equipment: "",
    date: "",
    time: "",
    duration: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Equipment borrowing request submitted!");
    console.log(formData);
    // You can connect this to Firebase later
  };

  return (
    <div style={styles.container}>
      <h2>Borrow Barangay Equipment</h2>
      <p>Fill in the form below to request to borrow equipment from the barangay.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          value={formData.fullName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number or Email"
          required
          value={formData.contact}
          onChange={handleChange}
          style={styles.input}
        />
        <select
          name="equipment"
          required
          value={formData.equipment}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Equipment</option>
          <option value="Chairs">Chairs</option>
          <option value="Tables">Tables</option>
          <option value="Sound System">Sound System</option>
          <option value="Tent">Tent</option>
          <option value="Projector">Projector</option>
        </select>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 3 hours, 1 day)"
          required
          value={formData.duration}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="reason"
          placeholder="Reason for Borrowing"
          required
          value={formData.reason}
          onChange={handleChange}
          style={{ ...styles.input, height: "100px", resize: "none" }}
        />
        <button type="submit" style={styles.button}>Submit Request</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  input: {
    padding: "10px",
    width: "320px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6f42c1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BorrowPage;
