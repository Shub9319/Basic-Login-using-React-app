import React from 'react'
import ProductListDisplay from '../ProductListDisplay/ProductListDisplay';

function ProductList(props) {
    
    console.log(props.products);
    const getid= (id)=>{
        props.deletehandler(id);
    }
    const iterate = props.products.map ((p)=>{
        return (<ProductListDisplay displayproduct={p} deletehandler={getid} key={p.id}></ProductListDisplay>);    })
    return (
        <div >
            {iterate}
        </div>
    )
}

export default ProductList