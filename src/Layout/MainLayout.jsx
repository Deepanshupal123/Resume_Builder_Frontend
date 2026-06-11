import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="mx-auto w-full">
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
