import LayoutDefault from "../Layouts/LayoutDefault";
import LayoutAdmin from "../Layouts/LayoutAdmin"
import Home from '../Pages/Home'
import Error404 from '../Pages/Error404'
import DashBoard from '../Pages/Admin/DashBoard'
import Products from "../Pages/Admin/Products/Index";
import CreateProduct from "../Pages/Admin/Products/CreateProduct";
import EditProduct from "../Pages/Admin/Products/EditProduct";
import DetailProduct from "../Pages/Admin/Products/DetailProduct";

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
                element : < Products />,
            },
            {
                path : "products/create",
                element : <CreateProduct />
            },
            {
                path : "products/edit/:id",
                element : <EditProduct />
            },
            {
                path : "products/detail/:id",
                element : <DetailProduct />
            }
        ]
    }
]