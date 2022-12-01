import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import styles from './Shopcart.module.css'
import {useDispatch,useSelector} from  "react-redux"
import  {checkOut,clear}from '../redux/cart/cartActions'

const ShopCart = () => {
   const dispatch=useDispatch()
   const state =useSelector(state=>state.cartState)
 const chekoutHandler = ()=> {
    console.log("OK")
    dispatch(checkOut())
 }
 const cleartHandler = ()=> {
    dispatch(clear())
    console.log( ! state.checkout , state.itemsCounter)
 }
  //console.log(state.selectedItem)

  return (
    <div  className={styles.container}>
       
       <div  className={styles.cartContainer}>
       {state.selectedItem.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
       </div>
         
       

       {
           state.itemsCounter >0 ?
                
               <div className={styles.payments}>
                    <p>Total Items : <span>{state.itemsCounter}</span></p>
                    <p>Total Price: : <span>{state.total} $ </span></p>
                    <div className={styles.buttonContainer}>
                      <button 
                        className={styles.clear}
                        onClick={()=>cleartHandler()}>
                        CLEAR
                        </button>
                        <button 
                        className={styles.checkout}
                        onClick={()=>chekoutHandler()}>
                        checkout
                        </button>
                    </div>
                
                   
               </div> 
                 :
               <div>
            
               </div>
               
        }

        {
              state.checkout &&
               <div className={styles.chekoutSuccess}>
                  <h3>chekout success</h3>
                  <Link to="/">Buy more ....</Link>
                </div>
        }
            
       {
               ! state.checkout && !!state.itemsCounter ==0 &&  
                <div className={styles.clearSuccess}>
                    <h3>go to buy..</h3>
                    <Link to="/">Buy more ....</Link>
                </div>
        }

    </div>
  );
};

export default ShopCart;
