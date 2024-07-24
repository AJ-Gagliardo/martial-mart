import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([{ path: "/", element: <Homepage /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
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
