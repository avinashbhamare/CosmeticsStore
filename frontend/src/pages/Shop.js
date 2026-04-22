import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data));
  }, []);

  const addToCart = async (productId) => {
    try {
      await api.post('/cart/add', { productId, quantity: 1 });
      alert('Added to cart!');
    } catch (err) {
      alert('Please login first');
    }
  };

  return (
    <div>
      <section id="new_products">
        <div className="new-p-heading"><h3>🛍️ All Cosmetics Collection</h3></div>
        <div className="new-product-container">
          {products.map(product => (
            <div className="new-product-box" key={product.id}>
              <a className="new-product-img" href={`/product/${product.id}`}>
                <span>{product.categoryName || 'Product'}</span>
                <img src={product.imageUrl} alt={product.name} />
              </a>
              <div className="new-product-text">
                <a className="new-product-title" href={`/product/${product.id}`}>{product.name}</a>
                <span className="price">Rs {product.price}</span>
                <a className="new-p-cart-btn" onClick={() => addToCart(product.id)}>Add To Cart</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-company-box"><a className="footer-logo" href="#">Avinash Cosmetics</a><p>Beauty with purpose.</p><div className="footer-social"><a href="#">📘</a><a href="#">📷</a><a href="#">🐦</a></div></div>
          <div className="footer-link-box"><strong>Quick Links</strong><ul><li><a href="/">Home</a></li><li><a href="/shop">Shop</a></li><li><a href="/about">About</a></li></ul></div>
          <div className="footer-link-box"><strong>Categories</strong><ul><li><a href="/skincare">Skincare</a></li><li><a href="/makeup">Makeup</a></li><li><a href="/hair-care">Hair Care</a></li></ul></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Avinash Cosmetics | All rights reserved</span></div>
      </footer>
    </div>
  );
};

export default Shop;