const Main = () => {
  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <h1 className="text-center text-3xl leading-loose text-[#EE4540] md:text-6xl">
          Memory Match
        </h1>
        <img
          className="mb-2 h-[4.5rem]"
          src="https://cdn-icons-png.flaticon.com/512/8787/8787419.png"
          alt=""
        />
      </div>
      <div className="x-gap-8 mx-auto mt-4 grid grid-cols-3 place-items-center md:w-2/4">
        <p className="text-3xl text-[#C72C41]">0</p>
        <button className="row-span-2 w-fit rounded-lg bg-[#EE4540]/75 p-2 text-2xl text-[#2D132C] transition-all hover:bg-[#EE4540]/90">
          Restart
        </button>
        <p className="text-3xl text-[#C72C41]">0</p>
        <p className="text-2xl text-[#C72C41]">Matches</p>
        <p className="col-start-3 text-2xl text-[#C72C41]">Turns</p>
      </div>
    </>
  );
};

export default Main;
