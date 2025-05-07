import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "credentials",
  initialState: {
    password: "",
    secretKey: "",
    seedPhrase: "",
    address: "",
    status: false,
    level:0
  },
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
    },
    setSecretKey(state, action) {
      state.secretKey = action.payload;
    },
    setSeedPhrase(state, action) {
      state.seedPhrase = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
    clearCredentials(state) {
      state.password = "";
      state.secretKey = "";
      state.seedPhrase = "";
      state.address = "";
      state.status = false;
      state.level = 0
    },
  },
});

export const {
  setPassword,
  setSecretKey,
  setSeedPhrase,
  setAddress,
  clearCredentials,
  setLevel
} = passwordSlice.actions;

export default passwordSlice.reducer;
