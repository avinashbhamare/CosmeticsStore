import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Skincare = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data.filter(p => p.categoryName === 'Skincare')));
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
      <section style={{ background: '#fef2f7', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#ec26b1' }}>✨ Skincare Rituals</h2>
        <p>Natural, gentle, effective – for radiant skin.</p>
      </section>
      <section id="new_products">
        <div className="new-p-heading"><h3>🌿 Skincare Collection</h3></div>
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
      <footer>{/* same footer as Shop */}</footer>
    </div>
  );
};

export default Skincare;