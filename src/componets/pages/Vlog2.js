import React from 'react'
import './Vlog.css'
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';

const Vlog2= ()=> {
  const products = useSelector((state) => state.allproducts.products)
  const renderlist = products.map((product)=>{
    return( <div className='card'>
      <Link to = {`/product/${product.id}`}>
      <div className='image' >
        <img src={product.image} alt={product.title} height={20} width={10} /> 
      </div>
      </Link>
      <div className='content'>
      <div className='header'>{product.title}</div>
      </div>
      </div>
      
    )
  }) 
return (<><div className='vlog2__herosection'>
            </div>
            <div className='vlog_heading'>
      <h1>VLOG-2</h1></div>
              {renderlist}</>)
}


export default Vlog2
