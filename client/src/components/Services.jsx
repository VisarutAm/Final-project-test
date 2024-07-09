import React from "react";
import SellTag from "../assets/images/SellTag.png";
import exampleImage from "../assets/example.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 lg:mt-8 mb-4 lg:mb-8 lg:mx-auto lg:w-3/4"> */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-8 ">
          บริการยอดฮิตของเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-col lg:flex-row items-start lg:items-center justify-between mt-4 lg:mt-8 mb-4 lg:mb-8 lg:mx-auto lg:w-3/4">
          <div className="bg-white p-4 lg:p-6 rounded shadow-md w-full">
            <img
              src={exampleImage}
              alt="Service Image"
              className="h-40 lg:h-56 w-full object-cover rounded mb-4"
            />
            <p className="mt-1 mr-1 ml-1 mb-3 lg:mb-5 text-xs lg:text-sm text-blue-500 bg-blue-100 inline-block p-1 rounded-md">
              บริการทั่วไป
            </p>
            <h3 className="text-lg lg:text-xl font-bold mb-2">
              ทำความสะอาดทั่วไป
            </h3>
            <div className="flex items-center mb-3 lg:mb-4">
              <img
                src={SellTag}
                alt="SellTag Logo"
                className="mr-2 h-4 w-4 lg:h-5 lg:w-5"
              />
              <p className="text-gray-700 text-sm lg:text-base">
                ค่าบริการประมาณ 500 - 1,000 ฿
              </p>
            </div>
            <button className="text-blue-500 underline text-sm lg:text-base">
              เลือกบริการ
            </button>
          </div>

          {/* ไว้เรนเด้อ */}
          <div className="bg-white p-4 lg:p-6 rounded shadow-md w-full">
            <img
              src={exampleImage}
              alt="Service Image"
              className="h-40 lg:h-56 w-full object-cover rounded mb-4"
            />
            <p className="mt-1 mr-1 ml-1 mb-3 lg:mb-5 text-xs lg:text-sm text-blue-500 bg-blue-100 inline-block p-1 rounded-md">
              บริการทั่วไป
            </p>
            <h3 className="text-lg lg:text-xl font-bold mb-2">
              ทำความสะอาดทั่วไป
            </h3>
            <div className="flex items-center mb-3 lg:mb-4">
              <img
                src={SellTag}
                alt="SellTag Logo"
                className="mr-2 h-4 w-4 lg:h-5 lg:w-5"
              />
              <p className="text-gray-700 text-sm lg:text-base">
                ค่าบริการประมาณ 500 - 1,000 ฿
              </p>
            </div>
            <button className="text-blue-500 underline text-sm lg:text-base">
              เลือกบริการ
            </button>
          </div>
          <div className="bg-white p-4 lg:p-6 rounded shadow-md w-full">
            <img
              src={exampleImage}
              alt="Service Image"
              className="h-40 lg:h-56 w-full object-cover rounded mb-4"
            />
            <p className="mt-1 mr-1 ml-1 mb-3 lg:mb-5 text-xs lg:text-sm text-blue-500 bg-blue-100 inline-block p-1 rounded-md">
              บริการทั่วไป
            </p>
            <h3 className="text-lg lg:text-xl font-bold mb-2">
              ทำความสะอาดทั่วไป
            </h3>
            <div className="flex items-center mb-3 lg:mb-4">
              <img
                src={SellTag}
                alt="SellTag Logo"
                className="mr-2 h-4 w-4 lg:h-5 lg:w-5"
              />
              <p className="text-gray-700 text-sm lg:text-base">
                ค่าบริการประมาณ 500 - 1,000 ฿
              </p>
            </div>
            <button className="text-blue-500 underline text-sm lg:text-base">
              เลือกบริการ
            </button>
          </div>
          {/* ไว้เรนเด้อ */}
        </div>
        <div className="text-center mt-6 lg:mt-8">
          <button
            onClick={() => navigate("/servicelist")}
            className="px-4 lg:px-6 py-2 bg-blue-500 text-white rounded"
          >
            ดูบริการทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
