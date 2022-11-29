import React, { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'

const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/'})



function Login(){
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    
    const getUsers = useCallback(async () => {
        const { data } = await api.get(`/users`)
        setUsers(data)
    }, [])

    const getUser = useCallback(async () => {
        const id = Math.floor(Math.random() * 10) + 1 
        const { data } = await api.get(`/users/${id}`)
        setUser(data)
    }, [])

    useEffect(() => {
        getUsers(1)
    }, [getUsers])

    return(
        // <>{JSON.stringify(users, null, 2)}</>
        <>
        <button className="btn btn-success" onClick={getUser}>get user</button>
        {JSON.stringify(user, null, 2)} 
        </>
    )
}

export default Login