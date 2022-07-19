import React,{useState} from 'react'
import AddItem from './AddItem/AddItem'
import { Footer } from './Footer/Footer'
import Header from './Header/Header'
import NavLeft from './Nav-Left/NavLeft'
import ProductList from './ProductList/ProductList'
import { v4 } from 'uuid'
import  './Page.css';

export const Page = () => {
    const [products, setproducts] = useState([])

   const addproduct = (product) => {
       
            setproducts([...products, {id:v4(), ...product}])
            console.log(products);
    }

    const deletehandler =(id)=>{
        const newproductlist= products.filter((i)=>{
            return i.id!=id;
        })
        setproducts(newproductlist);
    }
    return (
        <>
         <Header ></Header>
         
         <div className='flex-container' >
         <NavLeft></NavLeft>
         
         <div className="container" style={{padding:"20px 70px",width:'20cm'}}>
         <AddItem  addproduct={addproduct}></AddItem>
         </div>
         
        
         <ProductList  products={products} deletehandler={deletehandler}></ProductList>
         </div>
         
         <Footer></Footer>
        </>
    )
}
