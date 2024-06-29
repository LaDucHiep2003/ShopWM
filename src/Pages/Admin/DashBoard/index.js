import { useEffect, useState } from 'react'
import { getDashBoard } from '../../../service/dashboard'
function DashBoard() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getDashBoard()
            setData(result)
        }
        fetchApi()
    }, [])
    console.log(data.product);
    return (
        <>
            <div className='container-fluid'>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-header">Thông tin tài khoản</div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='card mb-4'>
                                <div className='card-header'>Danh mục sản phẩm</div>
                                <div className='card-body'>
                                    <p>
                                        Số lượng : <b>{data.categoryProduct.total}</b>
                                        
                                    </p>
                                    <p>
                                        Hoạt động : <b>{data.categoryProduct.active}</b>
                                        
                                    </p>
                                    <p>
                                        Dừng hoạt động : <b>{data.categoryProduct.inactive}</b>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='card mb-4'>
                                <div className='card-header'>Danh sách sản phẩm</div>
                                <div className='card-body'>
                                    <p>
                                        Số lượng : <b>{data.product.total}</b>
                                        
                                    </p>
                                    <p>
                                        Hoạt động : <b>{data.product.active}</b>
                                        
                                    </p>
                                    <p>
                                        Dừng hoạt động : <b>{data.product.inactive}</b>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='card mb-4'>
                                <div className='card-header'>Danh sách tài khoản Admin</div>
                                <div className='card-body'>
                                    <p>
                                        Số lượng : <b>{data.account.total}</b>
                                        
                                    </p>
                                    <p>
                                        Hoạt động : <b>{data.account.active}</b>
                                        
                                    </p>
                                    <p>
                                        Dừng hoạt động : <b>{data.account.inactive}</b>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='card mb-4'>
                                <div className='card-header'>Danh sách tài khoản client</div>
                                <div className='card-body'>
                                    <p>
                                        Số lượng : <b>{data.user.total}</b>
                                        
                                    </p>
                                    <p>
                                        Hoạt động : <b>{data.user.active}</b>
                                        
                                    </p>
                                    <p>
                                        Dừng hoạt động : <b>{data.user.inactive}</b>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default DashBoard