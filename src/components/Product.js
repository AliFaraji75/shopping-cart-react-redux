import { Link } from "react-router-dom";
import { useContext } from "react";
import {CartContext}from '../Context/CartContextProvider'
import styles from './Product.module.css'
import Trash from '../assets/icons/trash.svg'
const Product = ({ productData }) => {
  const {state,dispatch}=useContext(CartContext)
  return (


     <div className={styles.container}>
     <img className={styles.cardImage} src={productData.image} alt="product" />
     <h3>{titleShort(productData.title)  }</h3>
     <p>{productData.price} $</p>
   
      <div className={styles.footer}>
        <Link className={styles.linkContainer} to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
           {
            quantityCount(state,productData.id)===1 
                && 
                <button 
                  className={styles.smallButton}
                  onClick={()=>dispatch({type:"REMOVE-ITEM",payload:productData})}>
                  <img src={Trash}/>
                </button>
           }
              {
                quantityCount(state,productData.id)>1 
                && 
                <button 
                  className={styles.smallButton}
                  onClick={()=>dispatch({type:"DECRIMENT",payload:productData})}>
                     -
                </button>
              }
               
               {quantityCount(state,productData.id)>0 ? <span className={styles.counter}>{quantityCount(state,productData.id)}</span>:<span></span> }


              {
              isCart(state,productData.id)
              ?
              <button 
              
                className={styles.smallButton}
                onClick={()=>dispatch({type:"INCRIMENT",payload:productData})}>
                + 
              </button>
              :
              <button 
                 className={styles.addToCart}
                 onClick={()=>dispatch({type:"ADD-ITEM",payload:productData})}>
                 ADD TO CART
              </button>
              }
              
             
      </div>
      </div>   

    </div>
  );
};

export default Product;

const titleShort = (data) => {
  const title = data.split(" ");
  const mainTitle = `${title[0] + title[1]}`;
  return mainTitle;
};

const isCart = (state,id)=>{
 const result=  !!state.selectedItem.find(item => item.id === id);
return result;
}
const quantityCount=(state,id)=>{
  const index =state.selectedItem.findIndex(item => item.id === id)
  if(index === -1){
    return false
  }else {
    return state.selectedItem[index].quantity;
  }


}