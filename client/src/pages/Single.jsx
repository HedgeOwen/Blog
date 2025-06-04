import React from 'react'
import Logo from "../img/logo.jpg"
import {Link} from 'react-router-dom'
import Menu from "../components/Menu"

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src={Logo}></img>
            <div className='user'>
                <img src={Logo}></img>
            <div className='info'>
                <span>Owen</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className='edit'>
                <Link to={`/write?edit=1`}>
                    <button>Edit</button>
                </Link>
                <button>Delete</button>
            </div>
            </div>
            <h1>My test title</h1>
            <p>My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content
                <br/><br/>My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content
                
            </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single