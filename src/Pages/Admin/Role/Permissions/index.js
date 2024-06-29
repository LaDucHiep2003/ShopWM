import { useEffect, useState } from "react";
import { addPermissions, getPermissionsList } from "../../../../service/productsService";
import './permissions.css'
import { Link } from "react-router-dom";


function Permissions() {
    const [data, setData] = useState([])
    const [perms, setPms] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getPermissionsList()
            setData(result)
        }
        fetchApi()
    }, [])
    console.log(perms);

    const handleChange = (id, permissions) => {
        setPms(prevPerms => {
            const existingItemIndex = prevPerms.findIndex(item => item.id === id);
            if (existingItemIndex > -1) {
                const updatedPerms = [...prevPerms];
                const existingPermissions = updatedPerms[existingItemIndex].permissions;
                if (existingPermissions.includes(permissions)) {
                    // Remove the permission if it already exists
                    updatedPerms[existingItemIndex].permissions = existingPermissions.filter(perm => perm !== permissions);
                } else {
                    // Add the new permission
                    updatedPerms[existingItemIndex].permissions.push(permissions);
                }
                return updatedPerms;
            } else {
                // Add a new item with the permission
                return [...prevPerms, { id, permissions: [permissions] }];
            }
        });
    }

    const handleUpdate = async () => {
        const result = await addPermissions({ permissions: perms })

        if (result) {
            console.log(result);
        }
    }

    const isChecked = (id, permission) => {
        const item = data.find(item => item._id === id);
        if(item && item.permissions.includes(permission)){
            return true;
        }
        return false;
    };


    return (
        <>
            <div className='section-product'>
                <div className='container-fluid bg-white'>
                    <div className='header-product'>
                        <div className='row'>
                            <div className="col-12">
                                <p className='inner-title'>
                                    ShopWinMart
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>Phân Quyền</div>
                            <div className='col-6'>
                                <Link to='/admin/roles' className='btn btn-success btn-sm'><b>Danh sách nhóm quyền</b></Link>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container-fluid'>
                        <div className='inner-main'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="inner-button-right">
                                        <button className="btn btn-success btn-sm" onClick={handleUpdate}>Cập nhật</button>
                                    </div>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <table className='table-product'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Tính năng
                                                </th>
                                                {data.map((item) => (
                                                    <th key={item._id} className="text-center">
                                                        {item.title}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan="4">Danh sách sản phẩm</td>
                                            </tr>
                                            
                                            <tr >
                                                <td>Xem</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => handleChange(item._id, "products_views")}
                                                            checked={isChecked(item._id, "products_views")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Thêm mới</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input 
                                                            type="checkbox" onChange={() => handleChange(item._id, "products_create")} 
                                                            checked={isChecked(item._id, "products_create")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Chỉnh sửa</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input type="checkbox" 
                                                            onChange={() => handleChange(item._id, "products_edit")} 
                                                            checked={isChecked(item._id, "products_edit")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Xóa</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input type="checkbox" 
                                                            onChange={() => handleChange(item._id, "products_delete")} 
                                                            checked={isChecked(item._id, "products_delete")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>

                                            {/* Category */}
                                            <tr>
                                                <td colSpan="4">Danh sách mục sản phẩm</td>
                                            </tr>
                                            
                                            <tr >
                                                <td>Xem</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => handleChange(item._id, "products-category_views")}
                                                            checked={isChecked(item._id, "products-category_views")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Thêm mới</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input 
                                                            type="checkbox" onChange={() => handleChange(item._id, "products-category_create")} 
                                                            checked={isChecked(item._id, "products-category_create")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Chỉnh sửa</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input type="checkbox" 
                                                            onChange={() => handleChange(item._id, "products-category_edit")} 
                                                            checked={isChecked(item._id, "products-category_edit")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Xóa</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input type="checkbox" 
                                                            onChange={() => handleChange(item._id, "products-category_delete")} 
                                                            checked={isChecked(item._id, "products-category_delete")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>

                                            {/* Role */}
                                            <tr>
                                                <td colSpan="4">Nhóm quyền</td>
                                            </tr>
                                            
                                            <tr >
                                                <td>Xem</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => handleChange(item._id, "roles_views")}
                                                            checked={isChecked(item._id, "roles_views")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Thêm mới</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input 
                                                            type="checkbox" onChange={() => handleChange(item._id, "roles_create")} 
                                                            checked={isChecked(item._id, "roles_create")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Chỉnh sửa</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input type="checkbox" 
                                                            onChange={() => handleChange(item._id, "roles_edit")} 
                                                            checked={isChecked(item._id, "roles_edit")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr >
                                                <td>Xóa</td>
                                                {data.map((item) => (
                                                    <td key={item._id} className="text-center">
                                                        <input type="checkbox" 
                                                            onChange={() => handleChange(item._id, "roles_delete")} 
                                                            checked={isChecked(item._id, "roles_delete")}
                                                        />
                                                    </td>
                                                ))}
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Permissions;