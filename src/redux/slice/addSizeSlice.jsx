import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addSizeApi, getSizeApi } from "../apis/api";

export const AddSize = createAsyncThunk(
  "size/add",
  async (payload, thunkAPI) => {
    try {
      const data = await addSizeApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Add size failed" }
      );
    }
  }
);

export const GetSize = createAsyncThunk(
    "size/get",
    async (payload, thunkAPI) => {
      try {
        const data = await getSizeApi(payload);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || { message: "Add size failed" }
        );
      }
    }
  );

const inventorySizeSlice = createSlice({
  name: "size",
  initialState: {
    size: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddSize.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddSize.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.size = action.payload.data.data;
      })
      .addCase(AddSize.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetSize.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetSize.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.size = action.payload.data.data;
      })
      .addCase(GetSize.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default inventorySizeSlice.reducer;
