import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeProduct,
  toggleCheckBox,
} from "../../slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    try {
      dispatch(addItemToCart(item));
    } catch (error) {
      console.error("Failed to increment item quantity:", error);
    }
  };

  const handleDecrement = () => {
    try {
      dispatch(removeItemFromCart(item._id));
    } catch (error) {
      console.error("Failed to decrement item quantity:", error);
    }
  };

  const handleRemoveItem = () => {
    try {
      dispatch(removeProduct(item._id));
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <div
      key={item.id}
      className={`flex justify-between items-center py-4 border-b ${
        !item.inStock ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.isSelected}
          onChange={() => dispatch(toggleCheckBox(item._id))}
          className="mr-4"
          disabled={!item.inStock}
        />

        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover mr-4"
          />

          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p
              className={`${
                item.inStock ? "text-green-500" : "text-red-500"
              } mt-1`}
            >
              {item.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <p className="text-gray-500 mt-2">#1 Best Seller in Coffee Gifts</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <div className="text-gray-900 font-semibold">₹{item.price}</div>
        <div className="line-through text-gray-500">
          M.R.P.: ₹{item.originalPrice}
        </div>
        <div className="text-red-500">{item.discount}% off</div>

        <div className="mt-2 flex items-center space-x-2">
          {item.quantity > 1 ? (
            <button
              onClick={handleDecrement}
              className="px-2 py-1 border rounded text-gray-700"
            >
              -
            </button>
          ) : (
            <span
              onClick={handleRemoveItem}
              className="material-icons text-gray-800 cursor-pointer"
              title="Delete"
            >
              delete
            </span>
          )}

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
            onClick={handleRemoveItem}
            className="text-red-500 hover:underline"
            disabled={!item.inStock}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
