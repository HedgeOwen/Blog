import React from 'react'
import Logo from "../img/logo.jpg"
import axios from "axios"
import { useState, useEffect } from "react"

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/posts/?cat=${cat}`)
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
    //         desc: "test",
    //         img: Logo,
    //     },
    //     {
    //         id: 2,
    //         title: "Test",
    //         desc: "test",
    //         img: Logo,
    //     },
    //     {
    //         id: 3,
    //         title: "Test",
    //         desc: "test",
    //         img: Logo,
    //     },
    // ]
    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <img src={post.img} alt=""/>
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>    
            ))}
        </div>
    )
}

export default Menu