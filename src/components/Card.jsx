import { Link } from "react-router-dom";
import blank from "../assets/img/Black_White_Border_Frame_Transparent_PNG_Image.png";
import "./Card.css";

function Card({
  productName = "product",
  imgsrc = "blank",
  price = "9.99",
  onAddToCart,
  product,
}) {
  //justify-center had to take it out , have to check if this will make any negative change later on
  return (
    <div className="flex flex-col gap-2 h-82 w-70 shadow-xl rounded-md text-center justify-center place-items-center bg-slate-50 bg-opacity-70">
      <Link
        to={`/products/${product.id}`}
        className="hover:underline text-slate-700 text-center flex flex-col items-center"
      >
        <h2 className="h-12  sm:w-40 md:w-50 lg:w-50 w-50 text-ellipsis overflow-hidden whitespace-nowrap  mt-1 ">
          {productName}
        </h2>
        <img src={imgsrc} className=" w-60 h-60"></img>
      </Link>
      <h3 className="">${price}</h3>
      <button
        className="mb-2 bg-slate-700 transition ease-in-out delay-50 active:bg-blue-500 duration-75"
        onClick={() => onAddToCart(product)}
      >
        <p className="text-slate-50">Add to Cart</p>
      </button>
    </div>
  );
}

export default Card;
