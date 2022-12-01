import React,{useContext} from 'react';
import { CartContext } from '../Context/CartContextProvider';
import styles from './cart.module.css'
import TrashIcon  from '../assets/icons/trash.svg'
const Cart = (props) => {
    const {title,image,price,quantity} =props.data;
    const {dispatch}=useContext(CartContext);
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
                            <button onClick={()=> dispatch({type:"REMOVE-ITEM",payload:props.data})}> <img src={TrashIcon} /></button>
                            :
                            <button onClick={()=> dispatch({type:"DECRIMENT",payload:props.data})}> -</button>
                }
                        <button onClick={()=> dispatch({type:"INCRIMENT",payload:props.data})}> + </button>
                        
                    
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