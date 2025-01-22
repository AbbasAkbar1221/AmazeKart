import React from "react";
import { useSelector } from "react-redux";

const Location = () => {
  const currentUser = useSelector(state => state.auth.currentUser)
  return (
    <div className="hidden md:flex items-center space-x-1 border border-transparent hover:border-white">
      <span className="material-icons">location_on</span>
      <div>
        <p className="text-xs text-gray-300">{currentUser ? `Deliver to ${currentUser.username}` : "Deliver to Customer"}</p>
        <p className="text-sm font-semibold">Update location</p>
      </div>
    </div>
  );
};

export default Location;
