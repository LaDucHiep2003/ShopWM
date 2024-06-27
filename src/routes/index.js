import LayoutDefault from "../Layouts/LayoutDefault";
import LayoutAdmin from "../Layouts/LayoutAdmin"
import Home from '../Pages/Home'
import Error404 from '../Pages/Error404'
import DashBoard from '../Pages/Admin/DashBoard'
import Products from "../Pages/Admin/Products/Index";
import CreateProduct from "../Pages/Admin/Products/CreateProduct";
import EditProduct from "../Pages/Admin/Products/EditProduct";
import DetailProduct from "../Pages/Admin/Products/DetailProduct";
import Category from "../Pages/Admin/Category/Index"
import CreateCategory from "../Pages/Admin/Category/CreateCategory";
import EditCategory from "../Pages/Admin/Category/EditCategory";
import Role from "../Pages/Admin/Role/Index";
import CreateRole from "../Pages/Admin/Role/CreateRole";
import EditRole from "../Pages/Admin/Role/EditRole";

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
            },
            {
                path : "products-category",
                element : < Category />
            },
            {
                path : "products-category/create",
                element : < CreateCategory />
            },
            {
                path : "products-category/edit/:id",
                element : < EditCategory />
            },
            {
                path : "roles",
                element : < Role />
            },
            {
                path : "roles/create",
                element : < CreateRole />
            },
            {
                path : "roles/edit/:id",
                element : < EditRole />
            },
        ]
    }
]