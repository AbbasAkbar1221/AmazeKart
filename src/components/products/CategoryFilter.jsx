import React, { useState } from "react";

const categories = [
  {
    name: "Price (₹)",
    options: ["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "₹2000 and above"],
  },
  { name: "4 stars and up", options: ["4 stars", "4.5 stars", "5 stars"] },
  { name: "Brand", options: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"] },
  { name: "Capacity", options: ["1L", "2L", "3L", "5L"] },
  { name: "Power Source", options: ["Electric", "Battery", "Solar", "Manual"] },
  { name: "Height", options: ["Small", "Medium", "Large"] },
  { name: "Width", options: ["Narrow", "Medium", "Wide"] },
  {
    name: "Special Features",
    options: ["Waterproof", "Portable", "Energy-efficient"],
  },
  { name: "Colour", options: ["Red", "Blue", "Black", "White"] },
  { name: "Wattage", options: ["500W", "1000W", "1500W", "2000W"] },
  { name: "Voltage", options: ["110V", "220V"] },
  { name: "Material", options: ["Plastic", "Metal", "Wood"] },
  { name: "Weight", options: ["Light", "Medium", "Heavy"] },
  { name: "Maximum Flow Rate", options: ["1L/min", "2L/min", "3L/min"] },
  { name: "Maximum Temperature", options: ["50°C", "100°C", "150°C"] },
  { name: "Heat Output", options: ["Low", "Medium", "High"] },
  { name: "Style", options: ["Modern", "Classic", "Vintage"] },
  { name: "Operating Pressure", options: ["Low", "Medium", "High"] },
  { name: "Maximum Pressure", options: ["Low", "Medium", "High"] },
];

const CategoryFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleSelectChange = (category, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-xl font-semibold mb-1">Filter by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
        {categories.map((category, index) => (
          <div key={index}>
            <select
              className="w-full text-sm p-1 border border-gray-300 rounded-md"
              value={selectedFilters[category.name] || ""}
              onChange={(e) =>
                handleSelectChange(category.name, e.target.value)
              }
            >
              <option value="">{category.name}</option>
              {category.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;