import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AlertDashboard from './pages/AlertDashboard'
import Dashboard from './pages/Dashboard'
import PersonAdd from './pages/PersonAdd'
import PersonEdit from './pages/PersonEdit'

const App = () => {
  return (
    <Routes>
      <Route element={<Dashboard />} path="" />
      <Route element={<AlertDashboard />} path="alert" />
      <Route element={<PersonAdd />} path="add" />
      <Route element={<PersonEdit />} path="edit" />
    </Routes>
  )
}

export default App
