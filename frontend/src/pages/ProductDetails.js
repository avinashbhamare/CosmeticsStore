import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Alert, Spinner } from 'react-bootstrap';
import api from '../services/api';
import { useAuth } from '../services/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data)).catch(console.error);
  }, [id]);

  const addToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      await api.post('/cart/add', { productId: product.id, quantity });
      setMessage('Added to cart!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Failed to add');
    }
  };

  if (!product) return <Spinner animation="border" />;

  return (
    <Card className="mx-auto" style={{ maxWidth: '600px' }}>
      <Card.Img variant="top" src={product.imageUrl || 'https://via.placeholder.com/400'} />
      <Card.Body>
        <h2>{product.name}</h2>
        <h5>{product.brand}</h5>
        <p>{product.description}</p>
        <h4>₹{product.price}</h4>
        <p>Stock: {product.stock}</p>
        <input type="number" min="1" max={product.stock} value={quantity} onChange={e => setQuantity(e.target.value)} className="form-control w-25 d-inline me-2" />
        <Button onClick={addToCart} variant="warning">Add to Cart</Button>
        {message && <Alert variant="success" className="mt-2">{message}</Alert>}
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;