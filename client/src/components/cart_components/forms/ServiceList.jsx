import Counter from "../utils/Counter";

function ServiceList() {
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
            <Counter />
          </div>

          <div className="list-detail-container border-solid border-b-[1px] py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <Counter />
          </div>

          <div className="list-detail-container border-solid border-b-[1px] py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <Counter />
          </div>

          <div className="list-detail-container  py-[23px] flex flex-row justify-between items-center">
            <div className="detail flex flex-col">
              <p className="text-[18px]">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-[#646C80] text-[14px]">800.00 ฿ / เครื่อง</p>
            </div>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
