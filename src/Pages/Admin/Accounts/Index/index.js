import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAccountList } from '../../../../service/accountService';
import { useSelector } from "react-redux";

function Accounts() {
    const [data, setData] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const reloadState = useSelector(state => state.reloadReducer)

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAccountList()
            setData(result.records)
        }
        fetchApi()
    }, [reloadState])



    const hangeleStatus = async (status) => {
        // const result = await getStatusCategory(status)
        // if (result) {
        //     setCategory(result)
        // }
    }
    const handleChangeStatus = async (id, status) => {
        // const newStatus = status === "active" ? "inactive" : "active"

        // const result = await changeStatusCategory(id, { status: newStatus })
        // if (result) {
        //     dispatch(reload())
        // }
    }


    const handleDelete = async (id) => {
        // const result = await deleteCategory(id);
        // if (result) {
        //     dispatch(reload())
        // }
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
                            <div className='col-6'>Danh Sách Tài Khoản Admin</div>
                            <div className='col-6'>
                                <Link to='/admin/accounts/create' className='btn btn-success btn-sm'><b>+ Thêm Tài Khoản</b></Link>
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
                                                <th>Stt</th>
                                                <th>Hình ảnh</th>
                                                <th>Họ Tên</th>
                                                <th>Phân quyền</th>
                                                <th>Email</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, idx) => (
                                                <tr key={item._id}>
                                                    <td>
                                                        {idx + 1}
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={item.avatar}
                                                            alt={item.fullName}
                                                        />
                                                    </td>
                                                    <td>
                                                        {item.fullName}
                                                    </td>
                                                    <td>
                                                        {item.role.title}
                                                    </td>
                                                     
                                                    <td>
                                                        {item.email}
                                                    </td>
                                                    <td>
                                                        {item.status === "active" ? (
                                                            <button onClick={() => handleChangeStatus(item._id, item.status)} className='badge bg-success'> Hoạt động </button>
                                                        ) : (
                                                            <button onClick={() => handleChangeStatus(item._id, item.status)} className='badge bg-danger'> Dừng hoạt động</button>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <Link to={`/admin/products/detail/${item._id}`} className='btn btn-secondary btn-sm mr-1'> <b>Chi tiết</b></Link>
                                                        <Link to={`/admin/accounts/edit/${item._id}`} className='btn btn-warning btn-sm'> <b>Sửa</b></Link>
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

export default Accounts;