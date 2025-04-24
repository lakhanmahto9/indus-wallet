import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addInventoryProductApi,
  deleteInventoryProductApi,
  editInventoryProductApi,
  getInventoryProductApi,
  manageStockApi,
} from "../apis/api";

export const AddProduct = createAsyncThunk(
  "product/add",
  async (payload, thunkAPI) => {
    try {
      const data = await addInventoryProductApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Create product failed" }
      );
    }
  }
);

export const GetProduct = createAsyncThunk(
  "product/get",
  async (_, thunkAPI) => {
    try {
      const data = await getInventoryProductApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Fetch product failed" }
      );
    }
  }
);

export const UpdateProduct = createAsyncThunk(
  "product/edit",
  async (payload, thunkAPI) => {
    try {
      const data = await editInventoryProductApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Edit product failed" }
      );
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "product/delete",
  async (payload, thunkAPI) => {
    try {
      const data = await deleteInventoryProductApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Delete product failed" }
      );
    }
  }
);

export const ManageProductStock = createAsyncThunk(
  "product/stock",
  async (payload, thunkAPI) => {
    try {
      const data = await manageStockApi(payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Stock updated failed" }
      );
    }
  }
);

const inventoryProductSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product.push(action.payload.data.data);
      })
      .addCase(AddProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //get
      .addCase(GetProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload.data.data;
      })
      .addCase(GetProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //edit
      .addCase(UpdateProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { data } = action.payload.data;
        console.log(action.payload);
        state.product = state.product.map((item) =>
          item._id === data._id ? data : item
        );
      })
      .addCase(UpdateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //delete
      .addCase(DeleteProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = state.product.filter(
          (item) => item._id !== action.payload.data.id
        );
      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      //updated stock
      .addCase(ManageProductStock.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(ManageProductStock.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { data } = action.payload.data;
        console.log(action.payload);
        state.product = state.product.map((item) =>
          item._id === data._id ? data : item
        );
      })
      .addCase(ManageProductStock.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default inventoryProductSlice.reducer;
