import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../slices/cartSlice";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import Proceed from "../components/cart/Proceed";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full p-6">
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>
        <div className="bg-white shadow-md p-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveItem={handleRemoveItem}
              />
            ))
          )}
        </div>
        <div>
          <Proceed subtotal={totalAmount} />
        </div>
      </div>

      <div className="lg:w-1/4 ml-auto mt-6 lg:mt-0">
        <CartSummary subtotal={totalAmount} />
      </div>
    </div>
  );
}

