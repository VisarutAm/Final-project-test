import React from "react";
import bannerImg from "../assets/images/banner.jpeg";

function Banner() {
  return (
    <div className="relative w-full h-[168px] md:h-[240px]">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-full object-cover"
        style={{ clipPath: "inset(0px 0px 0px 0px)" }}
      />
      <div className="absolute inset-0 bg-[#001951] bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-2xl md:text-4xl font-bold">บริการของเรา</h1>
        <p className="mt-2 text-center text-sm md:text-lg">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
          โดยพนักงานแม่บ้าน และช่างมืออาชีพ
        </p>
      </div>
    </div>
  );
}

export default Banner;
