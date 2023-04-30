import { createSlice } from "@reduxjs/toolkit"
import { getLikeds, patchGoodsThunk } from "./patchLikedThunk"

const initialState = {
    data: JSON.parse(localStorage.getItem('liked')) || [],
    data_id: JSON.parse(localStorage.getItem('liked_id')) || []
}

export const likedSlise = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        removeLiked: (state, action) => {
            state.data = state.data.filter(item => item !== action.payload)
            state.data_id = state.data_id.filter(id => id !== action.payload)
            localStorage.setItem('liked', JSON.stringify(state.data))
            localStorage.setItem('liked_id', JSON.stringify(state.data_id))
        },
        addLiked: (state, action) => {
            state.data = [...state.data, action.payload]
            state.data_id = [...state.data_id, action.payload.id]
            localStorage.setItem('liked_id', JSON.stringify(state.data_id))
            localStorage.setItem('liked', JSON.stringify(state.data))
        }
    },
    extraReducers(builder) {
        builder
            .addCase(patchGoodsThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(patchGoodsThunk.fulfilled, (state, action) => {
                state.data = action.payload
                state.data_id = action.payload.id
                state.status = 'succes'
            })
            .addCase(patchGoodsThunk.rejected, (state) => {
                state.status = 'fail'
            })
        builder
            .addCase(getLikeds.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getLikeds.fulfilled, (state, action) => {
                state.data = action.payload
                state.data_id = action.payload
                state.status = 'succes'
            })
            .addCase(getLikeds.rejected, (state) => {
                state.status = 'fail'
            })
    }

})

export const { removeLiked, addLiked } = likedSlise.actions
export default likedSlise.reducer
