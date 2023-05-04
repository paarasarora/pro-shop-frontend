// import logo from "./logo.svg";
// // import './App.css';
import Header from "./components/header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import {  } from "react-router-dom";
function App() {
  return (
    <div>
       <Router>
      <Header />
      <main className="py-3">
        <Container>
         
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} >
              <Route path=":id" element={<CartScreen />} />
            </Route>
            {/* <Route path="/product/:id" element={<ProductScreen />} /> */}
          </Routes>
         
        </Container>
      </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
