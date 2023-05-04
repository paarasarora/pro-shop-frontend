import { React, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import "./HomeScreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/loader";
// import Message from "../components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error,products, loading } = productList;
  // const error = (state) => state.productList.error

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <div>
      <h1>LATEST PRODUCTS</h1>
     
      {loading ? 
        <Loader />
       : error ? 
        <h3>{error}</h3>
       : 
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      }
    </div>
  );
}

export default HomeScreen;
