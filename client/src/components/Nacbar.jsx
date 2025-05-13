import React from 'react'
import Logo from "../img/logo.jpg"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='links'>
                    <Link className='link' to="/?cat=blog">
                        <h4>Blog</h4>
                    </Link>
                    <Link className='link' to="/?cat=about">
                        <h4>about</h4>
                    </Link>
                    <Link className='link' to="/?cat=about">
                        <h4>about</h4>
                    </Link>
                    <Link className='link' to="/?cat=about">
                        <h4>about</h4>
                    </Link>
                    <Link className='link' to="/?cat=about">
                        <h4>about</h4>
                    </Link>
                    <Link className='link' to="/?cat=about">
                        <h4>about</h4>
                    </Link>
                    <span>Owen</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className="link" to='/write'>Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar