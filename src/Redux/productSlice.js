import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filteredProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
