import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuantityApi, addSizeApi, getQuantityApi, getSizeApi } from "../apis/api";

export const AddQuantity = createAsyncThunk(
  "quantity/add",
  async (payload, thunkAPI) => {
    try {
      const data = await addQuantityApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Add quantity failed" }
      );
    }
  }
);

export const GetQuantity = createAsyncThunk(
    "quantity/get",
    async (payload, thunkAPI) => {
      try {
        const data = await getQuantityApi(payload);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || { message: "Add quantity failed" }
        );
      }
    }
  );

const inventoryQuantitySlice = createSlice({
  name: "quantity",
  initialState: {
    quantity: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddQuantity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quantity = action.payload.data.data;
      })
      .addCase(AddQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetQuantity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quantity = action.payload.data.data;
      })
      .addCase(GetQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default inventoryQuantitySlice.reducer;
