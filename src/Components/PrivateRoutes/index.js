import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'universal-cookie';

function PrivateRoutes() {
    const cookies = new Cookies();
    const token = cookies.get('token')
    const isLogin = token ? true : false;

    return (
        <>
            {isLogin ? <Outlet /> : <Navigate to="admin/auth/login"/>}
        </>
    )
}

export default PrivateRoutes;