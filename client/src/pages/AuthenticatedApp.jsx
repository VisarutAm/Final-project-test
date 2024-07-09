import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import ServiceList from "./ServiceList";
import PolicyPage from "./PolicyPage";
import TermsPage from "./TermsPage";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/servicelist" element={<ServiceList />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
