import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import profile from "./slices/profileSlice";
import item from "./slices/itemSlice"

export const store = configureStore({
    reducer: {
        filter,
        profile,
        item
    },
})