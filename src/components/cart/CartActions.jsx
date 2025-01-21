
// import React from "react";
// import selectAll from "../../slices/cartSlice"
// import { useDispatch } from "react-redux";
// export default function CartActions({ onSelectAll, onDeselectAll }) {
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button onClick={dispatch(selectAll())} className="mr-4 text-gray-700">
//         Select All
//       </button>
//       <button onClick={onDeselectAll} className="text-gray-700">
//         Deselect All
//       </button>
//     </div>
//   );
// }

import { useDispatch } from "react-redux";
import { selectAll, deselectAll } from "../../slices/cartSlice";

const CartActions = () => {
  const dispatch = useDispatch();

  const handleSelectAll = () => {
    dispatch(selectAll());
  };

  const handleDeselectAll = () => {
    dispatch(deselectAll());
  };

  return (
    <div>
      <button onClick={handleSelectAll} className="mr-4 text-gray-700">
        Select All
      </button>
      <button onClick={handleDeselectAll} className="text-gray-700">
        Deselect All
      </button>
    </div>
  );
};

export default CartActions;
