import { createSlice } from "@reduxjs/toolkit";

const explorerUrlSlice = createSlice({
  name: "explorer",
  initialState: {
    url: [],
  },
  reducers: {
    addExplorerUrl(state, action) {
      state.url = state.url.map((item) => ({ ...item, status: false }));
      state.url.push({ ...action.payload, status: true });
    },
    setActiveExplorerUrl(state, action) {
      const index = action.payload;
      state.url = state.url.map((item, i) => ({
        ...item,
        status: i === index,
      }));
    },

    deleteExplorerUrl(state, action) {
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

export const { addExplorerUrl, setActiveExplorerUrl, deleteExplorerUrl } = explorerUrlSlice.actions;

export default explorerUrlSlice.reducer;
