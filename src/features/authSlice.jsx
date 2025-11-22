import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../API/axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    { username, email, password, password_confirmation, adresse },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post("/api/register", {
        username,
        email,
        password_confirmation,
        password,
        adresse,
      });
      const { token, user } = response.data;
      localStorage.setItem("auth_token", token);
      return { token, user };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Async thunk for logging in
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/login", {
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("auth_token", token);
      return { token, user };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/api/logout");
      localStorage.removeItem("auth_token");
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/user");
      const { user } = response.data;
      return { user };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    fetchStatus: "idle",
    authStatus: "idle",
    error: null,
    isAuthenticated: null,
  },
  reducers: {
    clearAuthState: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.fetchStatus = "idle";
      state.authStatus = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.authStatus = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authStatus = "succeeded";
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authStatus = "failed";
        state.error = action.payload;
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
      });

    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.authStatus = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authStatus = "succeeded";
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authStatus = "failed";
        state.error = action.payload;
      });

    // Logout
    builder
      .addCase(logoutUser.pending, (state) => {
        state.authStatus = "loading";
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.authStatus = "idle";
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.authStatus = "failed";
        state.error = action.payload;
      });

    // Fetch User
    builder
      .addCase(fetchUser.pending, (state) => {
        state.fetchStatus = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.fetchStatus = "succeeded";
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.fetchStatus = "failed";
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
