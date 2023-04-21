import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: JSON.parse(localStorage.getItem('liked')) || [],
    data_id: JSON.parse(localStorage.getItem('liked')) || []
}

export const likedSlise = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        removeLiked: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id)
            state.data_id = state.data_id.filter(item => item.id !== action.payload.id)
            localStorage.setItem('liked', JSON.stringify(state.data))
        },
        addLiked: (state, action) => {
            state.data = [...state.data, action.payload]
            state.data_id = [...state.data_id, action.payload]
            localStorage.setItem('liked', JSON.stringify(state.data))
        }
    }
})

export const { removeLiked, addLiked} = likedSlise.actions
export default likedSlise.reducer
