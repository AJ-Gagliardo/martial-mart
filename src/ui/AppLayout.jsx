import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import { useState } from "react";
import "../App.css";

function AppLayout() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="container mx-auto max-w-screen-lg p-0">
      <Header />
      <Nav cartItems={cartItems} setCartItems={setCartItems} />
      {/* <Carousel /> */}
      {/* testing with context prop, read online that I cant pass props on an outlet */}
      <div className="container mx-auto max-w-screen-lg">
        <Outlet context={{ cartItems, setCartItems }} />
      </div>
    </div>
  );
}

export default AppLayout;
