import { useState } from "react";

function Main() {
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
    <div className="p-[64px] max-md:p-[20px]">
      <div className="font-Inter">
        <p className="font-Inter text-gega-main text-[25px] font-semibold mb-5">
          Təqdimatçılar
        </p>
        <div className="w-full bg-gega-main py-5 rounded-lg flex justify-around items-center flex-wrap text-white max-md:gap-3">
          <div className="flex items-center gap-5">
            <img
              src="biker 1.png"
              className="rounded-full bg-gega-white"
              alt=""
            />
            <div>
              <p className="pb-2 text-[20px] font-medium">Təqdimatçı</p>
              <p>Filankes Filankesov</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="trainer 1.png"
              className="rounded-full bg-gega-white"
              alt=""
            />
            <div>
              <p className="pb-2 text-[20px] font-medium">Təqdimatçı</p>
              <p>Filankes Filankesov</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="business-man 1.png"
              className="rounded-full bg-gega-white"
              alt=""
            />
            <div>
              <p className="pb-2 text-[20px] font-medium">Təqdimatçı</p>
              <p>Filankes Filankesov</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-Inter pt-5">
        <p className="font-Inter text-gega-main text-[25px] font-semibold mb-5">
          Qiymətləndirmə
        </p>
        <div className="w-full bg-gega-main py-10 px-10 rounded-lg flex justify-around text-white">
          <div className="flex justify-around items-center flex-wrap gap-10 w-full">
            {numbers.map((number) => (
              <div
                key={number}
                onClick={() => setSelectedNumber(number)}
                className={`rounded-full w-[50px] h-[50px]  text-black bg-gega-white flex items-center justify-center hover:cursor-pointer ${
                  selectedNumber == number ? "border-4 border-gega-green" : ""
                }`}
              >
                <p className="text-[20px] font-semibold">{number}</p>
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
        {open ? (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 animate-pulse"></div>
            <div className="relative p-5 rounded-xl text-white z-10 bg-gega-main flex items-center flex-col gap-10 animate-pulse max-md:w-[350px]">
              <p className="text-2xl font-semibold pt-10">
                Səsverməni uğurla başa vurdunuz!
              </p>
              <p>
                Sizin səsiniz uğurla qeydə alınmışdır. Səsvermədə iştirak
                etdiyiniz üçün təşəkkürlər!
              </p>
              <button
                onClick={handleCloseAlert}
                className="bg-gega-white text-gega-main font-semibold text-lg px-4 py-2 mt-3 rounded-md"
              >
                Yekunlaşdır
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Main;
