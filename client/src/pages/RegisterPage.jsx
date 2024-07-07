import { useState } from "react";
import FacebookIcon from "../assets/icons/facebook-icon.svg";

function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fullname,
      tel,
      email,
      password,
    };
    register(data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg border border-gray-300 shadow-md">
          <h2 className="text-2xl font-medium mb-6 text-center text-blue-900">
            ลงทะเบียน
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                ชื่อ - นามสกุล
              </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="กรุณากรอกชื่อ นามสกุล"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-gray-700"
              >
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                id="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="กรุณากรอกอีเมล"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                รหัสผ่าน
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </div>
            <div
              className="mb-4 flex items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <input type="checkbox" id="terms" className="h-4 w-4" />
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
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
            <button className="text-blue-600 hover:underline">
              กลับไปหน้าเข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
