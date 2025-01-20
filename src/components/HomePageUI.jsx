import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

function HomePageUI() {
  // thinking on doing 1 card for Jiujitsu, 1 for Muay thai Shorts, 1 for Gloves,
  return (
    <>
      <div className="grid grid-cols-1 place-items-center">
        <Link to="/allProducts" className="">
          <div className="bg-red-800 text-slate-100 my-4 p-4 rounded-md font-bold w-80 ">
            Check All products
          </div>
        </Link>
      </div>
      <div className="grid sm:grid-cols-4">
        <CategoryCard
          categoryName="Uniforms and Clothing"
          imgsrc="uniforms-category.webp"
          url="/allProducts?category=Uniforms&gender=both&priceMin=0&priceMax=200"
        />
        <CategoryCard
          categoryName="For Men"
          imgsrc="men-category.webp"
          url="/allProducts?&gender=male&priceMin=0&priceMax=200"
        />
        <CategoryCard
          categoryName="For Women"
          imgsrc="women-category.webp"
          url="/allProducts?gender=female&priceMin=0&priceMax=200"
        />
        <CategoryCard
          categoryName="Gloves"
          imgsrc="gloves-category.webp"
          url="/allProducts?category=Gloves&gender=both&priceMin=0&priceMax=200"
        />
      </div>
    </>
  );
}

export default HomePageUI;
