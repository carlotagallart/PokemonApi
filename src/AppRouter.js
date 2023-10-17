import React from 'react'
import App from './App'
import { SinglePage } from './pages/SinglePage'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
export const AppRouter = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/pokemon/:id' element={<SinglePage/>}/>
   </Routes>
   </BrowserRouter>
  )
}
