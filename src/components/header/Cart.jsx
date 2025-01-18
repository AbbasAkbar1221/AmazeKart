import React from "react";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="flex items-center space-x-1 cursor-pointer border border-transparent hover:border-white">
      <Link to="/cart">
        <span className="material-icons">shopping_cart</span>
        <p className="hidden md:block text-sm font-semibold">Cart</p>
      </Link>
    </div>
  );
};

export default Cart;
