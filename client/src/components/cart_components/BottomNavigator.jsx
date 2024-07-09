function BottomNavigator() {
  return (
    <div className="bottom-navigator w-full h-[92px] px-[11%] bg-white border-soild border-[1px] border-t-gray-300 flex justify-between items-center fixed bottom-0">
      <button className="w-[164px] h-[44px] text-center border-soild border-[1px] border-blue-600 rounded-[8px] text-blue-600">
        {"< ย้อนกลับ"}
      </button>
      <button className="w-[164px] h-[44px] text-center border-soild border-[1px] bg-gray-300 rounded-[8px] text-gray-100">
        {"ดำเนินการต่อ >"}
      </button>
    </div>
  );
}

export default BottomNavigator;
