import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  Emails: null,
  Token: null,
  userDetails: null,
  loggedInUser: null,
  services: [
    {
      id: 1,
      name: "Haircut",
      price: 100,
    },
    {
      id: 2,
      name: "Shave",
      price: 50,
    },
    {
      id: 3,
      name: "Massage",
      price: 200,
    },
  ],
  cart: [],
};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = [];
    },
    addEmails: (state, action) => {
      console.log(action);
      state.Emails=action.payload;
    },
    deleteUserEmails: (state, action) => {
      state.Emails = null;
    },
    addToken: (state, action) => {
      state.Token=action.payload;
    },
    deleteToken: (state, action) => {
      state.Token = null;
    },
    deleteUserDetails: (state, action) => {
      state.userDetails = null;
    },
    addService: (state, action) => {
      state.services.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    emptyService: (state, action) => {
      return {
        ...state,
        cart: null,
      };
    },
  },
});

export const {
  switchUser,
  addUser,
  deleteUser,
  addToCart,
  addService,
  emptyService,
  addUserDetails,
  deleteUserDetails,
  addEmails,
  deleteUserEmails,
  addToken,
  deleteToken
} = masterSlice.actions;

export default masterSlice.reducer;
