import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./contexts/authentication";
import { AdminAuthProvider } from "./contexts/adminAuthentication";
import { BrowserRouter } from "react-router-dom";
import jwtInterceptor from "./utils/jwtInterceptor";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AdminAuthProvider>
          <App />
        </AdminAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
