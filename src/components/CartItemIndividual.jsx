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
    <div className="grid grid-cols-6 col-auto gap-2  sm:gap-8  text-sm sm:text-lg mt-4 place-items-center">
      <img src={productImg} className="w-12" />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <div className="flex place-items-center sm:gap-4">
        <button className="w-2 h-4 sm:h-6 flex justify-center items-center text-slate-500 bg-slate-150">
          -
        </button>
        <p>{productQuantity}</p>
        <button className="w-2 h-4 sm:h-6 flex justify-center items-center text-slate-500 bg-slate-150">
          +
        </button>
      </div>
      <p>{productPrice * productQuantity}</p>
      <button className="text-red-600 w-2 h-6 sm:h-8 flex justify-center items-center ">
        X
      </button>
    </div>

    // cartItems.map((item)=>(
    //   <div key={item.id}>
    //     <p>item.name</p>

    //   </div>
    // ))
  );
}

export default CartItemIndividual;
