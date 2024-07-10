import React from "react";
import { useAuth } from "./contexts/authentication";
import { useAdminAuth } from "./contexts/adminAuthentication";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";
import AdminAuthenticatedApp from "./pages/AdminAuthenticatedApp";

function App() {
  const { state: authState } = useAuth();
  const { state: adminState } = useAdminAuth();

  if (adminState.admin) {
    return <AdminAuthenticatedApp />;
  } else if (authState.user) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
}

export default App;
