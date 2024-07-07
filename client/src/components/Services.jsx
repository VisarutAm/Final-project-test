import React from "react";
import SellTag from "../assets/images/SellTag.png";
import exampleImage from "../assets/example.png";

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
          บริการยอดฮิตของเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <img
              src={exampleImage}
              alt="Service Image"
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">ทำความสะอาดทั่วไป</h3>
            <div className="flex items-center mb-4">
              <img
                src={SellTag}
                alt="SellTag Logo"
                className=" mr-2 h-4 w-4 "
              />
              <p className="text-sm text-gray-700">
                ค่าบริการประมาณ 500 - 1,000 ฿
              </p>
            </div>
            <button className="text-blue-500 underline">เลือกบริการ</button>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <img
              src={exampleImage}
              alt="Service Image"
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">ทำความสะอาดทั่วไป</h3>
            <div className="flex items-center mb-4">
              <img
                src={SellTag}
                alt="SellTag Logo"
                className=" mr-2 h-4 w-4 "
              />
              <p className="text-sm text-gray-700">
                ค่าบริการประมาณ 500 - 1,000 ฿
              </p>
            </div>
            <button className="text-blue-500 underline">เลือกบริการ</button>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <img
              src={exampleImage}
              alt="Service Image"
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">ทำความสะอาดทั่วไป</h3>
            <div className="flex items-center mb-4">
              <img
                src={SellTag}
                alt="SellTag Logo"
                className=" mr-2 h-4 w-4 "
              />
              <p className="text-sm text-gray-700">
                ค่าบริการประมาณ 500 - 1,000 ฿
              </p>
            </div>
            <button className="text-blue-500 underline">เลือกบริการ</button>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-500 text-white rounded">
            ดูบริการทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
