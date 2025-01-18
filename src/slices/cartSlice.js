import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add new item with initial quantity
      }

      state.totalAmount += newItem.price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);
    
      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
          state.totalAmount -= itemToRemove.price;
        } else {
          state.items = state.items.filter(item => item.id !== id); 
          state.totalAmount -= itemToRemove.price;
        }
      }
    },        
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    toggleCheckBox: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.isSelected = !item.isSelected;
      }
    },    
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, toggleCheckBox } =
  cartSlice.actions;

export default cartSlice.reducer;
