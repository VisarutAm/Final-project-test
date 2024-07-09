import { Routes, Route } from "react-router-dom";
import HomePage_user from "./HomePage_user";
import NotFoundPage from "./NotFoundPage";
import ServiceList from "./ServiceList";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage_user />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/servicelist" element={<ServiceList />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
