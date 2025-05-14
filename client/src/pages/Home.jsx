import React from 'react'
import Logo from "../img/logo.jpg"
import {Link} from 'react-router-dom'

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Test",
            desc: "test",
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
                            <Link to={`/post/${post.id}`} className='link'>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
       
    )
}

export default Home