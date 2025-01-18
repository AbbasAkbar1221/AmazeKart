export default function CartSummary({ subtotal = 0, onProceedToCheckout }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <div className="flex items-center bg-green-50 p-3 rounded mb-4">
        <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center text-white mr-2">
          ✓
        </div>
        <div>
          <h2 className="text-green-700 font-semibold text-sm">
            Your order is eligible for FREE Delivery.
          </h2>
          <p className="text-gray-600 text-xs">
            Choose <strong>FREE Delivery</strong> option at checkout.
          </p>
        </div>
      </div>

      {/* Subtotal Section */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Subtotal ({1} item): </strong>
          <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
        </p>
        <div className="flex items-center mt-2">
          <input type="checkbox" id="giftOption" className="mr-2" />
          <label htmlFor="giftOption" className="text-sm text-gray-600">
            This order contains a gift
          </label>
        </div>
      </div>

      {/* Proceed to Checkout Button */}
      <button
        onClick={onProceedToCheckout}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded mb-4"
      >
        Proceed to Buy
      </button>

      {/* EMI Section */}
      <div className="text-sm text-gray-600 border-t pt-2">
        <button className="flex items-center justify-between w-full text-gray-700">
          <span>EMI Available</span>
          <span className="text-lg font-semibold">⌄</span>
        </button>
      </div>
    </div>
  );
}
