import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addColorApi, getColorApi } from "../apis/api";

export const AddColor = createAsyncThunk(
  "color/add",
  async (payload, thunkAPI) => {
    try {
      const data = await addColorApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Add color product failed" }
      );
    }
  }
);

export const GetColor = createAsyncThunk(
    "color/get",
    async (payload, thunkAPI) => {
      try {
        const data = await getColorApi(payload);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || { message: "Add color product failed" }
        );
      }
    }
  );

const inventoryColorSlice = createSlice({
  name: "color",
  initialState: {
    color: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddColor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddColor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.color = action.payload.data.data;
      })
      .addCase(AddColor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetColor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetColor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.color = action.payload.data.data;
      })
      .addCase(GetColor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default inventoryColorSlice.reducer;
