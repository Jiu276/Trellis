import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title fade-in">Get In Touch</h1>
          <p className="page-subtitle fade-in">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper fade-in">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="form-message success">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper fade-in" style={{ animationDelay: '0.2s' }}>
            <h2>Contact Information</h2>

            <div className="contact-info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>123 Luxury Avenue<br/>New York, NY 10001<br/>United States</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br/>Mon-Fri, 9am-6pm EST</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>hello@trellis.com<br/>support@trellis.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item scale-in">
              <h3>How do you select products to review?</h3>
              <p>We carefully curate products based on quality, innovation, user demand, and market trends. Each product undergoes thorough testing before we publish our review.</p>
            </div>

            <div className="faq-item scale-in" style={{ animationDelay: '0.1s' }}>
              <h3>Are your reviews sponsored?</h3>
              <p>While we may receive affiliate commissions, our editorial integrity is never compromised. All opinions are honest and based on our testing experience.</p>
            </div>

            <div className="faq-item scale-in" style={{ animationDelay: '0.2s' }}>
              <h3>Can I suggest a product for review?</h3>
              <p>Absolutely! We welcome product suggestions from our community. Use the contact form above to share your recommendations with us.</p>
            </div>

            <div className="faq-item scale-in" style={{ animationDelay: '0.3s' }}>
              <h3>Do you offer consulting services?</h3>
              <p>Yes, we provide consulting for brands looking to understand luxury markets and consumer preferences. Contact us to discuss custom projects.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
