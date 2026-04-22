import React from 'react';

const About = () => {
  return (
    <div>
      <section style={{ maxWidth: '1100px', margin: '50px auto', padding: '30px', background: '#fff9fc', borderRadius: '40px' }}>
        <h1 style={{ fontSize: '2.8rem' }}>Our Story</h1>
        <p>Founded in 2022 by Avinash Sahebrao Bhamare, Avinash Cosmetics was born from a passion for clean, cruelty-free beauty. We believe that cosmetics should enhance natural beauty without harming the planet. Every product is dermatologically tested, vegan, and sourced ethically.</p>
        <p>Our mission is to make high-quality skincare, makeup, and hair care accessible to everyone. We work directly with farmers and ethical suppliers to ensure the purest ingredients.</p>
        <p>Avinash Sahebrao Bhamare, a visionary entrepreneur, started this journey with a small store in Maharashtra. Today, Avinash Cosmetics is a trusted name across India, known for its commitment to quality and customer satisfaction.</p>
        <p>We have won the "Best Emerging Beauty Brand" award in 2023 and continue to innovate with new products every season. Our products are free from parabens, sulfates, and phthalates.</p>
        <p>We believe in giving back: 5% of our profits go to women's empowerment programs. Our packaging is 100% recyclable, and we are working towards a zero-waste supply chain.</p>
        <p>Our team consists of beauty experts, chemists, and skincare enthusiasts who test every formula for safety and efficacy. We are proud to have over 1 million happy customers.</p>
        <p>Contact our founder directly at <strong>7391865312</strong> for business inquiries or feedback. We are always listening to our community.</p>
        <p>Thank you for choosing Avinash Cosmetics. Together, let's redefine beauty.</p>
        <p>We have three physical stores: Mumbai, Pune, and Nagpur, with plans to expand to Delhi and Bangalore by 2026.</p>
        <p>Our online store offers free shipping on orders over Rs 500 and easy returns within 15 days.</p>
        <p>We are proud to be a "Made in India" brand, supporting local artisans and communities.</p>
        <p>Join our loyalty program to earn points on every purchase and get exclusive discounts.</p>
        <p>We have been featured in Vogue India, Cosmopolitan, and Femina for our innovative products.</p>
        <p>Avinash Sahebrao Bhamare personally oversees product development, ensuring each item meets the highest standards.</p>
        <p>We are committed to sustainability: our bottles are made from ocean-recycled plastic.</p>

        <div style={{ display: 'flex', gap: '20px', margin: '40px 0', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, background: '#fed2d1', padding: '20px', borderRadius: '20px' }}><h3>🌱 100% Vegan</h3><p>No animal testing, ever.</p></div>
          <div style={{ flex: 1, background: '#fed2d1', padding: '20px', borderRadius: '20px' }}><h3>♻️ Eco Packaging</h3><p>Recyclable materials.</p></div>
          <div style={{ flex: 1, background: '#fed2d1', padding: '20px', borderRadius: '20px' }}><h3>❤️ Love for All</h3><p>Inclusive shades for every skin.</p></div>
        </div>
        <h2>Meet the Founder</h2>
        <div style={{ background: '#fafafa', padding: '20px', borderRadius: '30px', textAlign: 'center', maxWidth: '300px', margin: 'auto' }}>
          <img src="/images/AVINASHJPG.jpg" style={{ width: '100px', borderRadius: '50%' }} alt="Founder" />
          <h4>Avinash Sahebrao Bhamare</h4>
          <p>Founder & CEO</p>
          <p>Contact: 7391865312</p>
        </div>
      </section>
      <footer>{/* same footer */}</footer>
    </div>
  );
};

export default About;