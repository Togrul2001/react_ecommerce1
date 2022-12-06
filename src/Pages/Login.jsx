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
        email: '',
        password: '',
    })
    return(
    <>
        <div className="login_page">
            <form action="">
                <p>Login</p>
                <div>
                    <div className="username_div">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="" name="email" placeholder=""/>
                    </div>
                    <div className="password_div">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="" name="password" placeholder=""/>
                    </div>
                </div>

                <button className="">Login</button>

            </form>
        </div>
    </>
    )
}

export default Login