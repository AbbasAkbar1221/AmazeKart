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
        <div className="flex items-center space-x-6 border border-transparent hover:border-white " onClick={toggleMenu}>
        <span
          className="material-icons text-white -mr-5 cursor-pointer"
        >
          menu
        </span>
        <span className="cursor-pointer">All</span>
        </div>
        <span className="cursor-pointer border border-transparent hover:border-white">Fresh</span>
        <span className="cursor-pointer border border-transparent hover:border-white">MX Player</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Sell</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Best Sellers</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Today's Deals</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Mobiles</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Prime</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Customer Service</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Electronics</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Home & Kitchen</span>
        <span className="cursor-pointer border border-transparent hover:border-white">Amazon Pay</span>
      </div>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
