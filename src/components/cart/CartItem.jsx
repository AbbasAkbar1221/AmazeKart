
import React from "react";

export default function CartItem({
  item,
  onRemoveItem,
  onQuantityChange,
  isSelected,
}) {
  const handleIncrement = () => {
    if (item.quantity < 5) {
      onQuantityChange(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div
      key={item.id}
      className={`flex justify-between items-center py-4 border-b ${
        !item.inStock && "opacity-50"
      }`}
    >
      <div className="flex items-center relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover mr-4"
        />

        {/* Small box on the right of the photo */}
        {/* <div className="absolute top-0 right-0 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
          {item.discount}% OFF
        </div> */}

        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">by {item.name.split(" ")[0]}</p>
          <p
            className={`text-gray-600 ${
              item.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-gray-500 mt-2">#1 Best Seller in Coffee Gifts</p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="text-gray-900 font-semibold">₹{item.price}</div>
        <div className="line-through text-gray-500">
          M.R.P.: ₹{item.originalPrice}
        </div>
        <div className="text-red-500">{item.discount}% off</div>

        {/* Quantity Adjustment with + and - Buttons */}
        <div className="mt-2 flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="px-2 py-1 border rounded text-gray-700"
            disabled={!item.inStock || item.quantity <= 1}
          >
            -
          </button>
          <div className="px-3 py-1 border rounded bg-gray-100">
            {item.quantity}
          </div>
          <button
            onClick={handleIncrement}
            className="px-2 py-1 border rounded text-gray-700"
            disabled={!item.inStock || item.quantity >= 5}
          >
            +
          </button>
        </div>

        <div className="mt-2">
          <button
            onClick={() => onRemoveItem(item.id)}
            className="text-red-500"
            disabled={!item.inStock}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
