import { Link } from "react-router-dom";
import Cart from "./Cart";

function Nav({ cartItems, setCartItems }) {
  return (
    <div className="flex my-8">
      <div className="flex flex-1">
        <Link to="/" className="mx-2 sm:mx-auto">
          <p>Home</p>
        </Link>
        <Link to="/allProducts" className="mx-2 sm:mx-auto">
          <p>All Products</p>
        </Link>
        <p className="mx-2 sm:mx-auto">By Discipline</p>
      </div>
      <div className="flex flex-1">
        {/* <p className="ml-auto mr-2 sm:mr-20">Cart</p> */}
        <Cart />
      </div>
    </div>
  );
}

export default Nav;
