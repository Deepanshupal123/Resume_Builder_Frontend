import React from 'react'
import { Outlet } from 'react-router-dom'

const AdmingLayout = () => {
  return (
    <div className="w-full">
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default AdmingLayout
