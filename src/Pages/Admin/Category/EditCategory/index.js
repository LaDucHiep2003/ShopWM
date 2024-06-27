import { useEffect, useState } from "react"
import { editCategory, getCategoryDetail } from "../../../../service/productsService"
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditCategory() {
    const [data, setData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCategoryDetail(id)
            if (result) {
                setData(result)
            }
        }
        fetchApi()
    }, [id])

    console.log(data);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name] : value
        })
    }
    console.log(data);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(id, data);
        const result = await editCategory(id, data)

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
                                <h3 className='inner-title'>
                                    ShopWinMart
                                </h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>Chỉnh Sửa Danh Mục Sản Phẩm</div>
                            <div className='col-6'>
                                <Link to='/admin/products-category'className='btn btn-success btn-sm'><b>Danh sách danh mục</b></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container'>
                        <div className="inner-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Tên</label>
                                    <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea onChange={handleChange} value={data.description} className="form-control" id="description" name="description" row="5" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image </label>
                                    <input onChange={handleChange} value={data.image} type="text" className="form-control" id="image" name="image" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Vị trí </label>
                                    <input onChange={handleChange} value={data.position} type="number" className="form-control" id="position" name="position" min="1" placeholder="Tự động tăng" />
                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusActive" name="status" value="active" checked={data.status === "active" ? true : false} />
                                    <label htmlFor="statusActive" className="form-check-label" >Hoạt động</label>
                                </div>
                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusInActive" name="status" value="inactive" checked={data.status === "inactive" ? true : false} />
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

export default EditCategory;