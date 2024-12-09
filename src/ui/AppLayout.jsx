import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { useState } from "react";

function AppLayout() {
  const [cartItems, setCatItems] = useState();
  return (
    <div>
      <Header />
      <Nav cartItems={cartItems} setCartItems={setCatItems} />
      {/* <Carousel /> */}
      <Outlet />
    </div>
  );
}

export default AppLayout;
