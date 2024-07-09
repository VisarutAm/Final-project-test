import React from "react";
import PointGuy from "../assets/images/PointGuy.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const handleMenuItemClick = (path) => {
    navigate(path);
  };
  const navigate = useNavigate();
  return (
    <header className="bg-blue-100 py-4 lg:py-12">
      <div className="container mx-auto px-4 lg:px-10%">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 lg:mt-8 mb-4 lg:mb-8 lg:mx-auto lg:w-3/4">
          <div className="text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
              เรื่องบ้าน...ให้เราช่วยดูแลคุณ
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-black mt-2 lg:mt-4 font-bold">
              “สะดวก ราคาคุ้มค่า เชื่อถือได้”
            </p>
            <p className="text-gray-700 mt-2 lg:mt-6 text-sm sm:text-base lg:text-lg">
              ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน โดยพนักงานมืออาชีพ
            </p>
            <button
              onClick={() => handleMenuItemClick("/servicelist")}
              className="mt-4 px-4 sm:px-6 py-2 bg-blue-500 text-white rounded"
            >
              เช็คราคาบริการ
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative" style={{ marginBottom: "-28px" }}>
              <img
                src={PointGuy}
                alt="Point Guy"
                className="h-96 lg:h-120 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
