import React from "react";
import ProductsNavbar from "../components/products/ProductsNavbar";
import CategoryFilter from "../components/products/CategoryFilter";

import ProductList from "../components/products/ProductList";

export default function ProductPage() {
  return (
    <div className=" z-20">
      <ProductsNavbar />
      <CategoryFilter />
      <ProductList />
    </div>
  );
}