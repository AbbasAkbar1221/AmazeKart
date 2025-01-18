import React from "react";

const Location = () => {
  return (
    <div className="hidden md:flex items-center space-x-1 border border-transparent hover:border-white">
      <span className="material-icons">location_on</span>
      <div>
        <p className="text-sm text-gray-500">Delivering to Delhi</p>
        <p className="text-sm font-semibold">Update location</p>
      </div>
    </div>
  );
};

export default Location;
