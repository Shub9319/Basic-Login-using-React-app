import './App.css';
//import Test from './MyComponents/Test';
import { LoginForm } from './MyComponents/Login/LoginForm';
import {Page} from './MyComponents/Page/Page';
import { Signup } from './MyComponents/Signup/Signup';
import React, { useState,useEffect } from 'react'
import {Route ,Switch,} from 'react-router-dom';
import { Error } from './MyComponents/Error/Error';
import {v4} from 'uuid'
import{BrowserRouter} from "react-router-dom";

function App() {
  const [allusers, setallusers] = useState([])
 

  useEffect(()=>{
    const retrieveusers= JSON.parse(localStorage.getItem("ALL_Users"))
    if(retrieveusers)
      setallusers(retrieveusers);
  },[])

  useEffect(()=>{
    localStorage.setItem("ALL_Users",JSON.stringify(allusers))
  },[allusers])



  const getusers = (details) => {
    setallusers([...allusers, { ...details}]);
}

//  const remove = () => {
//   localStorage.removeItem("ALL_Users");
// }

  return (
  <>
  <BrowserRouter>
  <Switch>
    <Route exact path='/' render={(props)=>(<LoginForm {...props}  allusers={allusers}/> )}/>
    <Route exact path='/signup' render={(props)=>(<Signup {...props} getusers={getusers}/> )} />
    <Route exact path='/homepage' component={Page}/>
    <Route component={Error}/>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;