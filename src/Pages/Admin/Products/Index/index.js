import { useEffect, useState } from 'react';
import { changeStatus, deleteProduct, getProductList } from '../../../../service/productsService';
import './index.css'
import { Link } from 'react-router-dom';


function Products() {
    const [product, setProduct] = useState([])
    const [status, setStatus] = useState(false)

    const handleReload = () => {
        setStatus = (!status)
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList()
            setProduct(result)
        }
        fetchApi()
    }, [handleReload])

    const handleChangeStatus = async (id, status) => {
        const newStatus = status === "active" ? "inactive" : "active"

        const result = await changeStatus(id, { status: newStatus })
        if (result) {
            console.log(result);
        }
    }

    const handleDelete = async (id) => {
        const result = await deleteProduct(id);
        if (result) {
            console.log("ok");
        }
    }

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
                            <div className='col-6'>Danh sách sản phẩm</div>
                            <div className='col-6'>
                                <Link to= '/admin/products/create' className='btn btn-success btn-sm'><b>+ Thêm sản phẩm</b></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container-fluid'>
                        <div className='inner-main'>
                            <div className='row'>
                                <div className='col-12'>
                                    <table className='table-product'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type='checkbox' name="checkall" />
                                                </th>
                                                <th>Stt</th>
                                                <th>Hình ảnh</th>
                                                <th>Tiêu đề</th>
                                                <th>Giá</th>
                                                <th>Vị trí</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {product.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>
                                                        <input type="checkbox"
                                                            name="id"
                                                            value={item._id} />
                                                    </td>
                                                    <td>
                                                        {idx}
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={item.thumbnail}
                                                            alt={item.title}
                                                        />
                                                    </td>
                                                    <td>
                                                        {item.title}
                                                    </td>
                                                    <td>
                                                        {item.price}$
                                                    </td>
                                                    <td>
                                                        {item.position}
                                                    </td>
                                                    <td>
                                                        {item.status === "active" ? (
                                                            <button onClick={() => handleChangeStatus(item._id, item.status)} className='badge bg-success'> Hoạt động </button>
                                                        ) : (
                                                            <button onClick={() => handleChangeStatus(item._id, item.status)} className='badge bg-danger'> Dừng hoạt động</button>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <a href='/admin/products' className='btn btn-secondary btn-sm mr-1'> <b>Chi tiết</b></a>
                                                        <a href='/admin/products' className='btn btn-warning btn-sm'> <b>Sửa</b></a>
                                                        <button onClick={() => handleDelete(item._id)} className='btn btn-danger btn-sm'> <b>Xóa</b> </button>
                                                    </td>
                                                </tr>

                                            ))}
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

export default Products