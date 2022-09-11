import { createSlice } from '@reduxjs/toolkit'

const initialState = {}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addItem(state, action){
            state.items.push(action.payload);
        },
        removeItem(state,action){
            state.items.filter(obj =>obj.id !== action.payload)
        },
        setUser(state,action){
            state = action.payload
        },
        setId(state,action){
            state.id = action.payload;
        },
        setName(state,action){
            state.name = action.payload;
        },
        setPos(state,action){
            state.position = action.payload;
        },
        setWorkshop(state,action){
            state.workShop = action.payload;
        },
        setArea(state,action){
            state.area = action.payload;
        },
        setGang(state,action){
            state.gang = action.payload;
        },


    },
})

// Action creators are generated for each case reducer function
export const {addItem,removeItem,setUser} = profileSlice.actions

export default profileSlice.reducer