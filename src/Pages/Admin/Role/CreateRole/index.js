import { useState } from "react"
import { createProduct, createRole } from "../../../../service/productsService"
import { Link, useNavigate } from 'react-router-dom';

function CreateRole() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createRole(data)

        if(result){
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
                            <div className='col-6'>Thêm Nhóm Quyền</div>
                            <div className='col-6'>
                                <Link to='/admin/roles' className='btn btn-success btn-sm'><b>Danh sách nhóm quyền</b></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container'>
                        <div className="inner-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Tiêu đề</label>
                                    <input type="text" className="form-control" id="title" name="title" onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea onChange={handleChange} className="form-control" id="description" name="description" row="5" />
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

export default CreateRole;