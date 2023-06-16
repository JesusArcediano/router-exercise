import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { countsSlice } from "./counts/countsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        counts: countsSlice.reducer
    }
})