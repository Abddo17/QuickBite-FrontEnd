import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axios";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (
        { username, email, password, password_confirmation, adresse },
        { rejectWithValue }
    ) => {
        try {
            // Get CSRF cookie (required for Laravel Sanctum)
            await axiosInstance.get("/sanctum/csrf-cookie");
            // Send registration request
            const response = await axiosInstance.post("/api/register", {
                username,
                email,
                password_confirmation,
                password,
                adresse,
            });
            const { token, user } = response.data;
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
            await axiosInstance.get("/sanctum/csrf-cookie");
            const response = await axiosInstance.post("/api/login", {
                email,
                password,
            });

            const { token, user } = response.data;
            // Store token in localStorage for persistence

            return { token, user };
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

// Async thunk for logging out
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    await axiosInstance.post("/api/logout");

    return true;
});

// Async thunk to fetch user data (e.g., on app load to check if user is logged in)
export const fetchUser = createAsyncThunk(
    "auth/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/api/user");
            return { user: response.data };
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
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            state.authStatus = "idle";
            state.error = null;
        });

        // Fetch User
        builder
            .addCase(fetchUser.pending, (state) => {
                state.fetchStatus = "loading";
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.fetchStatus = "succeeded";
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.fetchStatus = "failed";
                state.token = null;
                state.user = null;
                state.isAuthenticated = false;
                console.log(action.payload);
            });
    },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
