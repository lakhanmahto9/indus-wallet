import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    password: "",
    status: false,
  },
  reducers: {
    setPassword(state, action) {
     
      state.password = action.payload;
    },
    updatePassword(state, action) {
        console.log(action.payload);
      state.status = action.payload;
    },
  },
});

export const { setPassword, updatePassword } = passwordSlice.actions;
export default passwordSlice.reducer;
