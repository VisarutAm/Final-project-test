import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode"; // ใช้ jwt-decode จาก package

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userDataFromToken = jwtDecode(token);
      setState((prevState) => ({ ...prevState, user: userDataFromToken }));
    }
  }, []);

  const register = async (data) => {
    try {
      await axios.post("http://localhost:4000/auth/register", data);
      navigate("/login");
    } catch (error) {
      setState({
        ...state,
        error: error.response?.data?.message || "การลงทะเบียนล้มเหลว",
      });
    }
  };

  const login = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:4000/auth/login/user",
        data
      ); // เปลี่ยน endpoint สำหรับผู้ใช้
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken });
      navigate("/");
    } catch (error) {
      setState({
        ...state,
        error: error.response?.data?.error || "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null, error: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
