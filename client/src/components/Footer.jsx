import React from 'react'
import Logo from "../img/logo.jpg"

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt='logo'></img>
            <span>
                Made with <b>React.js</b>.
            </span>
        </footer>
    )
}

export default Footer