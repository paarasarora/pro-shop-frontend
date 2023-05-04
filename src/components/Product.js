import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Product.module.css";
import Rating from "./Rating";
// import { second } from 'first'
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <section>
      <Card className="m-3 p-3 rounded">
        <Link to={`/${product.id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Card.Title as="div">
            <strong>
              <Link to={`/${product.id}`}>{product.name}</Link>
            </strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as='div'>
            <div className="my-3">
              <Rating
                value={product.rating}
                text={product.numReviews}
                color={"#f8e825"}
              />
            </div>
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </section>
    // <Card className='my-3 p-3 rounded'>
    //     <a href={`/product/${product._id}`}>
    //         <Card.Img src={product.image}/>
    //     </a>

    // </Card>
  );
}

export default Product;
