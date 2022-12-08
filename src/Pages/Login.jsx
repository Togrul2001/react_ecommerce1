import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import Footer from '../Layouts/Footer/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { setToken } from '../data';



// const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/'})


function Login(){

    // const [loginForm, setLoginForm] = React.useState({
    //     email:'',
    //     password:''
    // })
    const navigation = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        const login = async () => {
            try {
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json" 
                   }
                   
                   let bodyContent = JSON.stringify({email,password});
                   
                   let reqOptions = {
                     url: "http://localhost:5000/login",
                     method: "POST",
                     headers: headersList,
                     data: bodyContent,
                   }
                   
                   let response = await axios.request(reqOptions)
                   setToken(response.data.accessToken)
                   navigation('/')
                   
                   console.log("response", response.data)
                   
            } catch (error) {
                try {
                    throw new Error("Istifadeci adi veya parol sehfdir")
                } catch (error) {
                    toast.error(`${error.message}`)
                    console.log("Error", error.message)
                }
            }
            
        }
        login()
    }
    const handleLoginEmail = (e)=> {
        // const {name,value} = e.target
        // const data = {[name]:value}
        // setLoginForm(data)
        setEmail(e.target.value)
        console.log("email", email)
        
    }

    const handleLoginPassword = (e)=> {
        setPassword(e.target.value)
        console.log("password", password)
    }


    return(
    <>

        <div className="login_page">
            <form action="" onSubmit={e=>handleSubmit(e)}>
                <p>Login</p>
                <div>
                    <div className="email_div">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="" name="email" placeholder="" onChange={(e)=>handleLoginEmail(e)}/>
                    </div>
                    <div className="password_div">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="" name="password" placeholder="" onChange={(e)=>handleLoginPassword(e)}/>
                    </div>
                </div>

                <button className="" type="submit">Login</button>

            </form>
        </div>
        <ToastContainer />
    </>
    )
}

export default Login