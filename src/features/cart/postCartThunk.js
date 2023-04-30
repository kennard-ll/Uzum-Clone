import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3102"

export const postCartThunk = createAsyncThunk("cart/patchGoodsThunk", async (body) => {
    const res = await axios.post(BASE_URL + '/cart', body)

    return res.data
})
export const getCartThunk = createAsyncThunk("cart/getCartThunk", async () => {
    const res = await axios.get(BASE_URL + '/cart')

    return res.data
})