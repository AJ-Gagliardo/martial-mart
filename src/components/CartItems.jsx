import CartItemIndividual from "./CartItemIndividual";

function CartItems({ cartItems }) {
  return (
    <div className="my-8 mx-auto max-w-screen-2xl    text-slate-800 ">
      <CartItemIndividual />
    </div>
  );
}

export default CartItems;
