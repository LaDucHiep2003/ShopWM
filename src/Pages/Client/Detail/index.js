
import { useEffect, useState } from 'react';
import './detail.scss'
import { FaCartPlus } from "react-icons/fa";
import { getProductDetailClient } from '../../../service/productsService';
import { useParams } from 'react-router-dom';
function Detail() {
    const [data, setData] = useState([])
    const { slug } = useParams();

    console.log(slug);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductDetailClient(slug)
            if (result) {
                setData(result)
            }
        }
        fetchApi()
    }, [slug])

    console.log(data);
    return (
        <>
            <div className="detailProduct">
                <div className="detailProduct__detail">
                    <div className="container">
                        <div className="row bg-white">
                            <div className="col-xl-4 col-4">
                                <div className="detailProduct__image">
                                    <img src={data.thumbnail} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="detailProduct__list">
                                    <h5 className="detailProduct__title">{data.title}</h5>
                                    <p className="detailProduct__id">SKU: 10171315</p>
                                    <div className="detailProduct__box--gray">
                                        <div className="detailProduct__box--gray__item">
                                            <p className="detailProduct__desc-price">Giá bán lẻ</p>
                                            <span className="detailProduct__price">{data.price} ₫</span>
                                        </div>
                                        <div className="detailProduct__box--gray__item">
                                            <p className="detailProduct__desc-status">Tình trạng</p>
                                            <span className="detailProduct__status">{data.stock > 0 ? "Còn hàng" : "Hết hàng"}</span>
                                        </div>
                                    </div>
                                    <div className="detailProduct__item">
                                        <p>Vận chuyển</p>
                                        <span className="detailProduct__chansport">
                                            Miễn phí giao hàng cho đơn từ 300.000đ.
                                            <br></br>
                                            Giao hàng trong 2 giờ.</span>
                                    </div>
                                    <div className="detailProduct__item">
                                        <p>Khuyến mại</p>
                                        <div className="detailProduct__discount">
                                            <div className="detailProduct__discount-item">Mua 1 Gói được tặng 1 gói CHANTE Nước giặt
                                                xả hương cao cấp 3,4kg</div>
                                            <div className="detailProduct__discount-item">Mua 1 Gói được tặng 1 gói CHANTE Nước giặt
                                                xả hương cao cấp 3,4kg</div>
                                        </div>

                                    </div>
                                    <div className="detailProduct__item">
                                        <p>Chọn loại</p>
                                        <span>
                                            <a href="">
                                                <button className="detailProduct__button">Gói</button>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="detailProduct__item">
                                        <p>Số lượng</p>
                                        <span>
                                            <input type="number" maxLength="2" max="99" defaultValue="1" />
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12">
                                <div className="detailProduct__addCart">

                                    <button className="detailProduct__addCart__button">
                                        <i><FaCartPlus /></i>
                                        <p>THÊM VÀO GIỎ</p>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailProduct__desc-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <span className="detailProduct__desc-top__desc">Mô tả</span>
                            </div>
                            <div className="col-8">
                                <span className="detailProduct__desc-top__info">Thông tin</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailProduct__infomation">
                    <div className="container">
                        <div className="row bg-white">
                            <div className="col-4">
                                <div className="detailProduct__infomation__desc">
                                    <div className="detailProduct__infomation__title">
                                        {data.title}
                                    </div>
                                    <span>
                                        {data.description}
                                    </span>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="detailProduct__infomation__item">
                                    <p>Sản phẩm</p>
                                    <span>{data.title}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section-three">
                <div className="container">
                    <div className="row inner-wrap">
                        <div className="col-3">
                            <div className="inner-item">
                                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1719133918/footer-1_b3pbxn.png" alt="" />
                                <p>Sản Phẩm An Toàn</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="inner-item">
                                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1719133918/footer-2_ljgwsl.png" alt="" />
                                <p>Cam Kết Chất Lượng</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="inner-item">
                                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1719133918/footer-3_jnhe1p.png" alt="" />
                                <p>Dịch Vụ Vượt Trội</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="inner-item">
                                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1719133918/footer-4_etvjqb.png" alt="" />
                                <p>Giao Hành Nhanh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;