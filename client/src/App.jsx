import React, { useEffect } from "react";
import { useAuth } from "./contexts/authentication";
import { useAdminAuth } from "./contexts/adminAuthentication";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";
import AdminAuthenticatedApp from "./pages/AdminAuthenticatedApp";

function App() {
  const { state: authState } = useAuth();
  const { state: adminState } = useAdminAuth();

  return (
    <div>
      {adminState.admin ? (
        <AdminAuthenticatedApp />
      ) : authState.user ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
