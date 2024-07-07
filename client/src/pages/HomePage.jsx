import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div>this is home page</div>
      <button
        onClick={() => navigate("/register")}
        className="text-blue-600 hover:underline"
      >
        ลงทะเบียน
      </button>
      <br />
      <button
        onClick={() => navigate("/login")}
        className="text-blue-600 hover:underline"
      >
        กลับไปหน้าเข้าสู่ระบบ
      </button>
    </>
  );
}

export default HomePage;
