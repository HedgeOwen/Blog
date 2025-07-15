import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from "react"

const Home = () => {
    const [posts, setPosts] = useState([])

    const cat = useLocation().search;

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/api/posts/${cat}`)
                setPosts(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className='home'>
            <h1>Home</h1>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={`../upload/${post.img}`} alt="post"></img>
                        </div>
                        <div className='content'>
                            <h1>{post.title}</h1>
                            <p>{getText(post.desc)}</p>
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
