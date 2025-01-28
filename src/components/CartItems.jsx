import { useOutletContext } from "react-router-dom";
import CartItemIndividual from "./CartItemIndividual";
import CartTop from "./CartTop";
import { useEffect, useState } from "react";

//this component is the container for all the cart items and also all the titles and info around the /cart url, clicking on the nav 'cart' will open this
function CartItems() {
  const { cartItems, setCartItems } = useOutletContext();
  const [totalCost, setTotalCost] = useState();

  console.log(cartItems);

  useEffect(() => {
    const cost = cartItems.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    const costFixed = cost.toFixed(2);
    if (costFixed === false) {
      costFixed = 0;
    }
    setTotalCost(costFixed);
  }, [cartItems]);

  return (
    <div
      className="my-2 mx-auto max-w-screen-2xl    text-slate-800 "
      id="cartUI"
    >
      <CartTop />

      {cartItems.map((product) => {
        console.log(product.name);
        return (
          <CartItemIndividual
            key={product.id}
            productId={product.id}
            productImg={product.imageUrl}
            productName={product.name}
            productPrice={product.price}
            productQuantity={product.quantity}
          />
        );
      })}
      <div>
        <p className="text-lg font-bold my-4">Total Price: {totalCost}</p>
      </div>
    </div>
  );
}

export default CartItems;
