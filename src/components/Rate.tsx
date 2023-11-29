import React, { useState } from "react";
import Alert from "./Alert";

function Rate() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();
  const [pin, setPin] = useState<string | undefined>();
  const [open, setOpen] = useState<boolean | false>(false);

  const handleCloseAlert = () => {
    setOpen(false);
    setPin("");
    setSelectedNumber(undefined);
  };

  return (
    <div className="font-Inter pt-5">
      <p className="font-Inter text-gega-main text-[25px] font-semibold mb-5">
        Qiymətləndirmə
      </p>
      <div className="w-full bg-gega-main h-[200px] rounded-lg flex justify-around text-white">
        <div className="flex justify-around items-center w-full">
          {numbers.map((number) => (
            <div
              key={number}
              onClick={() => setSelectedNumber(number)}
              className={`rounded-full w-[50px] h-[50px]  text-black bg-gega-white flex items-center justify-center flex-wrap max-md:w-[30px] max-md:h-[30px] hover:cursor-pointer ${
                selectedNumber == number ? "border-4 border-gega-green" : ""
              }`}
            >
              <p className="text-[20px] font-semibold max-md:text-[15px]">
                {number}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gega-main h-[85px] rounded-lg flex justify-around items-center text-white mt-10">
        <input
          type="text"
          placeholder="Pini daxil edib, təsdiqləyin"
          className="px-5 py-1 w-[300px] text-gega-black outline-none rounded-lg"
          onChange={(e) => setPin(e.target.value)}
          value={pin}
        />
      </div>
      <div className="w-full flex items-center justify-center mt-7 ">
        <button
          className={`bg-gega-main text-white text-xl px-8 py-2 font-semibold rounded-3xl outline-none ${
            pin && selectedNumber ? "" : "opacity-50"
          }`}
          disabled={pin && selectedNumber ? false : true}
          onClick={() => setOpen(true)}
        >
          Təsdiq edin
        </button>
      </div>
      <Alert open={open} onClose={handleCloseAlert} />
    </div>
  );
}

export default Rate;
