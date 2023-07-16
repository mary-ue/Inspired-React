import { createSlice } from '@reduxjs/toolkit';

const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems,
    countItems: cartItems.length,
    orderStatus: "idle",
    order: {},
    error: null,
  },
  reducers: {
    addToCart(state, action) {
      const { id, color, size, count } = action.payload;
      const item = state.cartItems.find(
        (item) => item.id === id && item.color === color && item.size === size
      );
      if (item) {
        item.count = count;
      } else {
        state.cartItems.push({ id, color, size, count });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
    },

    removeFromCart(state, action) {
      const { id, color, size } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
    },
    clearCart(state) {
      state.cartItems = [];

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
      state.orderStatus = "idle";
      state.order = {};
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
