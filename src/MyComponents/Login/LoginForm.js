import React, { useEffect, useState } from 'react';
import './Login.css';
import { NavLink, useHistory,Router } from 'react-router-dom';
export const LoginForm = (props) => {
    const [loginInfo, setloginInfo] = useState({ email: "", password: "" })
    const [islogin, setislogin] = useState(false);
    const history = useHistory();
    var flag = false;

    const submithandler = e => {
        e.preventDefault();
        props.allusers.map((user) => {
            if (user.email === loginInfo.email && user.password === loginInfo.password) {
                flag = true
                setislogin(true);
            }
        })
        if (!flag) {
            document.getElementById("invalidlogin").innerHTML = "Invalid username and password!";
            setloginInfo({
                email: "",
                password: ""
            })
        }

    }

    useEffect(() => {
        {
            if (islogin) history.push("/homepage")
        }
    }, [islogin]);


    return (
        <>
            <div className="wrapper ">
                <div className="login" data-testid="login_DIV">
                    <h2 className="login-header" >Deeps'Cafe Login</h2>
                    <form className="login-container" role="form" onSubmit={submithandler}    >
                        <label htmlFor="email">Email </label>
                        <p><input type="email" id="email"  required value={loginInfo.email}
                            onChange={(e) => {
                                setloginInfo({
                                    ...loginInfo,
                                    email: e.target.value
                                })
                            }} placeholder=" Enter Email " /></p>
                        <label htmlFor="password">Password</label>
                        <p><input type="password" id="password" required value={loginInfo.password}
                            onChange={(e) => {
                                setloginInfo({
                                    ...loginInfo,
                                    password: e.target.value
                                })
                            }} placeholder="Enter Password" /></p>
                        <a className="password-forgot" href="#">Forgot Password?</a>
                        <p><input type="submit" value="LogIn" id="login" className="btn btn-block login-btn" /></p>
                        <div style={{ textAlign: "center", color: "red", fontWeight: "bold" }} id="invalidlogin"></div>
                        <p >Not a Member? 
       <NavLink exact to='/signup' >Sign Up</NavLink></p>
                    </form>
                </div>
                <div className="container " style={{ paddingRight: '140px' }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.allusers.map((user) => {
                                    return (
                                        <tr key={user.password}>
                                            <td>{user.Firstname}</td>
                                            <td>{user.Lastname}</td>
                                            <td >{user.email}</td>
                                            <td >{user.password}</td>
                                            {/* <td><button className="btn btn-danger  " onClick={()=>{props.remove(user.id)}}>Remove</button></td> */}
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}