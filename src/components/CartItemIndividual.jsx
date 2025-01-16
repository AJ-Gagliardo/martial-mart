import { createContext, useContext } from "react";
import { useOutletContext } from "react-router-dom";

function CartItemIndividual({
  productName,
  productImg,
  productPrice,
  productQuantity,
}) {
  // const { cartItems } = useContext(createContext);
  const { cartItems, setCartItems } = useOutletContext();
  return (
    <div className="grid grid-cols-6 col-auto gap-2  sm:gap-8  text-sm sm:text-lg ">
      <img src={productImg} className="w-12" />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <div className="flex place-items-center sm:gap-4">
        <button className="w-2 h-4 sm:h-6 flex justify-center items-center">
          -
        </button>
        <p>{productQuantity}</p>
        <button className="w-2 h-4 sm:h-6 flex justify-center items-center">
          +
        </button>
      </div>
      <p>{productPrice * productQuantity}</p>
      <button className="text-red-600">X</button>
    </div>

    // cartItems.map((item)=>(
    //   <div key={item.id}>
    //     <p>item.name</p>

    //   </div>
    // ))
  );
}

export default CartItemIndividual;
