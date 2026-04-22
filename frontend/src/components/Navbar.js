import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">💄 Avinash Cosmetics</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/skincare">Skincare</Nav.Link>
            <Nav.Link as={Link} to="/makeup">Makeup</Nav.Link>
            <Nav.Link as={Link} to="/hair-care">Hair Care</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/cart">🛒 Cart</Nav.Link>
                <Nav.Link as={Link} to="/orders">📦 Orders</Nav.Link>
                {user.role === 'ROLE_ADMIN' && (
                  <Nav.Link as={Link} to="/admin/products">📊 Admin</Nav.Link>
                )}
                <Button variant="outline-light" size="sm" onClick={handleLogout}>Logout</Button>
                <span className="text-light ms-2">Hello, {user.name}</span>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;