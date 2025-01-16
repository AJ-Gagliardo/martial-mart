import CartItemIndividual from "./CartItemIndividual";
import CartTop from "./CartTop";

function CartItems({ cartItems }) {
  return (
    <div className="my-8 mx-auto max-w-screen-2xl    text-slate-800 ">
      <CartTop />
      <CartItemIndividual />
    </div>
  );
}

export default CartItems;
