import { useEffect, useState } from 'react';
import { changeStatus, getProductList } from '../../../../service/productsService';
import './index.css'

function Products() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList()
            setProduct(result)
        }
        fetchApi()
    }, [])

    const handleChangeStatus = async (id,status) =>{
        const fetchApi = async () => {
            const result = await changeStatus(id, status)
        }
        fetchApi()
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
                        </div>
                        <div className='col-3'>

                        </div>
                        <div className='col-3'>
                            <button className='inner-button-add-pruduct'>+ Thêm sản phẩm</button>
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
                                                            <button className='badge bg-danger'> Dừng hoạt động</button>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <a href='/admin/products' className='btn btn-secondary btn-sm mr-1'> <b>Chi tiết</b></a>
                                                        <a href='/admin/products' className='btn btn-warning btn-sm'> <b>Sửa</b></a>
                                                        <a href='/admin/products' className='btn btn-danger btn-sm ml-2'> <b>Xóa</b> </a>
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