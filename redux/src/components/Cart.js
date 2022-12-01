import React from 'react';
import styles from './cart.module.css'
import TrashIcon  from '../assets/icons/trash.svg'
import {useDispatch,useSelector} from  "react-redux"
import  {increase,decrease,addCart,remove,checkOut,clear}from '../redux/cart/cartActions'
const Cart = (props) => {
    const dispatch=useDispatch()
    const state =useSelector(state=>state.cartState)
    const {title,image,price,quantity} =props.data;
   
    return (
        <div className={styles.container}>
           <img src={image} alt ="image" className={styles.productImage} />
           <div className={styles.data}>
                <h3> {titleShort(title)}</h3>
                <p> {price} $</p>
           </div>
                <div className={styles.quantity}> <span>{quantity}</span></div>
                <div className={styles.buttonContainer}>
                    
                {
                            quantity == 1 
                            ? 
                            <button onClick={()=> dispatch(remove(props.data))}> <img src={TrashIcon} /></button>
                            :
                            <button onClick={()=> dispatch(decrease(props.data))}> -</button>
                }
                        <button onClick={()=> dispatch(increase(props.data))}> + </button>
                        
                    
                </div>
           
          
        </div>
    );
};

export default Cart;
const titleShort = (data) => {
    const title = data.split(" ");
    const mainTitle = `${title[0] + title[1]}`;
    return mainTitle;
  };