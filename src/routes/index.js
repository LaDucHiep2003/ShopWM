import LayoutDefault from "../Layouts/LayoutDefault";
import LayoutAdmin from "../Layouts/LayoutAdmin"
import Home from '../Pages/Home'
import Error404 from '../Pages/Error404'
import DashBoard from '../Pages/Admin/DashBoard'
import Products from "../Pages/Admin/Products/Index";

export const routes = [
    {
        path : "/",
        element : <LayoutDefault />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '*',
                element : <Error404 />
            }
        ]
    },
    {
        path : "/admin",
        element : <LayoutAdmin />,
        children : [
            {
                path : "dashboard",
                element : <DashBoard />
            },
            {
                path : "products",
                element : < Products />
            }
        ]
    }
]