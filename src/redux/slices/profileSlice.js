import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    name:"",
    position:"",
    workShop:"",
    area:"",
    gang:""
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addItem(state, action){
            state.items.push(action.payload);
        },
        removeItem(state,action){
            state.items.filter(obj =>obj.id !== action.payload)
        }

    },
})

// Action creators are generated for each case reducer function
export const {addItem,removeItem } = profileSlice.actions

export default profileSlice.reducer