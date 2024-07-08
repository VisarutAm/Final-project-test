import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import { useNavigate } from "react-router-dom";
import ExclamationIcon from "../assets/icons/exclamation-icon.svg";

function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { register, state } = useAuth();

  const validateFields = () => {
    let newErrors = {};

    if (!firstname) newErrors.firstname = "กรุณากรอกชื่อ";
    if (!lastname) newErrors.lastname = "กรุณากรอกนามสกุล";

    const telPattern = /^[0-9]{10}$/;
    if (!tel || !telPattern.test(tel))
      newErrors.tel = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)";

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailPattern.test(email))
      newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";

    if (!password) newErrors.password = "กรุณากรอกรหัสผ่าน";

    if (!isChecked) newErrors.checkbox = "กรุณายอมรับข้อตกลงและเงื่อนไข";

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateFields();
    if (Object.keys(newErrors).length === 0) {
      const data = {
        firstname,
        lastname,
        tel_num: tel,
        email,
        password,
      };
      await register(data);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newErrors = { ...errors };

    switch (id) {
      case "firstname":
        setFirstname(value);
        if (value) {
          delete newErrors.firstname;
        } else {
          newErrors.firstname = "กรุณากรอกชื่อ";
        }
        break;
      case "lastname":
        setLastname(value);
        if (value) {
          delete newErrors.lastname;
        } else {
          newErrors.lastname = "กรุณากรอกนามสกุล";
        }
        break;
      case "tel":
        const telPattern = /^[0-9]{10}$/;
        setTel(value);
        if (value && telPattern.test(value)) {
          delete newErrors.tel;
        } else {
          newErrors.tel = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)";
        }
        break;
      case "email":
        const emailPattern =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmail(value);
        if (value && emailPattern.test(value)) {
          delete newErrors.email;
        } else {
          newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
        }
        break;
      case "password":
        setPassword(value);
        if (value) {
          delete newErrors.password;
        } else {
          newErrors.password = "กรุณากรอกรหัสผ่าน";
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  return (
    <>
      {/* รอแก้ เพิ่ม navbar */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg border border-gray-300 shadow-md">
          <h2 className="text-2xl font-medium mb-6 text-center text-blue-900">
            ลงทะเบียน
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                ชื่อ
                {errors.firstname && <span className="text-red-500">*</span>}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.firstname ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกชื่อ"
                />
                {errors.firstname && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.firstname && (
                <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                นามสกุล
                {errors.lastname && <span className="text-red-500">*</span>}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.lastname ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกนามสกุล"
                />
                {errors.lastname && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.lastname && (
                <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-gray-700"
              >
                เบอร์โทรศัพท์
                {errors.tel && <span className="text-red-500">*</span>}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="tel"
                  value={tel}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.tel ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
                {errors.tel && (
                  <img
                    src={ExclamationIcon}
                    alt="error"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                )}
              </div>
              {errors.tel && (
                <p className="text-red-500 text-xs mt-1">{errors.tel}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                อีเมล
                {errors.email && <span className="text-red-500">*</span>}
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
            <div
              className="mb-4 flex items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="h-4 w-4"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                <span className={isHovered ? "text-blue-600" : ""}>ยอมรับ</span>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  ข้อตกลงและเงื่อนไข
                </a>{" "}
                และ{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  นโยบายความเป็นส่วนตัว
                </a>
              </label>
            </div>
            {errors.checkbox && (
              <p className="text-red-500 text-xs mt-1">{errors.checkbox}</p>
            )}
            {state.error && (
              <div className="mb-4 text-red-600">
                {state.error === "User already exists"
                  ? "อีเมลนี้ถูกใช้งานแล้ว"
                  : state.error}
              </div>
            )}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:hover:bg-blue-800"
              >
                ลงทะเบียน
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
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              กลับไปหน้าเข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
