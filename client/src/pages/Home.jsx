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
                const res = await axios.get(`/posts/${cat}`)
                setPosts(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Test",
    //         desc: "My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content<br/><br/>My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content My test content",
    //         img: https://images.pexels.com/photos/18447656/pexels-photo-18447656.jpeg,
    //     },
    //     {
    //         id: 2,
    //         title: "Test",
    //         desc: "test",
    //         img: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg",
    //     },
    //     {
    //         id: 3,
    //         title: "Test",
    //         desc: "test",
    //         img: "https://images.pexels.com/photos/207900/pexels-photo-207900.jpeg",
    //     },
    // ]

    return (
        <div className='home'>
            <h1>Home</h1>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt=""></img>
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