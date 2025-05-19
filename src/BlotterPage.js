import React from "react";

const BlotterPage = () => {
  return (
    <div style={styles.container}>
      <h2>Blotter Reporting</h2>
      <p>Report an incident to the barangay officials.</p>
      <form style={styles.form}>
        <input type="text" placeholder="Full Name" required style={styles.input} />
        <textarea placeholder="Incident Details" required style={styles.textarea} />
        <button type="submit" style={styles.button}>Submit Report</button>
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
  textarea: {
    padding: "10px",
    width: "300px",
    height: "100px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BlotterPage;
