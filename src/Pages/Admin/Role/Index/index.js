import { useEffect, useState } from 'react';
import { deleteRole, getRoleList} from '../../../../service/productsService';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reload } from '../../../../actions/reload';

function Role() {
    const [product, setProduct] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const reloadState = useSelector(state => state.reloadReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchApi = async () => {
            const result = await getRoleList()
            setProduct(result)
        }
        fetchApi()
    }, [reloadState])

    console.log(product);
    const handleChange = (e) => {
        // const value = e.target.value

        // setDataSearch(value)
    }
    const handleSearch = async () => {
        // const result = await getSearchProduct(dataSearch)
        // if (result) {
        //     setProduct(result)
        // }
    }

    const handleChangePosition = async (e) => {
        // const [key, value] = e.target.value.split(',');
        // console.log(key, value);
        // const result = await getSortProduct(key, value)
        // if (result) {
        //     setProduct(result)
        //     console.log(result);
        // }
    }

    const handleDelete = async (id) => {
        const result = await deleteRole(id);
        if (result) {
            console.log("ok");
            dispatch(reload())
        }
    }
    return (
        <>
            <div className='section-product'>
                <div className='container-fluid bg-white'>
                    <div className='header-product'>
                        <div className='row'>
                            <div className="col-12">
                                <h3 className='inner-title'>
                                    ShopWinMart
                                </h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>Danh sách sản phẩm</div>
                            <div className='col-6'>
                                <Link to='/admin/roles/create' className='btn btn-success btn-sm'><b>+ Thêm Nhóm Quyền</b></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container-fluid'>
                        <div className='inner-main'>
                            <div className='row mb-3 align-items-center'>
                                <div className='col-3'>
                                    <div className='inner-search d-flex'>
                                        <input onChange={handleChange} type="text" className="inner-input" placeholder="Tìm kiếm sản phẩm" />
                                        <button className='inner-button' onClick={handleSearch}><FaSearch /></button>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='inner-sort'>
                                        <select className='inner-list-item' onChange={handleChangePosition}>
                                            <option value="position,desc">Vị trí giảm dần</option>
                                            <option value="position,asc">Vị trí tăng dần</option>
                                            <option value="title,desc">Tiêu đề A - Z</option>
                                            <option value="title,asc">Tiêu đề Z - A</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <table className='table-product'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type='checkbox' name="checkall" />
                                                </th>
                                                <th>Stt</th>
                                                <th>Mô tả</th>
                                                <th>Nhóm quyền</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {product.length > 0 && product.map((item, idx) => (
                                                <tr key={item._id}>
                                                    <td>
                                                        <input type="checkbox"
                                                            name="id"
                                                            value={item._id} />
                                                    </td>
                                                    <td>
                                                        {idx}
                                                    </td>
                                                    <td>
                                                        {item.title}
                                                    </td>
                                                    <td>
                                                        {item.description}
                                                    </td>
                                                    <td>
                                                        <Link to={`/admin/products/detail/${item._id}`} className='btn btn-secondary btn-sm mr-1'> <b>Chi tiết</b></Link>
                                                        <Link to={`/admin/roles/edit/${item._id}`} className='btn btn-warning btn-sm'> <b>Sửa</b></Link>
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

export default Role;