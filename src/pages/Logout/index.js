import { React, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {Login} from '../../pages'

const Logout = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem('token');

    useEffect(() => {
        if (user) {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            navigate("/login");
        }
    }, [])

    return (
        <div>
            <Login />
        </div>
    )
}
export default Logout;