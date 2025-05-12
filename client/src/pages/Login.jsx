import React from 'react'

const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" classname="username" placeholder="username"></input>
                <input required type="password" classname="password" placeholder="password"></input>
                <button>Login</button>
                <p>This is an error!</p>
                <span>Don't have an account?  <a href="./#/register">Register</a> </span>
            </form>
        </div>
    )
}

export default Login
