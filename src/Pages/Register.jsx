import React from 'react';
import "./register.css"

function Register(){
    return(
        <>
        <div className="register_page">
            <form action="">
                <p>Register</p>
                <div>
                    <div className="firstname_div">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" className="" name="firstname" placeholder=""/>
                    </div>
                    <div className="lastname_div">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" className="" name="lastname" placeholder=""/>
                    </div>
                    <div className="email_div">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="" name="email" placeholder=""/>
                    </div>
                    <div className="password_div">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="" name="password" placeholder=""/>
                    </div>
                </div>

                <button className="" type="submit">Sign Up</button>

            </form>
        </div>
    </>
    )
}

export default Register