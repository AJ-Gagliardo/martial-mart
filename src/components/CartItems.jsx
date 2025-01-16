import { useOutletContext } from "react-router-dom";
import CartItemIndividual from "./CartItemIndividual";
import CartTop from "./CartTop";

function CartItems() {
  const { cartItems, setCartItems } = useOutletContext();
  console.log(cartItems);
  return (
    <div className="my-2 mx-auto max-w-screen-2xl    text-slate-800 ">
      <CartTop />

      {cartItems.map((product) => {
        console.log(product.name);
        return (
          <CartItemIndividual
            productImg={product.imageUrl}
            productName={product.name}
            productPrice={product.price}
            productQuantity={product.quantity}
          />
        );
      })}
    </div>
  );
}

export default CartItems;
