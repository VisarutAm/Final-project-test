import React from "react";
import HouseLogo from "../assets/images/HouseLogo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={HouseLogo} alt="HomeServices Logo" className="h-10" />
          <a href="#" className="text-blue-500 text-2xl font-bold">
            HomeServices
          </a>
          <a href="#" className="text-blue-500 text-black mt-1">
            บริการของเรา
          </a>
        </div>
        <div className="flex items-center ml-4">
          <a
            href="#"
            className="text-blue-500 border border-blue-500 px-4 py-2 rounded-lg"
          >
            เข้าสู่ระบบ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
