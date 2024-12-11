function CartItemIndividual({ cartItems }) {
  return (
    <div className="flex min-w-full gap-4">
      <p>Product Image</p>
      <p>Product Name</p>
      <p>Price x </p>
      <div className="flex">
        <button className="">+</button>
        <p>Quantity</p>
        <button>-</button>
      </div>
      <p>Total Price</p>
    </div>
  );
}

export default CartItemIndividual;
