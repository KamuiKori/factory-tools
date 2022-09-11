import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import profile from "./slices/profileSlice";
import item from "./slices/itemSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    filter,
    profile,
    item
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["profile"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})