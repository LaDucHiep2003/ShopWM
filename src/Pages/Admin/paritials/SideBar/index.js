import { Link, useNavigate } from 'react-router-dom'
import './SideBar.css'
import './css2.css'
import { useEffect, useState } from 'react'
import { getDetailAcc, logout } from '../../../../service/authService'
import Cookies from 'universal-cookie'

function SideBar() {
    const [acc, setAcc] = useState([])
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getDetailAcc()
            setAcc(result)
        }
        fetchApi()
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        const fetchApi = async () => {
            const result = await logout()
            if (result) {
                cookies.remove('token')
                navigate('/admin/auth/login');
            }
        }
        fetchApi()
    }
    console.log(acc);
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <img src="https://www.codingnepalweb.com/demos/create-sidebar-menu-html-css-only/images/logo.png" alt="logo" />
                    <h2>Admin</h2>
                </div>
                <ul className="sidebar-links">
                    <h4>
                        <span className='inner-title'>Main Menu</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <Link to="/admin/dashboard" >
                            <span className="material-symbols-outlined"> dashboard </span>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/products"><span className="material-symbols-outlined"> overview </span>Product</Link>
                    </li>
                    <li>
                        <Link to="/admin/products-category"><span className="material-symbols-outlined"> overview </span>Category</Link>
                    </li>
                    {/* <li>
                        <Link to="/admin/products"><span className="material-symbols-outlined"> monitoring </span>Analytic</Link>
                    </li> */}
                    <h4>
                        <span className='inner-title'>General</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <Link to="/admin/roles"><span className="material-symbols-outlined"> folder </span>Nhóm Quyền</Link>
                    </li>
                    <li>
                        <Link to="/admin/accounts"><span className="material-symbols-outlined"> groups </span>Acccount</Link>
                    </li>
                    <li>
                        <Link to="/admin/roles/permissions"><span className="material-symbols-outlined"> move_up </span>Phân Quyền</Link>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> flag </span>All Reports</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined">
                            notifications_active </span>Notifications</a>
                    </li>
                    <h4>
                        <span className='inner-title'>Account</span>
                        <div className="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> account_circle </span>Profile</a>
                    </li>
                    <li>
                        <a href="#"><span className="material-symbols-outlined"> settings </span>Settings</a>
                    </li>
                    <li>
                        <a href='' onClick={handleClick}><span className="material-symbols-outlined"> logout </span>Logout</a>
                    </li>
                </ul>
                {acc && (
                    <div className="user-account">
                        <div className="user-profile">
                            {/* <img src={acc.image} alt="Profile Image" /> */}
                            <div className="user-detail">
                                <h3>{acc.fullName}</h3>
                                <span>{acc.email}</span>
                            </div>
                        </div>
                    </div>
                )}

            </aside>
        </>
    )
}
export default SideBar