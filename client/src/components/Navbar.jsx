import React, { useContext } from 'react'
import Logo from "../img/logo.jpg"
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='links'>
                    <Link className='link' to="/?cat=blog">
                        <h4>BLOG</h4>
                    </Link>
                    <Link className='link' to="/?cat=note">
                        <h4>NOTE</h4>
                    </Link>
                    <Link className='link' to="/?cat=travel">
                        <h4>TRAVEL</h4>
                    </Link>
                    <Link className='link' to="/?cat=life">
                        <h4>LIFE</h4>
                    </Link>
                    <Link className='link' to="/?cat=about">
                        <h4>ABOUT</h4>
                    </Link>
                    <span>{ currentUser?.username }</span>
                    {currentUser? <span onClick={logout}>Logout</span> : <Link className="link" to="/login" ><span>Login</span></Link>}
                    <span className='write'>
                        <Link className="link" to='/write'>Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar