function Cart({ cartItems }) {
  return (
    <p className=" mr-2 sm:mr-2 mx-auto max-w-screen-2xl">
      Cart: {cartItems.length}
    </p>
  );
}

export default Cart;
