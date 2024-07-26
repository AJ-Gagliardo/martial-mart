import blank from "../assets/img/Black_White_Border_Frame_Transparent_PNG_Image.png";
import "./Card.css";

function Card() {
  return (
    <div className="flex flex-col gap-2 justify-center h-80 shadow-xl rounded-md">
      <h2>Product</h2>
      <img src={blank} className="card-img"></img>
      <h3>$9.99</h3>
    </div>
  );
}

export default Card;
