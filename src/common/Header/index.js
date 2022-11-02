import React from 'react'
import '../Header/index.css'
import { Link } from "react-router-dom"

export default function index() {
    // Lấy thông tin user ( key value) từ Local Storage
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <div className='container'>
                {/* --------------------------------------------------------- */}
                <div className='zing-header'>
                    <div className='logo-header'>
                        <div>
                            <Link to="/" >
                                <img style={{ width: "100px", height: "29px" }} className='avatar' src='https://static-znews.zadn.vn/images/logo-zing-home.svg' />
                            </Link>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", height: "5px" }}>Tri thức trực tuyến</span>
                        </div>
                    </div>
                    <div className='category-menu'>
                        <ul className=''>

                            <li className='menu-item'>
                                <Link to="/admin" >Admin</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Book</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Thế giới</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Kinh doanh</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Công nghệ</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Sức khỏe</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Thể thao</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Giải trí</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Đời sống</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >Du lịch</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/books" >LifeStyle</Link>
                            </li>
                            <li style={{ marginTop: '17px' }}>
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </li>
                        </ul>
                    </div>
                    <div className='toolbox'>
                        <label style={{ fontSize: '25px' }}>
                            <ion-icon className="icon-search" name="search-outline"></ion-icon>
                        </label>
                        <Link to='/logout'>
                            <label className='username' style={{ fontSize: "17px" }}>
                                {user?.username}
                            </label>
                            <img className='avatar' src='http://tinhhoabacbo.com/wp-content/uploads/2021/12/cute-pho-mai-que.jpg' />
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}
