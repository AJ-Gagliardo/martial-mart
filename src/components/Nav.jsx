import { Link } from "react-router-dom";
import Cart from "./Cart";

function Nav({ cartItems, setCartItems }) {
  return (
    <div className=" bg-slate-800 text-slate-200 py-4 h-16 flex items-center justify-between max-w-screen-lg mx-auto lg:w-[1200px]">
      {/* <div className="fixed top-0 left-0 w-full bg-slate-800 text-slate-200 py-4 h-16 flex items-center justify-between max-w-screen-lg mx-auto lg:w-[1200px] z-10"> */}
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
      <div>
        <Link
          to="/cart"
          className="flex flex-1 text-slate-200 hover:text-slate-50 hover:scale-125"
        >
          {/* <p className="ml-auto mr-2 sm:mr-20">Cart</p> */}
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
