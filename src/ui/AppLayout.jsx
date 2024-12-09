import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { useState } from "react";

function AppLayout() {
  const [cartItems, setCatItems] = useState([]);
  return (
    <div className="bg-slate-200">
      <Header />
      <Nav cartItems={cartItems} setCartItems={setCatItems} />
      {/* <Carousel /> */}
      <Outlet cartItems={cartItems} setCartItems={setCatItems} />
    </div>
  );
}

export default AppLayout;
