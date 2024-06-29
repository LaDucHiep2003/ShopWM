import { Outlet } from "react-router-dom";


function LayoutLogin() {
    return (
        <>
            <div className="section-login">
                 <Outlet />
            </div>
           
        </>
    )
}

export default LayoutLogin;