import CategoryCard from "./CategoryCard";

function HomePageUI() {
  // thinking on doing 1 card for Jiujitsu, 1 for Muay thai Shorts, 1 for Gloves,
  return (
    <>
      <div className="grid grid-cols-1 place-items-center">
        <div className="bg-red-800 text-slate-100 my-4 p-4 rounded-md font-bold w-2/3 ">
          Check All products
        </div>
      </div>
      <div className="grid sm:grid-cols-4">
        <CategoryCard
          categoryName="Uniforms and Clothing"
          imgsrc="uniforms-category.webp"
          url="/allProducts?category=Uniforms&priceMin=0&priceMax=200"
        />
        <CategoryCard categoryName="For Men" imgsrc="men-category.webp" />
        <CategoryCard categoryName="For Women" imgsrc="women-category.webp" />
        <CategoryCard categoryName="Gloves" imgsrc="gloves-category.webp" />
      </div>
    </>
  );
}

export default HomePageUI;
