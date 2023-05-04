import { React, useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useSelector, useDispatch } from "react-redux";
import { listProductsDetails } from "../actions/productActions";
// import products from "../products";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";

// import axios from 'axios'

function ProductScreen() {
  const [qty, setQty] = useState(1);
   

  let productid = useParams();
  const history = useNavigate()

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const { product, error, loading } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(productid.id));
  }, [dispatch, productid.id]);

const addToCartHandler = () => {
  history(`/cart/${productid.id}?qty=${qty}`)
}

  return (
    <div>
      <Link to="/" className="btn btn-primary my-3">
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          <Col md={6}>
            <Image className="mx-3" src={product.image} fluid></Image>
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews `}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price:{product.price}</ListGroup.Item>
              <ListGroup.Item>Description:{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "in stock" : "Out of stock"}{" "}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>


              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col 
                    xs = "auto" className = 'my-1'
                    >
                    <Form.Control
                    as = "select"
                    value = {qty}
                    onChange = {(e) => setQty(e.target.value)}
                    >
                      {
                        [...Array(product.countInStock).keys()].map((x) =>
                          <option key = {x + 1} value = {x + 1}>
                            {x + 1}
                          </option>
                        )
                      }
                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                 onClick = {addToCartHandler}
                  className="w-100"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductScreen;
