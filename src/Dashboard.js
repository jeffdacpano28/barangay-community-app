import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [announcements, setAnnouncements] = useState([]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, auth.currentUser.email);
      alert("Password reset email sent.");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };

    const fetchAnnouncements = async () => {
      const snapshot = await getDocs(collection(db, "announcements"));
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAnnouncements(items);
    };

    fetchUserData();
    fetchAnnouncements();
  }, []);

  const actions = [
    { label: "Issuance of Certificate", path: "/certificate" },
    { label: "Blotter Reporting", path: "/blotter" },
    { label: "Borrow Barangay Equipment", path: "/borrow" },
    { label: "Volunteer Programs", path: "/volunteer" },
      { label: "Event Scheduling", path: "/events" },
];


  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <div style={styles.announcements}>
          <h3>📢 Announcements</h3>
          {announcements.length > 0 ? (
            <ul>
              {announcements.map((a) => (
                <li key={a.id}><strong>{a.title}</strong><br />{a.message}</li>
              ))}
            </ul>
          ) : <p>No announcements</p>}
        </div>
        <div style={styles.profile}>
          <h3>👤 Profile</h3>
          {userData ? (
            <div>
              <p><strong>Name:</strong> {userData.fullName}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <button onClick={handleResetPassword} style={styles.button}>Reset Password</button>
              <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>
          ) : <p>Loading...</p>}
        </div>
      </div>

      <div style={styles.main}>
        <h2>Community App Dashboard</h2>
        <div style={styles.actions}>
          {actions.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  announcements: {
    width: "45%",
    backgroundColor: "#fff8dc",
    padding: "20px",
    borderRadius: "10px",
    height: "fit-content",
  },
  profile: {
    width: "45%",
    backgroundColor: "#f0f8ff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "right",
  },
  main: {
    textAlign: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    width: "220px",
    padding: "20px",
    backgroundColor: "#e6f7ff",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  logoutButton: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Dashboard;
