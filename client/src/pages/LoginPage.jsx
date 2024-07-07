import { useState } from "react";
import FacebookIcon from "../assets/icons/facebook-icon.svg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login({ email, password });
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      {/* รอแก้ เพิ่ม navbar */}
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
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="กรุณากรอกอีเมล"
                required
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
                required
              />
            </div>
            {error && <div className="mb-4 text-red-600">{error}</div>}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                  className="w-5 h-5 mr-2"
                  alt="Facebook Icon"
                />
                เข้าสู่ระบบด้วย Facebook
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:underline">ลงทะเบียน</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
