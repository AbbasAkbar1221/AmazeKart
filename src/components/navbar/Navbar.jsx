import React from "react";
import { useState } from "react";
import SideMenu from "../slidemenu/SlideMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-gray-800 text-white px-4 py-2 text-sm flex space-x-6">
        <span
          className="material-icons text-white -mr-5 cursor-pointer"
          onClick={toggleMenu}
        >
          menu
        </span>
        <span className="cursor-pointer hover:underline">All</span>
        <span className="cursor-pointer hover:underline">Fresh</span>
        <span className="cursor-pointer hover:underline">MX Player</span>
        <span className="cursor-pointer hover:underline">Sell</span>
        <span className="cursor-pointer hover:underline">Best Sellers</span>
        <span className="cursor-pointer hover:underline">Today's Deals</span>
        <span className="cursor-pointer hover:underline">Mobiles</span>
        <span className="cursor-pointer hover:underline">Prime</span>
        <span className="cursor-pointer hover:underline">Customer Service</span>
        <span className="cursor-pointer hover:underline">Electronics</span>
        <span className="cursor-pointer hover:underline">Home & Kitchen</span>
        <span className="cursor-pointer hover:underline">Amazon Pay</span>
      </div>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
