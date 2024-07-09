import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [state, setState] = useState({
    admin: null,
    loading: false,
    error: null,
  });

  const navigate = useNavigate();

  const adminLogin = async (data) => {
    setState({ ...state, loading: true });
    try {
      const result = await axios.post(
        "http://localhost:4000/admin/login",
        data
      );
      const token = result.data.token;
      localStorage.setItem("adminToken", token);
      const adminDataFromToken = jwtDecode(token);
      setState({ admin: adminDataFromToken, loading: false, error: null });
      navigate("/admin/dashboard");
    } catch (error) {
      setState({
        admin: null,
        loading: false,
        error: error.response?.data?.message || "Invalid email or password",
      });
    }
  };

  const adminLogout = () => {
    localStorage.removeItem("adminToken");
    setState({ admin: null, loading: false, error: null });
    navigate("/admin/login");
  };

  return (
    <AdminAuthContext.Provider value={{ state, adminLogin, adminLogout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
