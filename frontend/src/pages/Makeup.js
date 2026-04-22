import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Makeup = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data.filter(p => p.categoryName === 'Makeup')));
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
      <section style={{ background: '#fff0f5', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#ec26b1' }}>💄 Makeup that Empowers</h2>
        <p>Cruelty‑free, long‑lasting formulas for every look.</p>
      </section>
      <section id="new_products">
        <div className="new-p-heading"><h3>💋 Makeup Collection</h3></div>
        <div className="new-product-container">
          {products.map(product => (
            <div className="new-product-box" key={product.id}>
              <a className="new-product-img" href={`/product/${product.id}`}>
                <span>{product.categoryName}</span>
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
      <footer>{/* same */}</footer>
    </div>
  );
};

export default Makeup;