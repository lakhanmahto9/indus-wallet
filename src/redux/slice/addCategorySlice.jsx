import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    addCategoryApi,
    getCategoryApi,
} from "../apis/api";

export const AddCategory = createAsyncThunk(
  "category/add",
  async (payload, thunkAPI) => {
    try {
      const data = await addCategoryApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Add category product failed" }
      );
    }
  }
);

export const GetCategory = createAsyncThunk(
    "category/get",
    async (payload, thunkAPI) => {
      try {
        const data = await getCategoryApi(payload);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || { message: "Add category product failed" }
        );
      }
    }
  );

const inventoryCategorySlice = createSlice({
  name: "product",
  initialState: {
    category: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.category = action.payload.data.data;
      })
      .addCase(AddCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.category = action.payload.data.data;
      })
      .addCase(GetCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default inventoryCategorySlice.reducer;
