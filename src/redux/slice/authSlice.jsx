import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { adminLogin } from "../apis/api";



export const AdminLogin = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const data = await adminLogin(payload);
      localStorage.setItem("access_token", data.data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("access_token") || null,
    status: "idle",
    error: null,
    uploadStatus: {
      profilePic: "idle",
      idCard: "idle",
    },
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(AdminLogin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AdminLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.user = action.payload.data;
      })
      .addCase(AdminLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export const { logout } =
  authSlice.actions;
export default authSlice.reducer;
