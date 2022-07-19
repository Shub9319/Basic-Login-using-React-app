import React, { Component } from 'react'

export default class AddItem extends Component {
    state={
        name:"",
        desc: ""
    }

    submithandler= (e) =>{
        e.preventDefault();
        {this.state.name=== "" || this.state.desc==="" ?
        alert("All fields are mandatory"):this.props.addproduct(this.state)
    }
    this.setState({name:"", desc:""})
    }
    render() {
        return (
            <div className="container"> 
                <form onSubmit={this.submithandler}>
  <div className="form-group">
    <label htmlFor="itemname">Product Name</label>
    <input type="text" className="form-control" id="itemname" placeholder="Product Name"
    value={this.state.name} onChange={
        (e)=>{this.setState({name:e.target.value})}
    }/>
    
  </div>
  <div className="form-group">
    <label htmlFor="itemdesp">Product Description</label>
    <input type="text" className="form-control" id="itemdesp" placeholder="Product Description"
    value={this.state.desc} onChange={
        (e)=>{this.setState({desc:e.target.value})}
    }/>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">Add Product</button>
</form>
            </div>
        )
    }
}
