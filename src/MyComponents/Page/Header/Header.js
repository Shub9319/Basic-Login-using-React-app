import React from 'react'
import PropTypes from 'prop-types'
import './Header.css';
import { useHistory } from 'react-router-dom';
function Header(props) {
  const his = useHistory();

  const logout=()=>{
    console.log("i min push");
    his.push("/");
  }
    return (
      <>
      
      <h1 className="Heading" >Welcome to Deeps Cafe</h1>
            <nav className="navbar navbar-expand-lg navbar-light  " >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Welcome.. {props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="#"  >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Coffee</a></li>
            <li><a className="dropdown-item" href="#">Main course</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Try Something Diffrent</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search for food.." aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button> 
        <button className="btn btn-success btn-sm" onClick={logout} >Logout</button>
      </form>
    </div>
  </div>
  </nav>
        
      
      </>
    )
  
}

Header.propTypes ={
 title : PropTypes.string
}

export default Header
