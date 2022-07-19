import React from 'react'
import './Display.css';
import coffee2 from '../../../coffee2.jpg';

function ProductListDisplay(props) {
    // const {name, desc}=props.displayproduct;
    // alert({name},{desc})
    const generateid =()=>{
        props.deletehandler(props.displayproduct.id)
    }
    return (
        <>
        <div className="container" style={{padding:"10px 20px"}}>
            <div className="card">
            <img src={coffee2} className="card-img-top" alt="Cold coffee"/>
            <div className="card-body">
                <h5 className="card-title">{props.displayproduct.name}</h5>
                <p className="card-text">{props.displayproduct.desc}</p>
                <a className="btn btn-danger btn-lg btn-block" onClick={generateid}>Delete</a>
            </div>
            </div>
           
            </div>
        </>
    )
}

export default ProductListDisplay
