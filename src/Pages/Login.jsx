import React, { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import Footer from '../Layouts/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

// const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/'})



function Login({ hideHeaderPaths = [] }){
    const click = () => {
        const input = document.getElementById('input')
        console.log("input", input)
    }


    React.useEffect(() => {
        
    })

    // const [users, setUsers] = useState([])
    // const [user, setUser] = useState({})
    
    // const getUsers = useCallback(async () => {
    //     const { data } = await api.get(`/users`)
    //     setUsers(data)
    // }, [])

    // const getUser = useCallback(async () => {
    //     const id = Math.floor(Math.random() * 10) + 1 
    //     const { data } = await api.get(`/users/${id}`)
    //     setUser(data)
    // }, [])

    // useEffect(() => {
    //     getUsers(1)
    // }, [getUsers])

    // return(
    //     // <>{JSON.stringify(users, null, 2)}</>
    //     <>
    //     <button className="btn btn-success" onClick={getUser}>get user</button>
    //     {JSON.stringify(user, null, 2)} 
    //     </>
    // )
    return (
        <>
        <br /><br />
            <input type="text" id='input'/>
            <button onClick={click}>Click</button>
            {new Array(20).fill(1).map(a => <br/>)}
        </>
    )
}

export default Login