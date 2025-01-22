import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

const modalStyle = {
  position: "absolute",
  top: "100%",
  left: "calc(50% - 20px)",
  transform: "translate(-50%, 10px)",
  width: 600,
  maxWidth: "500%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
  zIndex: 1000,
};

const AccountAndList = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => setIsHovered(true);
  const handleClose = () => setIsHovered(false);

  const handleNavigate = () => {
    navigate("/profile");
  };

  return (
    <div className="relative">
      {isHovered && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-40"
          style={{ pointerEvents: "none" }}
        ></div>
      )}

      <div
        className="relative hidden md:flex flex-col text-sm cursor-pointer border border-transparent hover:border-white z-50"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={handleNavigate}
      >
        <p className="font-semibold">
          {currentUser ? `Hello, ${currentUser.username}` : "Hello, sign in"}
        </p>
        <p className="font-bold">Account & Lists</p>

        {isHovered && (
          <Box sx={modalStyle} className="absolute bg-white shadow-lg border rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Who is shopping? Select a profile.
            </h3>
            <p className="text-blue-600 hover:underline font-medium mb-4">
              <Link to="/profile">Manage Profiles</Link>
            </p>

            <div className="flex space-x-6 border-t pt-4">
              <div className="w-1/2">
                <h4 className="text-md font-bold mb-2 text-gray-900">Your Lists</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <Link className="hover:underline">Shopping List</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Create a Wish List</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Wish from Any Website</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Baby Wishlist</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Discover Your Style</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Explore Showroom</Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/2">
                <h4 className="text-md font-bold mb-2 text-gray-900">Your Account</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <Link to="/profile" className="hover:underline">
                      Your Account
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Orders</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Wish List</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Recommendations</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Recalls and Product Safety Alerts</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Prime Membership</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Prime Video</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Memberships & Subscriptions</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Seller Account</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Devices</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Register for a free Business Account</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Switch Accounts</Link>
                  </li>
                  <li>
                    <Link to="/logout" className="text-red-600 hover:underline">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
        )}
      </div>
    </div>
  );
};

export default AccountAndList;