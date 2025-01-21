import React from "react";
import { Link } from "react-router-dom";

const AccountAndList = () => {
  return (
    <Link to= "/register">
    <div className="hidden md:flex flex-col text-sm cursor-pointer border border-transparent hover:border-white">
      <p className="font-semibold">Hello, sign in</p>
      <p className="font-bold">Account & Lists</p>
    </div>
    </Link>
  );
};

export default AccountAndList;
