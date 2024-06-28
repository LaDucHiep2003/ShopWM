import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from "../../../../service/accountService";
import { getRoleList } from "../../../../service/productsService";

function CreateAccount() {
    const [data, setData] = useState([])
    const [role, setRole] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getRoleList()
            setRole(result)
        }
        fetchApi()
    }, [])

    console.log(data);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createAccount(data)

        if (result) {
            navigate(-1);
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
                            <div className='col-6'>Thêm Tài Khoản Admin</div>
                            <div className='col-6'>
                                <Link to='/admin/accounts' href='/admin/products' className='btn btn-success btn-sm'><b>Danh sách tài khoản</b></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container'>
                        <div className="inner-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="fullName">Họ Tên</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" onChange={handleChange} />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={handleChange} className="form-control" id="email" name="email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="passWord">Mật Khẩu</label>
                                    <input onChange={handleChange} type="text" className="form-control" id="passWord" name="passWord" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="phone">Số điện thoại</label>
                                    <input onChange={handleChange} type="number" className="form-control" id="phone" name="phone" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="avatar">Avatar </label>
                                    <input onChange={handleChange} type="text" className="form-control" id="avatar" name="avatar" />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="role_id">Phân quyền </label>
                                    <select className="form-control" id="role_id" name="role_id" onChange={handleChange}>
                                        <option disabled>
                                            ---Chọn quyền quản trị---
                                        </option>
                                        {role.map((item) => (
                                            <option key={item._id} value={item._id}>
                                                {item.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusActive" name="status" value="active" />
                                    <label htmlFor="statusActive" className="form-check-label">Hoạt động</label>
                                </div>
                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusInActive" name="status" value="inactive" />
                                    <label htmlFor="statusInActive" className="form-check-label">Dừng hoạt động</label>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-warning mt-2">
                                        Tạo mới
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;