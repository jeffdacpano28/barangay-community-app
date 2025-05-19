// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import CertificatePage from "./CertificatePage";
import BlotterPage from "./BlotterPage";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Auth />} />

        {/* Protected routes with layout */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/certificates"
          element={
            <PrivateRoute>
              <Layout>
                <CertificatePage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/blotters"
          element={
            <PrivateRoute>
              <Layout>
                <BlotterPage />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
