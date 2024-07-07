import React from "react";
import PointGuy from "../assets/images/PointGuy.png";

const Header = () => {
  return (
    <header className="bg-blue-100 py-16">
      <div className="container mt-20 mb-16  mx-auto px-4 flex items-center justify-between">
        <div className="text-left">
          <h1 className="text-4xl  font-bold text-blue-600">
            เรื่องบ้าน...ให้เราช่วยดูแลคุณ
          </h1>
          <p className="text-2xl text-black mt-4 font-bold">
            “สะดวก ราคาคุ้มค่า เชื่อถือได้”
          </p>
          <p className="text-gray-700 mt-10">
            ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน โดยพนักงานมืออาชีพ
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded">
            เช็คราคาบริการ
          </button>
        </div>
        <img
          src={PointGuy}
          alt="Point Guy"
          className="h-224 absolute right-10  "
        />
      </div>
    </header>
  );
};

export default Header;
