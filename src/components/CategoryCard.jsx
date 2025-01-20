function CategoryCard({ categoryName = "Category", imgsrc = "blank" }) {
  //justify-center had to take it out , have to check if this will make any negative change later on
  return (
    <div className="flex flex-col gap-2 h-82 w-70 shadow-xl rounded-md text-center justify-center place-items-center">
      {/* <h2 className="h-12  sm:w-1/2 md:w-1/2 lg:w-2/2 w-50 text-ellipsis overflow-hidden whitespace-nowrap  ">
        {categoryName}
      </h2> */}
      <img src={imgsrc} className=" w-60 h-60"></img>

      <button
        className="mb-2 bg-slate-700 w-2/3 h-20"
        onClick={console.log("this should be a nav link")}
      >
        <p className="text-slate-50">{categoryName}</p>
      </button>
    </div>
  );
}

export default CategoryCard;
