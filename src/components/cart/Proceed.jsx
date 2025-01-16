import React from 'react';

const Proceed = ({ subtotal }) => {
  return (
    <div className="mt-6 flex justify-end p-4 bg-gray-100">
      <div className="text-right">
        <div className="text-xl font-semibold">Subtotal: ₹{subtotal}</div>
        <div className="text-sm text-gray-600">
          Eligible for FREE Shipping
        </div>
      </div>
    </div>
  );
}

export default Proceed;
