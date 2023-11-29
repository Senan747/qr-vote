function Presenters() {
  return (
    <div className="font-Inter">
      <p className="font-Inter text-gega-main text-[25px] font-semibold mb-5">
        Təqdimatçılar
      </p>
      <div className="w-full bg-gega-main py-5 rounded-lg flex justify-around items-center flex-wrap text-white max-md:gap-3">
        <div className="flex items-center gap-5">
          <img src="biker 1.png" className="rounded-full bg-gega-white" alt="" />
          <div>
            <p className="pb-2 text-[20px] font-medium">Təqdimatçı</p>
            <p>Filankes Filankesov</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src="trainer 1.png" className="rounded-full bg-gega-white" alt="" />
          <div>
            <p className="pb-2 text-[20px] font-medium">Təqdimatçı</p>
            <p>Filankes Filankesov</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src="business-man 1.png" className="rounded-full bg-gega-white" alt="" />
          <div>
            <p className="pb-2 text-[20px] font-medium">Təqdimatçı</p>
            <p>Filankes Filankesov</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presenters;
