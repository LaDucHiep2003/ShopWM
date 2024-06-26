import { useEffect, useState } from 'react';
import {getProductList, getSearchProduct, getSortProduct, statusProduct } from '../../../../service/productsService';
import './index.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProductList from './ProductList';


function Products() {
    const [product, setProduct] = useState([])
    const [status, setStatus] = useState(false)
    const [dataSearch, setDataSearch] = useState([])


    const reload = () => {
        setStatus(!status)
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList()
            setProduct(result)
        }
        fetchApi()
    }, [])

    const hangeleStatus = async (status) => {
        const result = await statusProduct(status)
        if(result){
            console.log(result);
            setProduct(result)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value

        setDataSearch(value)
    }
    const handleSearch = async () =>{
        const result = await getSearchProduct(dataSearch)
        if(result){
            console.log(result);
        }
    }
    
    const handleChangePosition = async (e) =>{
        const [key, value] = e.target.value.split(',');
        console.log(key, value);
        const result = await getSortProduct(key, value)
        if(result){
            console.log(result);
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
                            <div className='col-6'>Danh sách sản phẩm</div>
                            <div className='col-6'>
                                <Link to= '/admin/products/create' className='btn btn-success btn-sm'><b>+ Thêm sản phẩm</b></Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container-fluid'>
                        <div className='inner-main'>
                            <div className='row mb-3'>
                                <div className='col-3'>
                                    <div className='inner-search d-flex'>
                                        <input onChange={handleChange} type="text" className="form-control" placeholder="Tìm kiếm sản phẩm"/>
                                        <button className='btn btn-search' onClick={handleSearch}><FaSearch /></button>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <button onClick={() => hangeleStatus("")} className='badge bg-success'>Tất cả</button>
                                    <button onClick={() => hangeleStatus("active")} className='badge bg-success ml-2'>Hoạt động</button>
                                    <button onClick={() => hangeleStatus("inactive")} className='badge bg-success ml-2'>Dừng hoạt động</button>
                                </div>
                                <div className='col-2'>
                                    <div className='sort d-flex'>
                                        <select className='form-control' onChange={handleChangePosition}>
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
                                                <th>Hình ảnh</th>
                                                <th>Tiêu đề</th>
                                                <th>Giá</th>
                                                <th>Vị trí</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {product.length > 0 && product.map((item, idx) => (
                                                <ProductList key={item.id} item={item} idx={idx} onReload={reload} />
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

export default Products