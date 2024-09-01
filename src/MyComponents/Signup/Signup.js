import React, {useState} from 'react'
import './Signup.css';
import { NavLink } from 'react-router-dom';
export const Signup = (props) => {
    const [details, setdetails] = useState({Firstname:"",Lastname:"", 
    email:"", password:""})
    
    const signuphandler = (e)=> {
        e.preventDefault();
        
        props.getusers(details);
        setdetails({
            Firstname:"",
            Lastname:"",
            email:"",
            password:""
        })
        alert("Signup Sucessfully !");

    }

    return (
        <>
        <div className="wrapper ">
        <div  className="signup">
            {/* Signup Header */}
        <h2 className="signup-header">Create Account</h2>

        {/* Firstname */}
    <form  className="login-container"  onSubmit={signuphandler} >
    <label htmlFor="FirstName">First Name </label>
      <p><input type="text" name="FirstName" required value ={details.Firstname} 
      onChange={(e)=> {
          setdetails({...details,
              Firstname : e.target.value
          })
      }} placeholder=" Enter First Name "  /></p>

      {/* LastName */}
    <label htmlFor="LastName">Last Name </label>
      <p><input type="text" name="LastName" required value ={details.Lastname} 
      onChange={(e)=> {
          setdetails({...details,
              Lastname : e.target.value
          })
      }} placeholder=" Enter Last Name "  /></p>
      
      {/* Email */}
    <label htmlFor="email">Email </label>
      <p><input type="email" name="email" required value ={details.email} 
      onChange={(e)=> {
          setdetails({...details,
              email : e.target.value
          })
      }} placeholder=" Enter Email "  /></p>

      {/* password */}
      <label htmlFor="password">Password</label>
      <p><input type="password"  name="password" required value ={details.password} 
      onChange={(e)=> { setdetails({...details,
          password : e.target.value
      })}} placeholder="Enter Password" /></p>

    
      <p><input type="submit" id="Signup" className="btn btn-block login-btn"/></p>
      <p >Already have account? <NavLink exact to="/">SignIn Now</NavLink></p>
    </form>
    </div>
    </div>
        </>
    )
}
