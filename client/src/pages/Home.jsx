import React from 'react'
import Logo from "../img/logo.jpg"
import {Link} from 'react-router-dom'

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Test",
            desc: "My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content<br/><br/>My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content",
            img: Logo,
        },
        {
            id: 2,
            title: "Test",
            desc: "test",
            img: Logo,
        },
        {
            id: 3,
            title: "Test",
            desc: "test",
            img: Logo,
        },
    ]

    return (
        <div className='home'>
            <h>Home</h>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img}></img>
                        </div>
                        <div className='content'>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <Link to={`/post/${post.id}`} className='link'>
                                <button>Read More</button>
                            </Link>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
       
    )
}

export default Home