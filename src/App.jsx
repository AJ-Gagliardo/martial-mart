import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import ProductsContainer from "./components/ProductsContainer";
import CartItems from "./components/CartItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/allProducts", element: <ProductsContainer /> },
      { path: "/cart", element: <CartItems /> },
    ],
  },
]);

function App() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

/*
MartialMart
trying to create a website that sells martial arts  uniforms and equipment (just project)

things Todo:
Carousel Component, will be at top

sections .. have to see how I can manage to do  male vs female and also jiujitsu uniform vs muay thai or striking stuff

Key component:
  product card
  Product list component
  cart
  footer component


Router
  Base router
    /category/:categoryName
    /product/:productId


component of the actual cart.
  for cart be able to add items
  for cart be able to remove items

Have a navigation bar, be able to move through categories through it

(optional) learn and do something witha  search bar




*/
