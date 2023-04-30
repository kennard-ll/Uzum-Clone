import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3102"

export const patchGoodsThunk = createAsyncThunk("liked/patchGoodsThunk", async (body) => {
    const res = await axios.post(BASE_URL + '/liked', body)

    return res.data
})
export const getLikeds = createAsyncThunk("liked/getLikeds", async () => {
    const res = await axios.get(BASE_URL + '/liked')

    return res.data
})