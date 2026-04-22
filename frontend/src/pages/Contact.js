import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Product Inquiry', orderNo: '', msg: '', newsletter: false });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      setResponseMsg('Please fill all required fields.');
      return;
    }
    setResponseMsg(`Thank you ${formData.name}! Your message has been sent.`);
  };

  return (
    <div>
      <section style={{ maxWidth: '1200px', margin: '40px auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '20px' }}>
        <div>
          <h2>📞 Get in Touch</h2>
          <p>Have questions? We're here to help!</p>
          <div style={{ margin: '20px 0' }}>
            ✉️ support@avinashcosmetics.com<br />
            📞 +91 73918 65312<br />
            📍 Head Office: 123 Beauty Avenue, Andheri East, Mumbai - 400069
          </div>
          <div className="delivery-section">
            <h3>🚚 Delivery Locations</h3>
            <div className="address-list">
              <div className="address-card"><strong>Mumbai</strong><br />Andheri, Bandra, Dadar, Thane</div>
              <div className="address-card"><strong>Pune</strong><br />Koregaon Park, Viman Nagar, Hinjewadi</div>
              <div className="address-card"><strong>Nagpur</strong><br />Civil Lines, Dharampeth, Sadar</div>
              <div className="address-card"><strong>Delhi</strong><br />Connaught Place, Rajouri Garden</div>
              <div className="address-card"><strong>Bangalore</strong><br />Indiranagar, Koramangala</div>
            </div>
            <img src="/images/delivery-photo.jpg" alt="Delivery Van" className="delivery-photo" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '12px', marginTop: '20px' }} />
            <p style={{ marginTop: '15px' }}>✨ Free shipping on orders above Rs 500 | Delivery within 3-5 business days</p>
          </div>
        </div>
        <div>
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '12px', borderRadius: '30px', border: '1px solid #ddd' }} />
            <input type="email" name="email" placeholder="Email Address *" required onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '12px', borderRadius: '30px', border: '1px solid #ddd' }} />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '12px', borderRadius: '30px', border: '1px solid #ddd' }} />
            <select name="subject" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '12px', borderRadius: '30px', border: '1px solid #ddd' }}>
              <option>Product Inquiry</option><option>Order Status</option><option>Returns/Refund</option><option>Wholesale Enquiry</option><option>Feedback</option>
            </select>
            <input type="text" name="orderNo" placeholder="Order Number (if applicable)" onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '12px', borderRadius: '30px', border: '1px solid #ddd' }} />
            <textarea name="msg" rows="5" placeholder="Your Message *" required onChange={handleChange} style={{ width: '100%', margin: '10px 0', padding: '12px', borderRadius: '20px', border: '1px solid #ddd' }}></textarea>
            <div style={{ margin: '10px 0' }}><label><input type="checkbox" name="newsletter" onChange={handleChange} /> Subscribe to newsletter</label></div>
            <button type="submit" style={{ background: '#000', color: '#fff', padding: '12px 30px', border: 'none', borderRadius: '40px', cursor: 'pointer' }}>Send Message</button>
          </form>
          <div id="formResponse" style={{ marginTop: '15px' }}>{responseMsg}</div>
        </div>
      </section>
      <footer>{/* same footer */}</footer>
    </div>
  );
};

export default Contact;