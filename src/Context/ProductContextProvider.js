import { useEffect, useState,createContext } from "react";
import { getProducts } from "../Services/Api";
 export const productsContext =createContext()
 const ProductContextProvider = ({children}) => {
    const [products,setProducts]=useState();
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setProducts(await getProducts())
        }
        fetchAPI();
        console.log(products)
    },[])
   
 //   console.log("bhhhh",products)
    return ( 
 
       <productsContext.Provider value={products}>
         {children }
       </productsContext.Provider>

      
     );
}
 
export default ProductContextProvider;