function Cart({ cartItems }) {
  // the cart icon that appears on the nav, it shows how many items are in teh cart at the moment
  return (
    <p className=" mr-2 sm:mr-2 mx-auto max-w-screen-2xl">
      Cart: {cartItems.length}
    </p>
  );
}

export default Cart;
