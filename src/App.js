import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import CertificatePage from "./CertificatePage";
import BlotterPage from "./BlotterPage";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./Navbar";
import BorrowPage from "./BorrowPage";
import VolunteerPage from "./VolunteerPage";
import EventPage from "./EventPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Auth />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Dashboard />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/certificate"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <CertificatePage />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/blotter"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <BlotterPage />
              </>
            </PrivateRoute>
          }
        />
        <Route 
          path="/borrow" 
          element={
            <PrivateRoute>
              <>
              <Navbar />
              <BorrowPage />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/volunteer" 
          element={
            <PrivateRoute>
              <>
              <Navbar />
              <VolunteerPage />
              </>
            </PrivateRoute>
          }
        />
        <Route 
          path="/events" 
          element={
            <PrivateRoute>
              <>
              <Navbar />
              <EventPage />
              </>
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
