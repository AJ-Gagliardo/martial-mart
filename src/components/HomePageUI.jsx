import CategoryCard from "./CategoryCard";

function HomePageUI() {
  // thinking on doing 1 card for Jiujitsu, 1 for Muay thai Shorts, 1 for Gloves,
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="bg-red-700 text-slate-100">Check All products</div>
      </div>
      <div className="grid grid-cols-4">
        <CategoryCard categoryName="Uniforms and Clothing" imgsrc="blank" />
        <CategoryCard categoryName="Gloves" imgsrc="blank" />
        <CategoryCard categoryName="For Men" imgsrc="blank" />
        <CategoryCard categoryName="For Women" imgsrc="blank" />
      </div>
    </>
  );
}

export default HomePageUI;
