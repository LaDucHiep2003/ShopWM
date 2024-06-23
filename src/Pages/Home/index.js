
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'
import { FaCartPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa";
import { getProductList } from '../../service/productsService';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList()
            setProduct(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            {/* Slider */}
            <div className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="inner-main swiper mySwiper">
                                <div className="inner-list swiper-wrapper">
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="inner-item swiper-slide">
                                                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718624290/image-qc1_sivqwa.jpg" alt="" />
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="inner-item swiper-slide">
                                                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718624321/image-qc2_gp7rxs.jpg" alt="" />
                                            </div>
                                        </SwiperSlide>


                                    </Swiper>
                                </div>
                                {/* <div className="button-next">
                                    <span><i className="fa-solid fa-angle-right"></i></span>
                                </div>
                                <div className="button-prev">
                                    <span><i className="fa-solid fa-angle-left"></i></span>

                                </div> */}
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="inner-right">
                                <div className="inner-image">
                                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718624360/image-qc-right1_almcpd.jpg" alt="" />
                                </div>
                                <div className="inner-image">
                                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718624393/image-qc-right2_kcxioa.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-two' >
                <div className="container">
                    <div className='inner-main' >
                        <div className="row">
                            <div className="col-12">
                                <p className="inner-title">Sản Phẩm Khuyến Mãi</p>
                            </div>
                        </div>
                        <div className="inner-product">
                            <div className="row">
                                {product.map((item) => (
                                    <div className="col-20" key={item.id}>
                                        <div className="inner-item">
                                            <p className="discountPercent">{item.discountPercentage}%</p>
                                            <div className="inner-image">
                                                <img src={item.thumbnail} alt="" />
                                            </div>
                                            <div className="inner-content">
                                                <p className="product-name">{item.title} </p>
                                                <p className="product-unit">DVT : Chai</p>
                                                <div className="price">
                                                    <div className="price-new">{item.price}</div>
                                                    <del className="price-old">{item.price}</del>
                                                </div>
                                            </div>

                                            <div className="inner-add-cart">
                                                <span>
                                                    <i>
                                                        <FaCartPlus />
                                                    </i>
                                                </span>
                                                <span>Thêm Vào Giỏ</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="product-more">
                                        <p>Xem thêm 52 sản phẩm <b>Sản Phẩm Khuyến Mại</b>
                                            <i> <FaAngleDown /></i>
                                        </p>
                                    </div>
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

            {/* End Slider */}
        </>
    )
}

export default Home