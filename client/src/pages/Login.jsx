import React from 'react'
import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setError] = useState(null); 

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch(err) {
            setError(err.response.data);
        }
       
    }

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handleChange}></input>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}></input>
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't have an account?  <a href="./#/register">Register</a> </span>
            </form>
        </div>
    )
}

export default Login
