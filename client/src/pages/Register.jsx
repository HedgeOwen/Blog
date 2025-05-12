import React from 'react'

const Register = () => {
    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" classname="username" placeholder="username"></input>
                <input required type="email" classname="email" placeholder="email"></input>
                <input required type="password" classname="password" placeholder="password"></input>
                <button>Register</button>
                <p>This is an error!</p>
                <span>Do have an account?  <a href="/login">Login</a> </span>
            </form>
        </div>
    )
}

export default Register