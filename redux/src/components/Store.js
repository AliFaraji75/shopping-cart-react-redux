import React, { useEffect } from "react";
import Product from "./Product";
import {useDispatch,useSelector}from "react-redux"
import { fetchProducts } from "../redux/products/productsActions";

const Store = () => {
  const dispatch =useDispatch()
const products=useSelector(state =>state.productState)
  useEffect(()=>{
   if(!products.products.length)dispatch(fetchProducts())
  },[])
 
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"70px"}}>
      {products.isLoading ? <div> loading</div> : products.error ?<div>error</div>: products.products.map((product) => (
        <Product key={product.id} productData={product} />
      )) }
    </div>
  );
};

export default Store;
