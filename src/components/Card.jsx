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
    <div className="flex flex-col gap-2 h-82 w-70 shadow-xl rounded-md text-center justify-center place-items-center">
      <h2 className="h-12  sm:w-1/2 md:w-1/2 lg:w-2/2 w-50 text-ellipsis overflow-hidden whitespace-nowrap  ">
        {productName}
      </h2>
      <img src={imgsrc} className=" w-60 h-60"></img>
      <h3 className="">${price}</h3>
      <button
        className="mb-2 bg-slate-700"
        onClick={() => onAddToCart(product)}
      >
        <p className="text-slate-50">Add to Cart</p>
      </button>
    </div>
  );
}

export default Card;
