import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedId:0,
    title:"",
    imageUrl:""
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setSelectedId(state, action){
            state.selectedId = action.payload;
        },
        setTitle(state, action){
            state.title = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedId, setTitle} = itemSlice.actions

export default itemSlice.reducer