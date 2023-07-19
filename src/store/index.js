import { configureStore, createSlice } from "@reduxjs/toolkit";

const initUser = {
  id: 0,
  userName: "",
  userLastName: "",
  phone: "",
  related: "Frinds",
  email: "",
  image: "",
};

const initialState = {
  users: [],
  currentUser: initUser,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => {
      state.users.push(action.payload);
    },
    remove: (state, action) => {
      state.users = state.users.filter(user=> user.id !== action.payload.id)
    },
    update: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export const { add, remove, update, setCurrentUser } = userSlice.actions;

export default store;
