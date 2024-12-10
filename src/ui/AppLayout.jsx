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
      {/* testing with context prop, read online that I cant pass props on an outlet */}
      <Outlet context={({ cartItems }, { setCatItems })} />
    </div>
  );
}

export default AppLayout;
