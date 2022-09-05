import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import profile from "./slices/profileSlice";

export const store = configureStore({
    reducer: {
        filter,
        profile
    },
})