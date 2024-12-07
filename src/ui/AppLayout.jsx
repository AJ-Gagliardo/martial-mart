import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";

function AppLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <Carousel />
      <Outlet />
    </div>
  );
}

export default AppLayout;
