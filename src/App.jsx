import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
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


component of the actual cart.
  for cart be able to add items
  for cart be able to remove items

Have a navigation bar, be able to move through categories through it

(optional) learn and do something witha  search bar




*/
