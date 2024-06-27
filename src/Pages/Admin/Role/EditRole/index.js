import { useEffect, useState } from "react"
import { editRole, getRoleDetail } from "../../../../service/productsService"
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function EditRole() {
    const [data, setData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getRoleDetail(id)
            if (result) {
                setData(result)
            }
        }
        fetchApi()
    }, [id])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name] : value
        })
    }

    console.log(data);
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const result = await editRole(id, data)

        if(result){
            navigate(-1);
        }
    }

    console.log(data);
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
                            <div className='col-6'>Chỉnh sửa sản phẩm</div>
                            <div className='col-6'>
                                <Link to='/admin/products' href='/admin/products' className='btn btn-success btn-sm'><b>Danh sách sản phẩm</b></Link>
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
                                    <input type="text" className="form-control" id="title" name="title" onChange={handleChange} value={data.title} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea onChange={handleChange} className="form-control" id="description" name="description" row="5" value={data.description} />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-warning mt-2">
                                        Cập nhật
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

export default EditRole;