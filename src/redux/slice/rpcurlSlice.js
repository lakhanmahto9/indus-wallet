import { createSlice } from "@reduxjs/toolkit";

const rpcUrlSlice = createSlice({
  name: "credentials",
  initialState: {
    url: [],
  },
  reducers: {
    addRpcUrl(state, action) {
      state.url = state.url.map((item) => ({ ...item, status: false }));
      state.url.push({ ...action.payload, status: true });
    },
  },
});

export const { addRpcUrl } = rpcUrlSlice.actions;

export default rpcUrlSlice.reducer;
