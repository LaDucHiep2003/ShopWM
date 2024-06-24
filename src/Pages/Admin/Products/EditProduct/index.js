import { useEffect, useState } from "react"
import { editProduct, getProductDetail } from "../../../../service/productsService"
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function EditProduct() {
    const [data, setData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductDetail(id)
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
        const result = await editProduct(id, data)

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
                                    <input type="text" className="form-control" id="title" name="title" onChange={handleChange} value={data.title}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea onChange={handleChange} className="form-control" id="description" name="description" row="5" value={data.description}/>
                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="featured1" name="featured" value="1" checked={data.featured === "1" ? true : false} />
                                    <label htmlFor="featured1" className="form-check-label">Nổi bật</label>

                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="featured0" name="featured" value="0" checked={data.featured === "0" ? true : false}/>
                                    <label htmlFor="featured0" className="form-check-label">Không nổi bật</label>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price">Giá</label>
                                    <input onChange={handleChange} type="number" className="form-control" id="price" name="price" value={data.price} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="discountPercentage">% Giảm giá </label>
                                    <input onChange={handleChange} type="number" className="form-control" id="discountPercentage" name="discountPercentage" value={data.discountPercentage} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="stock">Số lượng </label>
                                    <input onChange={handleChange} type="number" className="form-control" id="stock" name="stock" value={data.stock}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="thumbnail">Image </label>
                                    <input onChange={handleChange} type="text" className="form-control" id="thumbnail" name="thumbnail" value={data.thumbnail}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Vị trí </label>
                                    <input onChange={handleChange} type="number" value={data.position} className="form-control" id="position" name="position" min="1" placeholder="Tự động tăng" />
                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusActive" name="status" value="active" checked={data.status === "active" ? true : false} />
                                    <label htmlFor="statusActive" className="form-check-label">Hoạt động</label>
                                </div>
                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusInActive" name="status" value="inactive" checked={data.status === "inactive" ? true : false}/>
                                    <label htmlFor="statusInActive" className="form-check-label">Dừng hoạt động</label>
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

export default EditProduct