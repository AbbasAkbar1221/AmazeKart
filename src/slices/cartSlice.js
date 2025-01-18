import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    totalAmount: 0, 
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.items.push(newItem); 
      state.totalAmount += newItem.price; 
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        const itemToRemove = state.items[itemIndex];
        state.items.splice(itemIndex, 1); 
        state.totalAmount -= itemToRemove.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0; 
    },
  },
});


export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
