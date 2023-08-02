import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Landingpage'
import Register from './Landingpage/components/Register'

function AppRoutes() {
  return (
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        
        <Route path="/create" element={<Register/>} />
      </Routes>
    )
}

export default AppRoutes