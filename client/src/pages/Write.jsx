import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import moment from "moment"

const Write = () => {
    const state = useLocation().state
    const [desc, setDesc] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("http://47.100.103.106:8800/api/upload", formData)
            return res.data;
        } catch(err) {
            console.log(err)
        }
    }

    const handleClick = async (e)=>{
        e.preventDefault()
        const imgUrl = await upload();

        try{
            state 
            ? await axios.put(`http://47.100.103.106:8800/api/posts/${state.id}`, {
                title, 
                desc: desc, 
                cat, 
                img: file ? imgUrl : "",
            })
            : await axios.post(`http://47.100.103.106:8800/api/posts/`, {
                title, 
                desc: desc, 
                cat, 
                img: file ? imgUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            });
            navigate("/");
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='add'>
            <div className='content'>
                <input type='text' placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
                <div className='editorContainer'>
                    <ReactQuill className='editor' theme="snow" value={desc} onChange={setDesc}/>
                </div>
            </div>
            <div className='menu'>
                <div className='item'>
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibilities: </b> Public
                    </span>
                    <input style={{display:"none"}} type='file' name='image' id='file' onChange={e=>setFile(e.target.files[0])}/>
                    <label className='file' htmlFor='file'>Upload image</label>
                    <div className='buttons'>
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                    
                </div>
                <div className='item'>
                    <h1>Category</h1>
                    <div className='cat'>
                        <input type='radio' checked={cat === "blog"} name='cat' value='blog' id='blog' onChange={e=>setCat(e.target.value)}></input>
                        <label htmlFor='blog'>Blog</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' checked={cat === "note"} name='cat' value='note' id='note' onChange={e=>setCat(e.target.value)}></input>
                        <label htmlFor='note'>Note</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' checked={cat === "travel"} name='cat' value='travel' id='travel' onChange={e=>setCat(e.target.value)}></input>
                        <label htmlFor='travel'>Travel</label>
                    </div>
                    <div className='cat'>
                        <input type='radio' checked={cat === "life"} name='cat' value='life' id='life' onChange={e=>setCat(e.target.value)}></input>
                        <label htmlFor='life'>Life</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write