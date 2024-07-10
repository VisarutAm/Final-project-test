import React from "react";
import { useAdminAuth } from "../contexts/adminAuthentication";

function AdminDashboardPage() {
  const { logout } = useAdminAuth();

  return (
    <>
      <div>This is the dashboard page for admin</div>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default AdminDashboardPage;
