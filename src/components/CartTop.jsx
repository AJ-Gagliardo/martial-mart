import { createContext, useContext } from "react";

function CartTop() {
  // const { cartItems } = useContext(createContext);
  return (
    <div className="grid grid-cols-6 col-auto gap-2 sm:gap-8 place-items-center text-sm sm:text-lg ">
      <p>Product Image</p>
      <p>Product Name</p>
      <p>Price</p>
      <p>Quantity</p>
      {/* <div className="flex">
        <button className="">-</button>
        <button>+</button>
      </div> */}
      <p>Total Price</p>
      <p>Delete</p>
    </div>

    // cartItems.map((item)=>(
    //   <div key={item.id}>
    //     <p>item.name</p>

    //   </div>
    // ))
  );
}

export default CartTop;
