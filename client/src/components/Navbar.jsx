import React from "react";
import HouseLogo from "../assets/images/HouseLogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="/">
            <img
              src={HouseLogo}
              alt="HomeServices Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <a href="/" className="text-blue-500 text-lg sm:text-2xl font-bold">
            HomeServices
          </a>
          <a
            href="/servicelist"
            className="text-black text-sm sm:text-base pt-1"
          >
            บริการของเรา
          </a>
        </div>
        <div className="flex items-center ml-2 sm:ml-4">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 border border-blue-500 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
