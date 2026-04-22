import React, { useState, useEffect } from 'react';
import { Accordion, Spinner, Alert } from 'react-bootstrap';
import api from '../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/orders').then(res => { setOrders(res.data); setLoading(false); }).catch(err => setLoading(false));
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (orders.length === 0) return <Alert variant="info">No orders yet.</Alert>;

  return (
    <div>
      <h2>My Orders</h2>
      <Accordion>
        {orders.map(order => (
          <Accordion.Item eventKey={order.id.toString()} key={order.id}>
            <Accordion.Header>Order #{order.id} - ₹{order.totalAmount} - {order.status}</Accordion.Header>
            <Accordion.Body>
              <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.productName} x {item.quantity} = ₹{item.price * item.quantity}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Orders;