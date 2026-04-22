import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import api from '../services/api';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const placeOrder = async () => {
    setLoading(true);
    try {
      await api.post('/orders/place');
      navigate('/orders');
    } catch (err) {
      setError(err.response?.data?.message || 'Order failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button onClick={placeOrder} disabled={loading}>{loading ? 'Processing...' : 'Place Order'}</Button>
    </div>
  );
};

export default Checkout;