
import { Outlet } from "react-router-dom"
import SideBar from '../../Pages/Admin/paritials/SideBar'
import Header from '../../Pages/Admin/paritials/Header'
import './LayoutAdmin.css'

function LayoutDefault() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <SideBar />
        </>
    )
}

export default LayoutDefault