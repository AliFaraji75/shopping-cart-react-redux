import { Link, useParams } from "react-router-dom";
import {useSelector} from  "react-redux"
import styles from "./Product.Details.module.css"
const Details = () => {
  const param = useParams();
  const products=useSelector(state =>state.productState)
  const data = products.products.find((p) => p.id == param.id);

  console.log("dataaaaaa", data);
  const { image, title, description, price, category } = data;
  //console.log("aaa",products)
  return (
    <div className={styles.container}>
      <img
         className={styles.image}
        src={image} alt="product"
        style={{ width: "400px", height: "450px", margin: "30px" }}
      />
      <div className={styles.textContainer}>

      <h3>{title}</h3>
      <div  className={styles.description}>{description}</div>
      <p className={styles.category}><span>Category:</span> {category}</p>
      <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
      </div>
    </div>
  );
};

export default Details;
