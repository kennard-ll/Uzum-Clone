import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { deleteGoodAPI, getGoodAPI, getGoodsThunk, pathGoodAPI, postGoodAPI } from "./getGoodsThunk";

const initialState = {
    data: [],
    filtered_data: []
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reduser: {
        getGoods: (state, action) => {
            state.data = state.data
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getGoodsThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getGoodsThunk.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'succes'
            })
            .addCase(getGoodsThunk.rejected, (state) => {
                state.status = 'fail'
            })
        builder
            .addCase(getGoodAPI.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getGoodAPI.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "fulfilled";
            })
            .addCase(getGoodAPI.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(postGoodAPI.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(postGoodAPI.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "fulfilled";
            })
            .addCase(postGoodAPI.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(pathGoodAPI.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(pathGoodAPI.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "fulfilled";
            })
            .addCase(pathGoodAPI.rejected, (state, action) => {
                state.status = "rejected";
            })
            .addCase(deleteGoodAPI.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(deleteGoodAPI.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "fulfilled";
            })
            .addCase(deleteGoodAPI.rejected, (state, action) => {
                state.status = "rejected";
            });
    }

})


export default goodsSlice.reducer