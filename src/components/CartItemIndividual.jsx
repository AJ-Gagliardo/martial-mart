import { createContext, useContext } from "react";
import { useOutletContext } from "react-router-dom";

function CartItemIndividual({ product }) {
  // const { cartItems } = useContext(createContext);
  const { cartItems, setCartItems } = useOutletContext();
  return (
    <div className="grid sm:grid-cols-5 col-auto gap-8">
      {console.log(cartItems)}
      {/* <img src={item.imageUrl}></img>
      <p>{cartItems}Product Name</p>
      <p>Price x </p>
      <div className="flex">
        <button className="">-</button>
        <p>Quantity</p>
        <button>+</button>
      </div>
      <p>Total Price</p> */}
    </div>

    // cartItems.map((item)=>(
    //   <div key={item.id}>
    //     <p>item.name</p>

    //   </div>
    // ))
  );
}

export default CartItemIndividual;
