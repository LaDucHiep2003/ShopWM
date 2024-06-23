
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="inner-item">
                                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718596500/WinMart-Logo-PNG-White_evys3a.png" alt="" />
                                    <p>Công Ty Cổ Phần Dịch Vụ Thương Mại Tổng Hợp WinCommerce</p>
                                    <p>Mã số doanh nghiệp: 0104918404 Đăng ký lần đầu ngày 20 tháng 09 năm 2010, đăng ký thay
                                        đổi
                                        lần thứ 48,
                                        ngày 30 tháng 06 năm 2023</p>
                                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718597494/logoSaleNoti_hevmlv.png" alt="" />
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="inner-item">
                                    <span>Về chúng tôi</span>
                                    <p>Giới thiệu về WinMart</p>
                                    <p>Danh sách cửa hàng</p>
                                    <p>Quản Lý Chất Lượng</p>
                                    <p>Chính sách bảo mật</p>
                                    <p>Điều khoản và điều kiện giao dịch</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="inner-item">
                                    <span>Hỗ trợ khách hàng</span>
                                    <p>Trung tâm </p>
                                    <p>Danh sách cửa hàng</p>
                                    <p>Quản Lý Chất Lượng</p>
                                    <p>Chính sách bảo mật</p>
                                    <p>Điều khoản và điều kiện giao dịch</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="inner-item">
                                    <span>Chăm sóc khách hàng</span>
                                    <p>Mua Online: 0247 1066866</p>
                                    <p>Email: cskh@gmail.com</p>

                                    <div className="social">
                                        <ul>
                                            <li><a href="#"><i><FaFacebookF /></i></a></li>
                                            <li><a href="#"><i> <FaYoutube /> </i></a></li>
                                            <li><a href="#"><i><FaInstagram /></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer