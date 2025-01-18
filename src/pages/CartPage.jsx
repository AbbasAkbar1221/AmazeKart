import React, { useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartActions from "../components/cart/CartActions";
import CartSummary from "../components/cart/CartSummary";
import cartItemsData from "./cartData.json";
import Proceed from "../components/cart/Proceed";

export default function CartPage() {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [selectedItems, setSelectedItems] = useState(
    cartItemsData.map((item) => item.id)
  );

  const handleSelectAll = () => {
    setSelectedItems(cartItems.map((item) => item.id));
  };

  const handleDeselectAll = () => {
    setSelectedItems([]);
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setSelectedItems((prevSelected) =>
      prevSelected.filter((itemId) => itemId !== id)
    );
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to Checkout...");
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-6">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Section: Cart Items */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Shopping Cart</h2>
            <CartActions
              onSelectAll={handleSelectAll}
              onDeselectAll={handleDeselectAll}
            />
          </div>

          {/* Cart Items */}
          <div className="bg-white shadow-md p-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveItem={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
                onCheckboxChange={handleCheckboxChange}
                isSelected={selectedItems.includes(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0 md:ml-4">
          <CartSummary
            subtotal={calculateSubtotal()}
            onProceedToCheckout={handleProceedToCheckout}
          />
        </div>
      </div>

      {/* Proceed Component at the Bottom */}
      <div className="mt-auto">
        <Proceed
          subtotal={calculateSubtotal()}
          onProceedToCheckout={handleProceedToCheckout}
        />
      </div>
    </div>
  );
}
