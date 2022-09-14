import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:null
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addItem(state, action){
            state.user.items.push(action.payload);
        },
        removeItem(state,action){
            state.user.itemsInWork.filter(obj =>obj.id !== action.payload)
        },
        setUser(state,action){
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {addItem,removeItem,setUser} = profileSlice.actions

export default profileSlice.reducer