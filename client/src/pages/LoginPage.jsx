import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import ExclamationIcon from "../assets/icons/exclamation-icon.svg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, state } = useAuth();

  const validateField = (id, value) => {
    const newErrors = { ...errors };
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (id === "email") {
      if (!value || !emailPattern.test(value)) {
        newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
      } else {
        delete newErrors.email;
      }
    } else if (id === "password") {
      if (!value) {
        newErrors.password = "กรุณากรอกรหัสผ่าน";
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailErrors = validateField("email", email);
    const passwordErrors = validateField("password", password);

    if (
      Object.keys(emailErrors).length === 0 &&
      Object.keys(passwordErrors).length === 0
    ) {
      await login({ email, password });
    } else {
      setErrors({
        ...emailErrors,
        ...passwordErrors,
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
    validateField(id, value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg border border-gray-300 shadow-md">
        <h2 className="text-2xl font-medium mb-6 text-center text-blue-900">
          เข้าสู่ระบบ
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              อีเมล{errors.email && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="กรุณากรอกอีเมล"
              />
              {errors.email && (
                <img
                  src={ExclamationIcon}
                  alt="error"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                />
              )}
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              รหัสผ่าน
              {errors.password && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="กรุณากรอกรหัสผ่าน"
              />
              {errors.password && (
                <img
                  src={ExclamationIcon}
                  alt="error"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          {state.error && (
            <div className="mb-4 text-red-600">{state.error}</div>
          )}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:hover:bg-blue-800"
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <div className="mb-4 text-center">หรือเข้าสู่ระบบใช้ผ่าน</div>
          <div>
            <button
              type="button"
              className="w-full bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md flex items-center justify-center hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-400"
            >
              <img
                src={FacebookIcon}
                className="w-5 h-5 mr-2 text-blue-600"
                alt="Facebook Icon"
              />
              เข้าสู่ระบบด้วย Facebook
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline"
          >
            ลงทะเบียน
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
