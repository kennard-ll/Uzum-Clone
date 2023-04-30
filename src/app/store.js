import { configureStore } from '@reduxjs/toolkit'
import goodsSlice from '../features/goods/goodsSlice'
import likedSlise from '../features/liked/likedSlise'
import cartSlise from '../features/cart/cartSlise'

export const store = configureStore({
  reducer: {
    goods: goodsSlice,
    liked: likedSlise,
    cart: cartSlise
  }
})