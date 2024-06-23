
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { FaRegEnvelope } from "react-icons/fa";
// import { FaHeadset } from "react-icons/fa";

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className="inner-logo">
                                <a href='/' alt="" >
                                    <img className="logo" src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1718596500/WinMart-Logo-PNG-White_evys3a.png" alt="" />
                                </a>

                            </div>
                        </div>

                        <div className="col-4">
                            <div className="inner-search">
                                <form action="" className="form-search">
                                    <span>
                                        <i ><FaSearch /></i>
                                    </span>
                                    <input type="text" placeholder="Tìm kiếm sản phẩm " />
                                </form>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="inner-delivery">
                                <a href="#">
                                    <span>
                                        <i ><FaMapMarkerAlt /></i>
                                    </span>
                                    <p>Giao hàng</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="inner-cart">
                                <a href="#">
                                    <span>
                                        <i><FaCartPlus /></i>
                                    </span>
                                    <p>Giỏ hàng (0)</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="inner-member">
                                <a href="#">
                                    <span>
                                        <i><FaUserCircle /></i>
                                    </span>
                                    <p>Hội viên</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header