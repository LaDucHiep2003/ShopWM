import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "../../../../service/productsService";

function DetailProduct() {
    const [data, setData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductDetail(id)
            if (result) {
                setData(result)
            }
        }
        fetchApi()
    }, [id])


    return (
        <>
            <div className='section-product'>
                <div className='container-fluid bg-white'>
                    <div className='header-product'>
                        <div className='row'>
                            <div className="col-12">
                                <h4 className='inner-title'>
                                    ShopWinMart
                                </h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>Chi tiết sản phẩm</div>
                            <div className='col-6'>
                                <Link to='/admin/products' href='/admin/products' className='btn btn-success btn-sm'><b>Danh sách sản phẩm</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner-products bg-white'>
                    <div className='container'>
                        <div className="inner-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="inner-title">{data.title}</div>
                                </div>
                                <div className="col-12">
                                    <div className="inner-thumbnail">
                                        <img src={data.thumbnail} alt={data.title}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="inner-title">{data.description}</div>
                                </div>
                                <div className="col-12">
                                    <div className="inner-price">{data.price}$</div>
                                </div>
                                <div className="col-12">
                                    <div className="inner-discountPercentage">{data.discountPercentage}%</div>
                                </div>
                                <div className="col-12">
                                    <div className="inner-stock">{data.stock}</div>
                                </div>
                                <div className="col-12">
                                    <div className="inner-position">{data.position}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProduct;