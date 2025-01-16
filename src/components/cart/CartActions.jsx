
import React from "react";

export default function CartActions({ onSelectAll, onDeselectAll }) {
  return (
    <div>
      <button onClick={onSelectAll} className="mr-4 text-gray-700">
        Select All
      </button>
      <button onClick={onDeselectAll} className="text-gray-700">
        Deselect All
      </button>
    </div>
  );
}