import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cartProducts")) || [],
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
        });
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalPrice += findItem.price;
        state.totalQuantity++;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        if (findItem.quantity > 1) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalPrice -= findItem.price;
          state.totalQuantity--;
        } else {
          state.products = state.products.filter((item) => item.id !== id);
          state.totalPrice -= findItem.price;
          state.totalQuantity--;
        }
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    clearCart(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
