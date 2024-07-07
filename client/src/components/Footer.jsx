import React from "react";
import HouseLogo from "../assets/images/HouseLogo.png";
import Tel_icon from "../assets/images/Tel_Icon.png";
import Mail_icon from "../assets/images/Mail_Icon.png";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto mb-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <img
              src={HouseLogo}
              alt="HomeServices Logo"
              className="w-12 h-12"
            />
            <span className="ml-3 text-2xl font-bold text-blue-500">
              HomeServices
            </span>
          </div>
          <div className="text-sm text-center md:text-left mt-4 md:mt-0">
            <p className="text-black">บริษัท โฮมเซอร์วิสเซส จำกัด</p>
            <p className="text-gray-600">
              452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
            </p>
          </div>
          <div className="text-sm text-left mt-4 md:mt-0">
            <div className="flex items-center">
              <img src={Tel_icon} alt="Tel_icon" className="mr-2 h-4 w-4" />
              <p className="text-gray-600">080-540-6357</p>
            </div>
            <div className="flex items-center mt-2">
              <img src={Mail_icon} alt="Mail_icon" className="mr-2 h-4 w-4" />
              <p className="text-gray-600">contact@homeservices.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 pb-4 pt-4 flex flex-col md:flex-row items-center justify-between bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            &copy; 2021 HomeServices.com All rights reserved
          </p>
          <div className="flex space-x-4  md:mt-0">
            <a href="#" className="text-gray-600 text-sm">
              เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
            </a>
            <a href="#" className="text-gray-600 text-sm">
              นโยบายความเป็นส่วนตัว
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
