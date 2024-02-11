import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    imtes: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.imtes.push(action.payload);
    },
    removeItem: (state, action) => {
      state.imtes.pop();
    },
    clearItem: (state, action) => {
      state.imtes.length = 0;
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
