import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Basket from './pages/Basket'
import Favorite from './pages/Favorite'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route  path='/product/:id' element={<Product />} />
        <Route  path='/favorite' element={<Favorite />} />
        <Route  path='/basket' element={<Basket />} />
      </Route>
    </Routes>
  )
}

export default App
