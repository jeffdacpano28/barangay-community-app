import React, { useState } from "react";

const EventPage = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    organizer: "",
    contact: "",
    date: "",
    time: "",
    location: "",
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event request submitted successfully!");
    console.log(formData);
    // Here you can connect this to Firebase or another backend
  };

  return (
    <div style={styles.container}>
      <h2>Event Scheduling Request</h2>
      <p>Fill out the form below to request an event in the barangay.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          required
          value={formData.eventName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="organizer"
          placeholder="Organizer's Name"
          required
          value={formData.organizer}
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
          name="location"
          placeholder="Venue / Location"
          required
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="purpose"
          placeholder="Purpose or Description of the Event"
          required
          value={formData.purpose}
          onChange={handleChange}
          style={{ ...styles.input, height: "100px", resize: "none" }}
        />
        <button type="submit" style={styles.button}>Submit Event Request</button>
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
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EventPage;
