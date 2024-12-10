import { Link } from "react-router-dom";
import Cart from "./Cart";

function Nav({ cartItems, setCartItems }) {
  return (
    <div className="flex my-8 bg-slate-800 text-slate-200 p-2 rounded-md ">
      <div className="flex flex-1">
        <Link
          to="/"
          className="mx-2 sm:mx-auto text-slate-200 hover:text-slate-50 hover:scale-125 "
        >
          <p>Home</p>
        </Link>
        <Link
          to="/allProducts"
          className="mx-2 sm:mx-auto text-slate-200 hover:text-slate-50 hover:scale-125"
        >
          <p>All Products</p>
        </Link>
        <Link
          to="#"
          className="mx-2 sm:mx-auto text-slate-200 hover:text-slate-50 hover:scale-125"
        >
          <p>By Discipline</p>
        </Link>
      </div>
      <div className="flex flex-1">
        {/* <p className="ml-auto mr-2 sm:mr-20">Cart</p> */}
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
}

export default Nav;
