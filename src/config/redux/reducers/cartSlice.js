import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cartItem.push(action.payload.item);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
