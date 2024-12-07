import blank from "../assets/img/Black_White_Border_Frame_Transparent_PNG_Image.png";
import "./Card.css";

function Card({ productName = "product", imgsrc = "blank", price = "9.99" }) {
  return (
    <div className="flex flex-col gap-2 justify-center h-80 w-70 shadow-xl rounded-md text-center justify-center place-items-center">
      <h2 className="h-12  sm:w-1/2 md:w-1/2 lg:w-2/2 w-50 text-ellipsis overflow-hidden whitespace-nowrap ">
        {productName}
      </h2>
      <img src={imgsrc} className=" w-60 h-60"></img>
      <h3>${price}</h3>
    </div>
  );
}

export default Card;
