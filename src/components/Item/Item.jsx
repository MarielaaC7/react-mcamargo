import "./Item.css";
import { Link } from "react-router-dom";




export const Item = ({ id, title, description, price, image, children }) => {
  return (
    <article className="card">
      <Link to={`/product/${id}`}>
      <img src={image} alt={`foto de ${title}`} />
      </Link>
      
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {children}
    </article>
  );
};