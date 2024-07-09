import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="button-container flex flex-row items-center">
      <button
        className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]"
        onClick={handleMinus}
      >
        {" "}
        -{" "}
      </button>
      <div className="counter-container w-[54px] h-[43px] text-[16px] flex items-center justify-center">
        {counter}
      </div>
      <button
        className="w-[43px] h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[20px]"
        onClick={handlePlus}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
