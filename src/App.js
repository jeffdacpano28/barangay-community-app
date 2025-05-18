// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

<Button variant="primary">Click me</Button>

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
<button className="btn btn-primary">
  Click me
</button>
