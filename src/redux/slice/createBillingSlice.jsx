import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBillingApi, getBillingApi, updateBillingApi } from "../apis/api";

export const CreateBilling = createAsyncThunk(
  "billing/create",
  async (payload, thunkAPI) => {
    try {
      const data = await createBillingApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Create billing failed" }
      );
    }
  }
);

export const GetBilling = createAsyncThunk(
  "billing/get",
  async (_, thunkAPI) => {
    try {
      const data = await getBillingApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Fetch billing failed" }
      );
    }
  }
);

export const UpdateBilling = createAsyncThunk(
  "billing/update",
  async (payload, thunkAPI) => {
    try {
      const data = await updateBillingApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Update billing failed" }
      );
    }
  }
);

const inventoryBillingSlice = createSlice({
  name: "billing",
  initialState: {
    billing: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateBilling.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(CreateBilling.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.billing.push(action.payload.data.data);
      })
      .addCase(CreateBilling.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(GetBilling.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetBilling.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.billing = action.payload.data.data;
      })
      .addCase(GetBilling.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(UpdateBilling.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateBilling.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updated = action.payload.data.data;
      
        const index = state.billing.findIndex(b => b._id === updated._id);
        if (index !== -1) {
          state.billing[index] = updated;
        }
      })
      .addCase(UpdateBilling.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      
  },
});

export default inventoryBillingSlice.reducer;
