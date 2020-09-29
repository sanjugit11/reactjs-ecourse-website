import React from 'react';
import Data from '../Data';
import { Link } from 'react-router-dom';

const ProductScreen = (props) => {
  // console.log(props.match.params.id);

  const found = Data.products.find(x => x._id === props.match.params.id)
  // console.log(found);
  return <div >
    <div className="back-to-result">
      <Link to="/">Back to Result</Link>
    </div>
    <div className="details">
      <div className="details-image">
        <img src={found.image} alt="product" />
      </div>
      <div className="details-info">
        <ul>
          <li><h4>{found.name}</h4></li>
          <li>{found.rating} Stars ({found.numReviews} Reviews)</li>
          <li><b>Price: ${found.price}</b></li>
          <li>
            Description:
            <div>
              {found.description}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>Price:${found.price}</li>
          <li>Status:{found.status}</li>
          <li>Qty: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
            </li>
          <li>
            <button className="add-to-cart">Add to Cart</button>
            </li>  
        </ul>

      </div>
    </div>

  </div>
}

export default ProductScreen;