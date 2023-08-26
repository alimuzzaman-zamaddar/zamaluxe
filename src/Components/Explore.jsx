const Explore = () => {
  return (
    <div>
      <div className="relative">
        <div className="">
          <img
            className="h-screen w-full "
            src="https://assets.kerzner.com/api/public/content/b480e7798a324103a123a3a6d651b2bc?v=ee76577f&t=w1920"
            alt=""
          />
        </div>
        <div className=" absolute top-[40%] left-[10%] w-80 mb-3">
          <h1 className=" text-4xl">This is our royle scape</h1>
          <p className="text-lg mb-5">our extraordinary view and shows</p>
          <button className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
