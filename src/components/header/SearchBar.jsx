
import React, { useState } from 'react';

const SearchBar = () => {
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Books', 'Electronics', 'Clothing', 'Home & Kitchen', 'Toys'];

  return (
    <div className="flex flex-grow items-center bg-yellow-400 rounded-md md:mx-4">
      <div className="relative">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-200 text-black rounded-l-md focus:outline-none cursor-pointer text-sm w-16"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <input
        type="text"
        className="flex-grow p-2 focus:outline-none text-sm"
        placeholder="Search Amazon.in"
      />
      
      <button className="p-2 bg-yellow-500 rounded-r-md">
        <span className="material-icons text-black">search</span>
      </button>
    </div>
  );
};

export default SearchBar;
