import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        state.items = state.items.filter(item => item.name !== name);
      } else {
        console.log("Something weird! Didn't find the item in the cart.");
      }
    },
    updateQuantity: (state, action) => {
      const { item, change } = action.payload;
      console.log(item);
      console.log(change);
      const name = item.name;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (change === 'increment') {
        if (itemToUpdate) {
          itemToUpdate.quantity = itemToUpdate.quantity + 1;
        } else{
          console.log("Something weird! Didn't find the item in the cart.");
        }
      } else if (change === 'decrement') {
        if (itemToUpdate) {
          itemToUpdate.quantity = itemToUpdate.quantity - 1;
          if (itemToUpdate.quantity === 0) {
            state.items = state.items.filter(item => item.name !== name);
          }
        } else{
          console.log("Something weird! Didn't find the item in the cart.");
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
