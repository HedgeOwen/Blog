import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [err, setError] = useState(null); 

    const navigate = useNavigate();

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        try {
            await axios.post("http://47.100.103.106:8800/auth/register", inputs);
            navigate("/login");
        } catch(err) {
            setError(err.response.data);
        }
       
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handleChange}></input>
                <input required type="email" placeholder="email" name="email" onChange={handleChange}></input>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <button onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Do have an account?  <a href="./#/login">Login</a> </span>
            </form>
        </div>
    )
}

export default Register