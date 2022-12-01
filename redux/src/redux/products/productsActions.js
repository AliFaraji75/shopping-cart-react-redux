import axios from "axios"

const fetchProductsRequet =()=>{
    return({
        type:"FETCH-PRODUCTAS-REQUEST"
    })
}
const fetchProductsSuccess =(products)=>{
    return({
        type:"FETCH-PRODUCTAS-SUCCESS",
        payload:products
    })
}
const fetchProductsFailure =(error)=>{
    return({
        type:"FETCH-PRODUCTAS-FAILURE",
        payload:error
    })
}



 export const  fetchProducts =()=>{
  
    return(dispatch)=>{
        dispatch(fetchProductsRequet())
          axios.get("https://fakestoreapi.com/products")
          .then(response=>{
            const products =response.data
            dispatch(fetchProductsSuccess(products))
          }).catch(error =>{
            const errorMsg =error.message
            dispatch(fetchProductsFailure(errorMsg))
          })
    }




}