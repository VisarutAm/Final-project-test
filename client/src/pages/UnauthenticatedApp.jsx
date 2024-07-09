import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import ServiceList from "./ServiceList";
import CartPage_1 from "./CartPage_1";
import PolicyPage from "./PolicyPage";
import TermsPage from "./TermsPage";
import AdminLoginPage from "./AdminLoginPage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/servicelist" element={<ServiceList />} />
        <Route path="/cart" element={<CartPage_1 />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
