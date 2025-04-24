import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCustomerApi, getCustomerApi } from "../apis/api";

export const AddCustomer = createAsyncThunk(
  "customer/add",
  async (payload, thunkAPI) => {
    try {
      const data = await addCustomerApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Customer added failed" }
      );
    }
  }
);

export const GetCustomer = createAsyncThunk(
    "customer/get",
    async (payload, thunkAPI) => {
      try {
        const data = await getCustomerApi(payload);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data || { message: "Customer get failed" }
        );
      }
    }
  );


const inventoryCustomerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddCustomer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddCustomer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customer = action.payload.data.data;
      })
      .addCase(AddCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetCustomer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetCustomer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customer = action.payload.data.data;
      })
      .addCase(GetCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default inventoryCustomerSlice.reducer;
