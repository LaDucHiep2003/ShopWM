import { useState } from "react"
import { createProduct } from "../../../../service/productsService"
import { Link, useNavigate } from 'react-router-dom';


function CreateProduct() {
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

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const result = await createProduct(data)

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
                            <div className='col-6'>Thêm sản phẩm</div>
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
                                    <input type="text" className="form-control" id="title" name="title" onChange={handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea onChange={handleChange} className="form-control" id="description" name="description" row="5" />
                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="featured1" name="featured" value="1"/>
                                    <label htmlFor="featured1" className="form-check-label">Nổi bật</label>
                                    
                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="featured0" name="featured" value="0"/>
                                    <label htmlFor="featured0" className="form-check-label">Không nổi bật</label>                                   
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price">Giá</label>
                                    <input onChange={handleChange} type="number" className="form-control" id="price" name="price" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="discountPercentage">% Giảm giá </label>
                                    <input onChange={handleChange} type="number" className="form-control" id="discountPercentage" name="discountPercentage" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="stock">Số lượng </label>
                                    <input onChange={handleChange} type="number" className="form-control" id="stock" name="stock" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="thumbnail">Image </label>
                                    <input onChange={handleChange} type="text" className="form-control" id="thumbnail" name="thumbnail" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Vị trí </label>
                                    <input onChange={handleChange} type="number" className="form-control" id="position" name="position" min="1" placeholder="Tự động tăng" />
                                </div>

                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusActive" name="status" value="active"/>
                                    <label htmlFor="statusActive" className="form-check-label">Hoạt động</label>                                   
                                </div>
                                <div className="form-group form-check form-check-inline">
                                    <input onChange={handleChange} type="radio" className="form-check-input" id="statusInActive" name="status" value="inactive"/>
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

export default CreateProduct