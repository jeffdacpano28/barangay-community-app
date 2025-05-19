import React from "react";

const programs = [
  { id: 1, name: "Street Cleanup", description: "Help keep our streets clean and litter-free." },
  { id: 2, name: "Neighborhood Watch", description: "Join to help keep our community safe." },
  { id: 3, name: "Park Beautification", description: "Assist in planting flowers and maintaining parks." },
  { id: 4, name: "Food Drive Support", description: "Help organize and distribute food to families in need." },
  { id: 5, name: "Community Mural Painting", description: "Participate in beautifying walls with art." },
];

const VolunteerPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Volunteer Programs</h2>
      <p style={styles.intro}>
        Get involved in our community by joining one of these volunteer programs designed to improve our city neighborhood.
      </p>
      <ul style={styles.list}>
        {programs.map((program) => (
          <li key={program.id} style={styles.listItem}>
            <strong>{program.name}</strong>: {program.description}
          </li>
        ))}
      </ul>
      <button style={styles.button} onClick={() => alert("Thank you for your interest! We will contact you soon.")}>
        Sign Up Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    color: "#2c3e50",
  },
  intro: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#34495e",
  },
  list: {
    textAlign: "left",
    marginBottom: "1.5rem",
  },
  listItem: {
    marginBottom: "0.8rem",
    fontSize: "1rem",
    color: "#2c3e50",
  },
  button: {
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: 5,
    cursor: "pointer",
  },
};

export default VolunteerPage;
