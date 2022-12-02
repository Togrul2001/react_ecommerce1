import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import Footer from '../Layouts/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

// const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/'})



// const countContext = createContext();

// function Login() {
//     const [count, setCount] = React.useState(10)
//     return (
//         <countContext.Provider value={{count,setCount}}>
//             {count} <br />
//             <CounterList/>
//         </countContext.Provider>
//     )

// }

// function CounterList(){
//     return <Counter/>
// }

// function Counter(){
//     return (
//         <countContext.Consumer>{(value)=><>{value.count} <button onClick={()=>value.setCount(value.count+1)}>Click</button></>}</countContext.Consumer>
//     )
// }

// function Login() {
//     const [count, setCount] = React.useState(10)
//     return (
//        <>
//        <p>{count}</p>  <br />
//         <CounterList count={count} setCount={setCount}/>
//        </>
//     )

// }

// function CounterList({count,setCount}){
//     return <Counter count={count} setCount={setCount}/>
// }

// function Counter({count,setCount}){
//     return (
//         <>
//             <p>{count}</p>
//             <button onClick={()=> setCount(count+1)}>Click</button>
//         </>
//     )
// }

const countContext = createContext()
const nameContext = createContext()



function Login(){
    const [count, setCount] = React.useState(5)
    const [name, setName] = React.useState("Jhonas")
    return(
        <>
        <nameContext.Provider value={{name,setName}}>
            <countContext.Provider value={{count, setCount}}>
                <CounterList/>
            </countContext.Provider>
        </nameContext.Provider>

        </>
    )
}

function CounterList(){
    return (
        <>
            <Counter/>
        </>
    )
}

function Counter(){
    const value = useContext(countContext)
    const namevalue = useContext(nameContext)
    return (
        <>
            {value.count}
            <button onClick={()=>value.setCount(value.count+1)}>Increase</button>

            <br /><br />

            {namevalue.name}
            <button onClick={()=>namevalue.name==='Jhonas' ? namevalue.setName("Gavi") : namevalue.setName("Jhonas")}>Change Name</button>
        </>
    )
}

export default Login