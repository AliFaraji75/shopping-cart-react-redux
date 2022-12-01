import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
 import styles from  './Navbar.module.css'
 import  Shopsvg from '../assets/icons/shop.svg'
const NavBar = () => {
    const {state}=useContext(CartContext)
    return ( 
        <div className={styles.container}>
         
        <div  className={styles.containerproductlink}>
          <Link   className={styles.productlink} to="/">products</Link>
        </div>
        <div className={styles.iconContainer}>
          <Link  to="/cart"><img src={Shopsvg} /></Link>
           <span>{state.itemsCounter}</span>
           </div>
        </div>
     );
}
 
export default NavBar;