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
  type: "all",
  search: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    initUsers: (state, action) => {
      state.users = action.payload;
    },
    add: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    remove: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    update: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.type = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export const {
  add,
  setSearch,
  setFilter,
  remove,
  initUsers,
  update,
  setCurrentUser,
} = userSlice.actions;

export default store;
