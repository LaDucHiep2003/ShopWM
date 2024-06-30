
import './detail.scss'
import { FaCartPlus } from "react-icons/fa";
function Detail() {
    return (
        <>
            <div class="detailProduct">
                <div class="detailProduct__detail">
                    <div class="container">
                        <div class="row bg-white">
                            <div class="col-xl-4">
                                <div class="detailProduct__image">
                                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1719739830/chante-20240227022918_gmvoa1.png" alt="" />
                                </div>
                            </div>
                            <div class="col-xl-8">
                                <div class="detailProduct__list">
                                    <h5 class="detailProduct__title">CHANTE Nước giặt xả hương cao cấp 3,4kg</h5>
                                    <p class="detailProduct__id">SKU: 10171315</p>
                                    <div class="detailProduct__box--gray">
                                        <div class="detailProduct__box--gray__item">
                                            <p class="detailProduct__desc-price">Giá bán lẻ</p>
                                            <span class="detailProduct__price">219.000 ₫</span>
                                        </div>
                                        <div class="detailProduct__box--gray__item">
                                            <p class="detailProduct__desc-status">Tình trạng</p>
                                            <span class="detailProduct__status">Còn hàng</span>
                                        </div>
                                    </div>
                                    <div class="detailProduct__item">
                                        <p>Vận chuyển</p>
                                        <span class="detailProduct__chansport">
                                            Miễn phí giao hàng cho đơn từ 300.000đ.
                                            <br></br>
                                            Giao hàng trong 2 giờ.</span>
                                    </div>
                                    <div class="detailProduct__item">
                                        <p>Khuyến mại</p>
                                        <div class="detailProduct__discount">
                                            <div class="detailProduct__discount-item">Mua 1 Gói được tặng 1 gói CHANTE Nước giặt
                                                xả hương cao cấp 3,4kg</div>
                                            <div class="detailProduct__discount-item">Mua 1 Gói được tặng 1 gói CHANTE Nước giặt
                                                xả hương cao cấp 3,4kg</div>
                                        </div>

                                    </div>
                                    <div class="detailProduct__item">
                                        <p>Chọn loại</p>
                                        <span>
                                            <a href="">
                                                <button class="detailProduct__button">Gói</button>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="detailProduct__item">
                                        <p>Số lượng</p>
                                        <span>
                                            <input type="number" maxlength="2" max="99" value="1" />
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div class="col-12">
                                <div class="detailProduct__addCart">

                                    <button class="detailProduct__addCart__button">
                                        <i><FaCartPlus /></i>
                                        <p>THÊM VÀO GIỎ</p>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detailProduct__desc-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <span class="detailProduct__desc-top__desc">Mô tả</span>
                            </div>
                            <div class="col-8">
                                <span class="detailProduct__desc-top__info">Thông tin</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="detailProduct__infomation">
                    <div class="container">
                        <div class="row bg-white">
                            <div class="col-4">
                                <div class="detailProduct__infomation__desc">
                                    <div class="detailProduct__infomation__title">
                                        Nước Giặt Xả Chanté Cao Cấp Hương Hoa Hồng Pháp Gói 3.4kg
                                    </div>
                                    <span>
                                        Cuộc sống hiện đại kéo theo nhu cầu của con người ngày càng được nâng cao. Nếu như trước
                                        đây, nước giặt chỉ cần sạch thì bây giờ hương thơm cũng là một yếu tố được chú trọng. Hiểu
                                        được điều này, Chanté cho ra mắt siêu phẩm Nước Giặt Xả Chanté Cao Cấp Hương Hoa Hồng Pháp
                                        gói 3.4kg - là dòng nước giặt có hương thơm từ hoa hồng Pháp cao cấp tạo điểm nhấn khác biệt
                                        cho sản phẩm. Sản phẩm hể hiện nét quý phái, quyến rũ và cá tính được nhiều chị em ưa chuộng
                                    </span>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="detailProduct__infomation__item">
                                    <p>Sản phẩm</p>
                                    <span>CHANTE Nước giặt xả hương cao cấp 3,4kg</span>
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