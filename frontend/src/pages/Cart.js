import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchCart(); }, []);

  const fetchCart = async () => {
    try {
      const res = await api.get('/cart');
      setCart(res.data);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const updateQuantity = async (productId, quantity) => {
    await api.put(`/cart/update/${productId}?quantity=${quantity}`);
    fetchCart();
  };

  const addToCart = async (productId) => {
  try {
    await api.post('/cart/add', { productId, quantity: 1 });
    alert('Added to cart!');
  } catch (err) {
    alert('Please login first');
  }
};

  const clearCart = async () => {
    await api.delete('/cart/clear');
    fetchCart();
  };

  if (loading) return <Spinner animation="border" />;
  if (!cart || cart.items.length === 0) return <Alert variant="info">Your cart is empty. <Link to="/">Shop now</Link></Alert>;

  return (
    <div>
      <h2>Your Cart</h2>
      <Table striped bordered hover>
        <thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr></thead>
        <tbody>
          {cart.items.map(item => (
            <tr key={item.productId}>
              <td>{item.productName}</td><td>₹{item.price}</td>
              <td><input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.productId, e.target.value)} style={{ width: '70px' }} /></td>
              <td>₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Grand Total: ₹{cart.total}</h4>
      <Button variant="danger" onClick={clearCart} className="me-2">Clear Cart</Button>
      <Button as={Link} to="/checkout" variant="success">Proceed to Checkout</Button>
    </div>
  );
};

export default Cart;