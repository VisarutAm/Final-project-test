import { useState } from "react";

function ServiceList() {
  const [counter, setCounter] = useState(0);
  const handlePlus = () => {};
  return (
    <div className="background w-full min-h-full pl-[160px] pt-[111px]">
      <div className="container w-[735px] h-auto bg-white borer-solid border-[1px] border-[#CCD0D7] rounded-[8px] flex flex-col p-[24px]">
        <p className="text-[20px] text-[#646C80]">เลือกรายการบริการล้างแอร์</p>
        <div className="list-container flex flex-col mt-[20px]">
          <div className="list-detail-container border-solid border-b-[1px] py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <div className="button-container flex flex-row">
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                -{" "}
              </button>
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div className="list-detail-container border-solid border-b-[1px] py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <div className="button-container flex flex-row items-center">
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                -{" "}
              </button>
              <div className="counter-container w-[54px] h-[43px] text-[16px] flex items-center justify-center">
                {counter}
              </div>
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div className="list-detail-container border-solid border-b-[1px] py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <div className="button-container flex flex-row">
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                -{" "}
              </button>
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div className="list-detail-container  py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <div className="button-container flex flex-row">
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                -{" "}
              </button>
              <button className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
