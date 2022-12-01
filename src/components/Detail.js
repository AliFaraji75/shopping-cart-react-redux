import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../Context/ProductContextProvider";
const Details = () => {
  const param = useParams();
  const products = useContext(productsContext);

  const data = products.find((p) => p.id == param.id);

  console.log("dataaaaaa", data);
  const { image, title, description, price, category } = data;
  //console.log("aaa",products)
  return (
    <div>
      <img
        src={image} alt="product"
        style={{ width: "400px", height: "450px", margin: "30px" }}
      />
      <div>{title}</div>
      <div>{description}</div>
      <div>categoty : {category}</div>
      <div>{price} $</div>
      <div>
        <span></span>
        <Link to="/">go to shop</Link>
      </div>
    </div>
  );
};

export default Details;
