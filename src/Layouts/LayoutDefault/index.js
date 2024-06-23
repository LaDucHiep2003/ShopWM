import { Outlet } from "react-router-dom"
import Footer from "../../Pages/paritials/Footer"
import Header from "../../Pages/paritials/Header"
import './base.css'

function LayoutDefault() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default LayoutDefault