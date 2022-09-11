import { configureStore} from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import profile from "./slices/profileSlice";
import item from "./slices/itemSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedProfileReducer = persistReducer(persistConfig, profile)

export const store = configureStore({
    reducer: {
        filter,
        item,
        profile: persistedProfileReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})