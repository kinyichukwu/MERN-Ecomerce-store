import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
    const product = data.products.find( (x) => x._id === props.match.params.id)
    if(!product) {
        return <div>Product Not found</div>
    }
    return (
        <div>
        <Link to="/">Back to result</Link>

        <div className = "row top">
      <div className="col-2">
        <img className="large" src={product.image} alt={product.name}/>
      </div>
      <div className="col-1">
          <li>
              <h1>{product.name}</h1>
          </li>
          <li>
              <Rating rating = {product.rating} numReviews={product.numReviews}/>
          </li>
          <li>
              Price : ${product.price}
          </li>
          <li>
              
              Description :<p>{product.description}</p>
          </li>
      </div>
      <div className="col-1">
        <div className="card card-body">
            <ul>
                <li>
                    <div class="row">
                    <div>Price</div>
                    <div class="price">${product.price}</div>
                    </div>
                </li>
                <li>
                    <div class="row">
                    <div>Status</div>
                    <div>{product.countInStock>0? <span className="success">:In Stock</span> : <span className="error">:Unavailable</span>}</div>
                    </div>
                </li>
                <li> <button className = "block primary">Add To Cart</button></li>
            </ul>
        </div>
      </div>
    </div>

    </div>
    )
}