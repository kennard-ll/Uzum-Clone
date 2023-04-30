import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3102"

export const getGoodsThunk = createAsyncThunk("goods/getGoodsThunk", async () => {
    const res = await axios.get(BASE_URL + '/goods')

    return res.data
})

export const getGoodAPI = createAsyncThunk('goods/getGoodAPI', async () => {
    const res = await axios.get(BASE_URL + '/goods')

    return res.data
})

export const postGoodAPI = createAsyncThunk('goods/postGoodAPI', async (data) => {
    const res = await axios.post(BASE_URL + '/goods', data)

    return res.data
})

export const pathGoodAPI = createAsyncThunk('goods/pathGoodAPI', async (data) => {
    const res = await axios.patch(BASE_URL + '/goods' + data.id, data.path)

    return res.data
})

export const deleteGoodAPI = createAsyncThunk('goods/deleteGoodAPI', async (data) => {
    const res = await axios.delete(BASE_URL + '/goods' + data)

    return res.data
})

export const getLikeAPI = createAsyncThunk('goods/getLikeAPI', async () => {
    const res = await axios.get(BASE_URL + '/goods')

    return res.data
})

export const postLikeAPI = createAsyncThunk('goods/postLikeAPI', async (data) => {
    const res = await axios.post(BASE_URL + '/goods', data)

    return res.data
})

export const pathLikeAPI = createAsyncThunk('goods/pathLikeAPI', async (data) => {
    const res = await axios.patch(BASE_URL + '/goods' + data.id, data.path)

    return res.data
})

export const deleteLikeAPI = createAsyncThunk('goods/deleteLikeAPI', async (data) => {
    const res = await axios.delete(BASE_URL + '/goods' + data)

    return res.data
})