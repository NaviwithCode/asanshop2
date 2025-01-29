import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminMenu from '../AdminMenu'
const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminMenu />} ></Route>
      </Routes>
    </div>
  )
}

export default AdminRoutes
