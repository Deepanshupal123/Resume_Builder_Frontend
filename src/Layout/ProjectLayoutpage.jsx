import React from 'react'
import Navbar from '../components/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Common/Footer'

const ProjectLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="mx-auto w-full">
                <Navbar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default ProjectLayout
