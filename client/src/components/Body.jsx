import React from "react";
import home_body from "../assets/images/home_body.jpg";
import house from "../assets/images/house.png";

const Body = () => {
  return (
    <header className="relative">
      <img src={home_body} alt="Point Guy" className="h-224" />
      <img
        src={house}
        alt="house"
        className="absolute right-10 top-0  z-0 h-224"
        style={{ transform: "translateX(10%)" }}
      />
      <div
        className="absolute inset-0 bg-blue-900 opacity-85 flex items-center justify-between"
        style={{ backgroundColor: "#336DF2" }}
      >
        <div className="text-left ml-auto max-w-md p-8 relative">
          <h1 className="text-4xl font-bold text-white relative z-10">
            มาร่วมเป็นพนักงานซ่อม กับ HomeServices
          </h1>
          <p className="text-white mt-10 relative z-10">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </p>
          <h1 className="text-2xl font-bold mt-10 text-white relative z-10">
            ติดต่อมาที่อีเมล: job@homeservices.co
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Body;
