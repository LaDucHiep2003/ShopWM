import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategoryList, getSortCategory, getStatusCategory, getsearchCategory } from '../../../../service/productsService';
import { FaSearch } from "react-icons/fa";
import CategoryList from './CategoryList'
import { useSelector } from "react-redux";


function Category() {
    const [category, setCategory] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const reloadState = useSelector(state => state.reloadReducer)

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCategoryList()
            setCategory(result)
        }
        fetchApi()
    }, [reloadState])


    const hangeleStatus = async (status) => {
        const result = await getStatusCategory(status)
        if (result) {
            setCategory(result)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setDataSearch(value)
    }

    const handleSearch = async () => {
        const result = await getsearchCategory(dataSearch)
        if (result) {
            setCategory(result)
        }
    }
    const handleChangePosition = async (e) => {
        const [key, value] = e.target.value.split(',');
        const result = await getSortCategory(key, value)
        if (result) {
            setCategory(result)
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
                            <div className='col-6'>Danh Sách Danh Mục Sản Phẩm</div>
                            <div className='col-6'>
                                <Link to='/admin/products/create' className='btn btn-success btn-sm'><b>+ Thêm Danh Mục</b></Link>
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
                                        <input onChange={handleChange} type="text" className="inner-input" placeholder="Tìm kiếm danh mục" />
                                        <button className='inner-button' onClick={handleSearch}><FaSearch /></button>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='inner-list-status'>
                                        <button onClick={() => hangeleStatus("")} className='inner-status'>Tất cả</button>
                                        <button onClick={() => hangeleStatus("active")} className='inner-status ml-2'>Hoạt động</button>
                                        <button onClick={() => hangeleStatus("inactive")} className='inner-status ml-2'>Dừng hoạt động</button>
                                    </div>

                                </div>
                                <div className='col-2'>
                                    <div className='inner-sort'>
                                        <select className='inner-list-item' onChange={handleChangePosition}>
                                            <option value="position,desc">Vị trí giảm dần</option>
                                            <option value="position,asc">Vị trí tăng dần</option>
                                            <option value="name,desc">Tiêu đề A - Z</option>
                                            <option value="name,asc">Tiêu đề Z - A</option>
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
                                                <th>Hình ảnh</th>
                                                <th>Tên</th>
                                                <th>Vị trí</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {category.length > 0 && category.map((item, idx) => (
                                                <CategoryList item={item} idx ={idx}/>
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

export default Category;