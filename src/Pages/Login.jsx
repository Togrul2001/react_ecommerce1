import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import Footer from '../Layouts/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import './login.css'

// const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/'})



function Login(){
    // const [users, setUsers] = React.useState([])
    // const getUsers = async () => {
    //   await axios.get("http://localhost:3001/users")
    //   .then(res=> {
    //     setUsers(res.data)
    //   })
    // }
  
    // React.useEffect(() => {
    //   getUsers()
    // }, [])

    const [loginForm, setLoginForm] = React.useState({
        email:'',
        password:''
    })
    const handleSubmit = (e) => {
        console.log("e", e)
        e.preventDefault()
    }
    const handleLogin = (e)=> {
        const {name,value} = e.target
        const data = {[name]:value}
        setLoginForm(data)
        
    }
    console.log("loginform", loginForm)

    return(
    <>
        <div className="login_page">
            <form action="" onSubmit={e=>handleSubmit(e)}>
                <p>Login</p>
                <div>
                    <div className="username_div">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="" name="email" placeholder="" onChange={(e)=>handleLogin(e)}/>
                    </div>
                    <div className="password_div">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="" name="password" placeholder="" onChange={(e)=>handleLogin(e)}/>
                    </div>
                </div>

                <button className="" type="submit">Login</button>

            </form>
        </div>
    </>
    )
}

export default Login