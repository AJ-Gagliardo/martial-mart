import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { useState } from "react";

function AppLayout() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="bg-slate-200">
      <Header />
      <Nav cartItems={cartItems} setCartItems={setCartItems} />
      {/* <Carousel /> */}
      {/* testing with context prop, read online that I cant pass props on an outlet */}
      <Outlet context={{ cartItems, setCartItems }} />
    </div>
  );
}

export default AppLayout;
