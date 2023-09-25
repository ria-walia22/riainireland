import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Vlog.css'
import axios from 'axios';
import {setProducts, selectedProducts} from '../../redux/actions/productActions'

function Vlog1() {
  const product = useSelector((state) => state)
  const product2  = useSelector((state)=>state.product)
  const dispatch = useDispatch();
  const {productId} = useParams()
  console.log(productId)

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log('Err', err);
    }
  };

  const fetchProductsDetails = async()=>{
    try{
      const responseDetails = await axios.get(`https://fakestoreapi.com/product/${productId}`)
      dispatch(selectedProducts(responseDetails.data))
    } catch (err){
      console.log('Err', err)
    }
  }
   
  useEffect(() => {
    fetchProducts();
  },[]);

  useEffect(() => {
    if(productId && productId =='')fetchProductsDetails();
  },[productId]);

  console.log(product)
  console.log(product2)

  return (
    <>
    <div className='vlog1__herosection'>
      </div>
      <div className='vlog_heading'>
      <h1>VLOG-1</h1>
      <h2>k</h2>
      </div>
      </>
  )
}

export default Vlog1
