import React from "react";
import flag from '../../assets/flag.png'
const Language = () => {
  return (
    <div className="hidden md:flex items-center space-x-1 cursor-pointer">
      <img
        src={flag}
        alt="Language"
        className="h-4"
      />
      <p className="text-sm">EN</p>
    </div>
  );
};

export default Language;
