import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import api from '../services/api';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', brand: '', description: '', price: '', stock: '', imageUrl: '', categoryId: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };
  const fetchCategories = async () => {
    const res = await api.get('/categories');
    setCategories(res.data);
  };

  const handleSave = async () => {
    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct.id}`, formData);
        setMessage('Product updated');
      } else {
        await api.post('/products', formData);
        setMessage('Product created');
      }
      fetchProducts();
      setShowModal(false);
      resetForm();
    } catch (err) {
      setMessage('Error saving product');
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm('Delete product?')) {
      await api.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  const resetForm = () => {
    setEditingProduct(null);
    setFormData({ name: '', brand: '', description: '', price: '', stock: '', imageUrl: '', categoryId: '' });
  };

  const openEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name, brand: product.brand, description: product.description,
      price: product.price, stock: product.stock, imageUrl: product.imageUrl,
      categoryId: product.categoryId
    });
    setShowModal(true);
  };

  return (
    <div>
      <h2>Admin - Product Management</h2>
      {message && <Alert variant="success">{message}</Alert>}
      <Button onClick={() => { resetForm(); setShowModal(true); }} className="mb-3">Add Product</Button>
      <Table striped bordered hover>
        <thead><tr><th>ID</th><th>Name</th><th>Brand</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.name}</td><td>{p.brand}</td><td>₹{p.price}</td><td>{p.stock}</td>
              <td><Button variant="warning" size="sm" onClick={() => openEdit(p)}>Edit</Button> <Button variant="danger" size="sm" onClick={() => deleteProduct(p.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton><Modal.Title>{editingProduct ? 'Edit Product' : 'New Product'}</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group><Form.Label>Name</Form.Label><Form.Control value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /></Form.Group>
            <Form.Group><Form.Label>Brand</Form.Label><Form.Control value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})} /></Form.Group>
            <Form.Group><Form.Label>Description</Form.Label><Form.Control as="textarea" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} /></Form.Group>
            <Form.Group><Form.Label>Price</Form.Label><Form.Control type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} /></Form.Group>
            <Form.Group><Form.Label>Stock</Form.Label><Form.Control type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} /></Form.Group>
            <Form.Group><Form.Label>Image URL</Form.Label><Form.Control value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} /></Form.Group>
            <Form.Group><Form.Label>Category</Form.Label><Form.Select value={formData.categoryId} onChange={e => setFormData({...formData, categoryId: e.target.value})}>
              <option value="">Select</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </Form.Select></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button><Button variant="primary" onClick={handleSave}>Save</Button></Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProducts;