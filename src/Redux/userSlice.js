import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: localStorage.getItem("isAuth") === "true" || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  registeredUser: JSON.parse(localStorage.getItem("registeredUser")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action) {
      state.registeredUser = action.payload;
      localStorage.setItem("registeredUser", JSON.stringify(action.payload));
    },

    login(state, action) {
      const { email, password } = action.payload;
      if (
        state.registeredUser &&
        state.registeredUser.email === email &&
        state.registeredUser.password === password
      ) {
        state.isAuth = true;
        state.user = state.registeredUser;
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        state.isAuth = false;
        state.user = null;
        localStorage.removeItem("isAuth");
        localStorage.removeItem("user");
      }
    },

    logout(state) {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
