import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
