import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboardPage";

function AdminAuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<AdminDashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AdminAuthenticatedApp;
