import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen, toggleMenu }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="bg-gray-800 flex items-center text-white px-5 py-4">
          <span className="material-icons mr-1">account_circle</span>
          <h2 className="text-lg font-bold">
            {currentUser ? `Hello, ${currentUser.username}` : "Hello, Customer"}
          </h2>
        </div>

        <div className="bg-white text-black px-6 py-4 space-y-6">
          <div>
            <h3 className="font-bold text-black mb-2">Trending</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Best Sellers</li>
              <li className="cursor-pointer hover:underline">New Releases</li>
              <li className="cursor-pointer hover:underline">
                Movers and Shakers
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">
              Digital Content and Devices
            </h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Echo & Alexa</li>
              <li className="cursor-pointer hover:underline">Fire TV</li>
              <li className="cursor-pointer hover:underline">
                Kindle E-Readers & eBooks
              </li>
              <li className="cursor-pointer hover:underline">
                Audible Audiobooks
              </li>
              <li className="cursor-pointer hover:underline">
                Amazon Prime Video
              </li>
              <li className="cursor-pointer hover:underline">
                Amazon Prime Music
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">Shop by Category</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">
                Mobiles, Computers
              </li>
              <li className="cursor-pointer hover:underline">
                TV, Appliances, Electronics
              </li>
              <li className="cursor-pointer hover:underline">Men's Fashion</li>
              <li className="cursor-pointer hover:underline">
                Women's Fashion
              </li>
              <li className="cursor-pointer hover:underline">See all</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">Programs & Features</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Amazon Pay</li>
              <li className="cursor-pointer hover:underline">
                Gift Cards & Mobile Recharges
              </li>
              <li className="cursor-pointer hover:underline">
                Amazon Launchpad
              </li>
              <li className="cursor-pointer hover:underline">
                Amazon Business
              </li>
              <li className="cursor-pointer hover:underline">See all</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-2">Help & Settings</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Your Account</li>
              <li className="cursor-pointer hover:underline">
                Customer Service
              </li>
              <Link to="/login">
                <li className="cursor-pointer hover:underline">Sign in</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-4 left-80 z-50">
          <span
            className="material-icons cursor-pointer bg-transparent text-white border-2 border-white rounded-md p-2 ml-1"
            onClick={toggleMenu}
          >
            close
          </span>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default SideMenu;
