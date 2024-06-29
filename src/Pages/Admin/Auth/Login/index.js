
import { useState } from 'react'
import './login.css'
import { login } from '../../../../service/authService'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Login() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await login(data)

        console.log(result);
        if (result.code === 200) {
            console.log(result.code);
        }else{
            cookies.set('token', result.token);
            navigate('/admin/dashboard');
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form className="d-flex justify-content-center">
                            <div className="login-box">
                                <div className="login-header">
                                    <header>Quản lý đăng nhập</header>
                                </div>
                                <div className="input-box">
                                    <input className="input-field" type="email" placeholder="Email" name="email" onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <input className="input-field" type="password" placeholder="Password" name="passWord" onChange={handleChange} />
                                </div>
                                <div className="input-submit">
                                    <button className="submit-btn" type="submit" id="submit" onClick={handleSubmit}></button>
                                    <label htmlFor="submit">Đăng nhập</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;