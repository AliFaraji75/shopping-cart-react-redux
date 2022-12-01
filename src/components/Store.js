import React, { useContext } from "react";
import { productsContext } from "../Context/ProductContextProvider";
import Product from "./Product";

const Store = () => {
  const products = useContext(productsContext);
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"50px"}}>
      {products ? products.map((product) => (
        <Product key={product.id} productData={product} />
      )) : <div>error</div>}
    </div>
  );
};

export default Store;
