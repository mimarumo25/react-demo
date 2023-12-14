import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../components/Home';

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default DashboardRoutes