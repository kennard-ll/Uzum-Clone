import { createSlice } from "@reduxjs/toolkit";
import { getCartThunk, postCartThunk } from "./postCartThunk";

const initialState = {
    data: JSON.parse(localStorage.getItem('cart')) || [],
    data_id: JSON.parse(localStorage.getItem('cart_id')) || []
}

export const cartSlise = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add_to_cart: (state, action) => {
            state.data = [...state.data, action.payload]
            state.data_id = [...state.data_id, action.payload.id]
            state.data = [...state.data, { ...action.payload.good, qt: action.payload.qt }]
            localStorage.setItem('cart_id', JSON.stringify(state.data_id))
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
        remove_from_cart: (state, action) => {
            state.data = state.data.filter(item => item !== action.payload)
            state.data_id = state.data_id.filter(id => id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.data))
            localStorage.setItem('cart_id', JSON.stringify(state.data_id))

        },
        increment: ({ data }, { payload }) => {
            data.forEach(item => {
                if (item.id === payload.id) {
                    item.qt++
                }
            });
            localStorage.setItem('cart', JSON.stringify(data))
        },
        decrement: ({ data }, { payload }) => {
            data.forEach(item => {
                if (item.id === payload.id) {
                    item.qt--
                }
            });
            localStorage.setItem('cart', JSON.stringify(data))

        },
    },
    extraReducers(builder) {
        builder
            .addCase(postCartThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postCartThunk.fulfilled, (state, action) => {
                state.data = action.payload
                state.data_id = action.payload.id
                state.status = 'succes'
            })
            .addCase(postCartThunk.rejected, (state) => {
                state.status = 'fail'
            })
        builder
            .addCase(getCartThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCartThunk.fulfilled, (state, action) => {
                state.data = action.payload
                state.data_id = action.payload
                state.status = 'succes'
            })
            .addCase(getCartThunk.rejected, (state) => {
                state.status = 'fail'
            })
            
    }
})

export const { add_to_cart, remove_from_cart, decrement, increment } = cartSlise.actions
export default cartSlise.reducer