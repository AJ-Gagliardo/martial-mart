import blank from "../assets/img/Black_White_Border_Frame_Transparent_PNG_Image.png";
import "./Card.css";

function Card({ productName = "product", imgsrc = "blank" }) {
  return (
    <div className="flex flex-col gap-2 justify-center h-80 shadow-xl rounded-md ">
      <h2 className="h-12">{productName}</h2>
      <img src={imgsrc} className="card-img"></img>
      <h3>$9.99</h3>
    </div>
  );
}

export default Card;
