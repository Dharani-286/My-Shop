import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import ProductCard from './ProductCard.js';

const Home = () => {
  const [productData, setProductData] = useState([]);

  async function getDetails() {
    await axios.get("https://dummyjson.com/products").then((res) => {
      setProductData(res.data.products);
    });
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <h1>hiii</h1>
      <nav className="navbar">
        <h1>My Shop</h1>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className='productcontainer'>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            label={product.title}
            cost={`$${product.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
