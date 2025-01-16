import { createContext, useContext } from "react";

function CartTop() {
  // const { cartItems } = useContext(createContext);
  return (
    <div className="grid sm:grid-cols-5 col-auto gap-8">
      <p>Product Image</p>
      <p>Product Name</p>
      <p>Price x </p>
      <div className="flex">
        <button className="">-</button>
        <p>Quantity</p>
        <button>+</button>
      </div>
      <p>Total Price</p>
    </div>

    // cartItems.map((item)=>(
    //   <div key={item.id}>
    //     <p>item.name</p>

    //   </div>
    // ))
  );
}

export default CartTop;
