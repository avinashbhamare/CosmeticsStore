import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Home = () => {
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
      {/* Banner */}
      <section id="main">
        <div className="main-text">
          <span>New Arrival 2026</span>
          <h1>Discover <font>Your Beauty</font> with Avinash Cosmetics</h1>
          <p>Explore premium skincare, luxurious makeup, and organic hair care products. Elevate your beauty routine with nature-inspired formulas and cruelty-free ingredients. Free shipping on orders over Rs 500!</p>
          <a href="/shop">Shop Now →</a>
        </div>
        <div className="main-img">
          <img src="/images/n9.png" alt="Beauty Model" />
        </div>
      </section>

      {/* Three banners */}
      <section className="product-grid-3">
        <div className="product-grid-box product-grid-box1">
          <img src="/images/s1.jpg" alt="Natural Lotion" />
          <div className="product-grid-text">
            <strong>Organic Skincare</strong>
            <span>100% Natural Ingredients</span>
            <a href="/skincare">Explore</a>
          </div>
        </div>
        <div className="product-grid-box product-grid-box2">
          <img src="/images/s2.jpg" alt="Luxury Set" />
          <div className="product-grid-text">
            <strong>Luxury Makeup Kits</strong>
            <span>Limited Edition</span>
            <a href="/makeup">Explore</a>
          </div>
        </div>
        <div className="product-grid-box product-grid-box3">
          <img src="/images/s3.jpg" alt="Gold Serum" />
          <div className="product-grid-text">
            <strong>24K Gold Serum</strong>
            <span>Anti-Aging Miracle</span>
            <a href="/skincare">Explore</a>
          </div>
        </div>
      </section>

      {/* Trending Now – dynamic products */}
      <section id="new_products">
        <div className="new-p-heading"><h3>🔥 Trending Now</h3></div>
        <div className="new-product-container">
          {products.slice(0, 10).map(product => (
            <div className="new-product-box" key={product.id}>
              <a className="new-product-img" href={`/product/${product.id}`}>
                <span>{product.categoryName || 'Skin'}</span>
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

      {/* Half banners (static) */}
      <section className="product-grid-half">
        <div className="product-grid-box product-grid-box2">
          <img src="/images/h1.jpg" alt="Makeup Collection" />
          <div className="product-grid-text">
            <strong>Complete Makeup Studio</strong>
            <span>30% Off on Kits</span>
            <a href="/makeup">Shop Now</a>
          </div>
        </div>
        <div className="product-grid-box product-grid-box1">
          <img src="/images/s1.jpg" alt="Natural" />
          <div className="product-grid-text"><strong>Organic Rituals</strong><span>Free Gift</span><a href="/skincare">Shop Now</a></div>
        </div>
        <div className="product-grid-box product-grid-box3">
          <img src="/images/s3.jpg" alt="Gold" />
          <div className="product-grid-text"><strong>Gold Edition</strong><span>Limited</span><a href="/skincare">Shop Now</a></div>
        </div>
      </section>

      {/* Most Loved – dynamic */}
      <section id="popular-product">
        <div className="popular-heading"><h3>⭐ Most Loved by Customers</h3><a href="/shop">View All</a></div>
        <div className="popular-container">
          {products.slice(0, 6).map(product => (
            <div className="popular-box" key={product.id}>
              <a className="popular-box-img" href={`/product/${product.id}`}><img src={product.imageUrl} alt={product.name} /></a>
              <div className="popular-box-text">
                <a href={`/product/${product.id}`}>{product.name}</a>
                <span className="p-category">{product.categoryName}</span>
                <span className="p-price">Rs {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section id="partner">
        <div className="partner-heading"><h3>Our Trusted Partners</h3></div>
        <div className="logo-container">
          <img src="/images/logo-1.png" alt="partner" /><img src="/images/logo-2.png" alt="partner" /><img src="/images/logo-3.png" alt="partner" /><img src="/images/logo-4.png" alt="partner" />
        </div>
      </section>

      {/* Bottom banners */}
      <section className="product-grid-2">
        <div className="product-grid-box product-grid-box3">
          <img src="/images/g1.jpg" alt="Makeup" />
          <div className="product-grid-text"><strong>Festive Makeup Sale</strong><span>Up to 40% Off</span><a href="/makeup">Shop Now</a></div>
        </div>
        <div className="product-grid-box product-grid-box2">
          <img src="/images/g2.jpg" alt="Discount" />
          <div className="product-grid-text"><strong>Summer Skincare</strong><span>Buy 1 Get 1 Free</span><a href="/skincare">Shop Now</a></div>
        </div>
      </section>

      {/* Footer – static, same as your original */}
      <footer>
        <div className="footer-container">
          <div className="footer-company-box">
            <a className="footer-logo" href="#">Avinash Cosmetics</a>
            <p>Empowering beauty with cruelty-free, organic products. We believe in self-care that shines.</p>
            <div className="footer-social">
              <a href="#">📘</a><a href="#">📷</a><a href="#">🐦</a><a href="#">🎬</a>
            </div>
          </div>
          <div className="footer-link-box"><strong>Quick Links</strong><ul><li><a href="/">Home</a></li><li><a href="/shop">Shop</a></li><li><a href="/about">About</a></li><li><a href="/contact">Contact</a></li></ul></div>
          <div className="footer-link-box"><strong>Categories</strong><ul><li><a href="/skincare">Skincare</a></li><li><a href="/makeup">Makeup</a></li><li><a href="/hair-care">Hair Care</a></li><li><a href="#">Nails</a></li></ul></div>
          <div className="footer-link-box"><strong>Support</strong><ul><li><a href="#">FAQs</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Returns</a></li><li><a href="#">Track Order</a></li></ul></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Avinash Cosmetics | Designed for Beauty Lovers</span><span>✨ Free Shipping on Orders Rs 500+</span></div>
      </footer>
    </div>
  );
};

export default Home;