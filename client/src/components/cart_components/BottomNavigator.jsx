function BottomNavigator() {
  return (
    <div className="container h-[92px] bg-white border-solid border-t-[1px] border-[#CCD0D7] flex flex-row justify-between items-center px-[11%] mt-[30px] w-full">
      <button className="button-container w-[164px] h-[44px] bg-white rounded-[8px] border-solid border-[1px] border-[#336DF2] text-[#336DF2] flex justify-center items-center">
        {"< ย้อนกลับ"}
      </button>
      <button className="button-container w-[164px] h-[44px] bg-[#CCD0D7] rounded-[8px] border-solid border-[1px] border-[#CCD0D7] text-[#EFEFF2] flex justify-center items-center">
        {"ดำเนินการต่อ >"}
      </button>
    </div>
  );
}

export default BottomNavigator;
