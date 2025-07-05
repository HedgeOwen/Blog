import React, { useContext } from 'react'
import Menu from "../components/Menu"
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from "react"
import moment from "moment"
import { AuthContext } from '../context/authContext'

const Single = () => {
    const [post, setPost] = useState({})

    const location = useLocation(AuthContext);

    const postId = location.pathname.split("/")[2];

    const {currentUser} = useContext(AuthContext);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [postId]);

    const navigate = useNavigate();
    const handleDelete = async ()=>{
        try{
            await axios.delete(`/posts/${postId}`)
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }
    return (
        <div className='single'>
            <div className='content'>
                <img src={post?.img} alt=""></img>
            <div className='user'>
                {post.userImg && (<img src={post.userImg} alt="  User"/>)}
            <div className='info'>
                <span>{post?.username}</span>
                <p>Posted {moment(post?.date).fromNow()}</p>
            </div>
            {currentUser.username === post.username && (
            <div className='edit'>
                <Link to={`/write?edit=1`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
            )}
            </div>
            <h1>{post.title}</h1>
            {post.desc}
            </div>
            <Menu cat={post.cat}/>
        </div>
    )
}

export default Single