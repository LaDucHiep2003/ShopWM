import React, { useEffect, useState } from "react"
import { createCategory, getCategoryList } from "../../../../service/productsService"
import { Link, useNavigate } from 'react-router-dom';

function CreateCategory() {
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCategoryList()
            setCategory(result)
        }
        fetchApi()
    }, [])

    const renderOptions = (items, level = 1, parentId = "") => {
        return items.map((item) => {
            const prefix = Array(level + 1).join("--");
            const isSelected = item.id === parentId;

            return (
                <React.Fragment key={item._id}>
                    <option value={item._id} selected={isSelected}>
                        {prefix}{item.name}
                    </option>
                    {item.children && item.children.length > 0 && (
                        renderOptions(item.children, level + 1, parentId)
                    )}
                </React.Fragment>
            );
        });
    };

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
        const result = await createCategory(data)

        if (result) {
            navigate(-1);
        }
    }
    
    console.log(category);
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
                            <div className='col-6'>Thêm Danh Mục Sản Phẩm</div>
                            <div className='col-6'>
                                <Link to='/admin/products-category' className='btn btn-success btn-sm'><b>Danh sách danh mục</b></Link>
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
                                    <input type="text" className="form-control" id="name" name="name" onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="parent_id">Danh mục cha</label>
                                    <select id="parent_id" name="parent_id" className="form-control" onChange={handleChange}>
                                        <option value="" >Chon danh mục cha</option>
                                        {renderOptions(category)}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea onChange={handleChange} className="form-control" id="description" name="description" row="5" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image">Image </label>
                                    <input onChange={handleChange} type="text" className="form-control" id="image" name="image" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Vị trí </label>
                                    <input onChange={handleChange} type="number" className="form-control" id="position" name="position" min="1" placeholder="Tự động tăng" />
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

export default CreateCategory;