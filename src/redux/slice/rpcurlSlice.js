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
    setActiveRpcUrl(state, action) {
      const index = action.payload;
      state.url = state.url.map((item, i) => ({
        ...item,
        status: i === index,
      }));
    },

    deleteRpcUrl(state, action) {
      const index = action.payload;
      const wasActive = state.url[index]?.status;

      state.url.splice(index, 1);

      if (wasActive && state.url.length > 0) {
        state.url = state.url.map((item, i) => ({
          ...item,
          status: i === 0,
        }));
      }
    },
  },
});

export const { addRpcUrl, setActiveRpcUrl, deleteRpcUrl } = rpcUrlSlice.actions;

export default rpcUrlSlice.reducer;
