
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import CategoryFilter from "./Components/CategoryFilter";
import Home from "./Components/Home" ;
import RootLayout from './Components/RootLayout';
import ProductDetails from './Components/ProductDetails';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/filterProducts" element={<CategoryFilter />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
