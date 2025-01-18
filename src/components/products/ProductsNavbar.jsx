import React from "react";

export default function Navbar() {
  return (
    <nav className=" p-4">
      <ul className="flex space-x-8">
        <li>
          <span className=" hover:text-sky-700 hover:underline cursor-pointer">
            You Deals
          </span>
        </li>
        <li>
          <span className=" hover:text-sky-700 hover:underline cursor-pointer">
            Most Gifted
          </span>
        </li>
        <li>
          <span className=" hover:text-sky-700 hover:underline cursor-pointer">
            Bought Together
          </span>
        </li>
        <li>
          <span className=" hover:text-sky-700 hover:underline cursor-pointer">
            Top Rated
          </span>
        </li>
      </ul>
    </nav>
  );
}