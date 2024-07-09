import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import ServiceList from "./ServiceList";
import CartPage_1 from "./CartPage_1";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/servicelist" element={<ServiceList />} />
        <Route path="/cart" element={<CartPage_1 />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
