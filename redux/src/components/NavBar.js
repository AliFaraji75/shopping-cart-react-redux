import { Link } from "react-router-dom";
import {useSelector} from  "react-redux"

 import styles from  './Navbar.module.css'
 import  Shopsvg from '../assets/icons/shop.svg'
const NavBar = () => {

  const state=useSelector(state =>state.cartState)
    return ( 
        <div className={styles.container}>
         
        <div  className={styles.containerproductlink}>
          <Link   className={styles.productlink} to="/">products</Link>
        </div>
        <div className={styles.iconContainer}>
          <Link  to="/cart"><img src={Shopsvg} /></Link>
           <span>{state.itemsCounter>0 ?state.itemsCounter :0}</span>
           </div>
        </div>
     );
}
 
export default NavBar;