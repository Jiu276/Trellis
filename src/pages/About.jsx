import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="page-title fade-in">About Trellis</h1>
          <p className="page-subtitle fade-in">
            Your trusted source for premium lifestyle insights
          </p>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <section className="about-section fade-in">
          <div className="section-content">
            <div className="content-text">
              <h2>Our Mission</h2>
              <p>
                At Trellis, we believe that quality matters. In a world oversaturated with content and products,
                we curate only the finest insights, reviews, and recommendations for discerning individuals who
                appreciate excellence.
              </p>
              <p>
                Our team of expert writers and reviewers meticulously tests and evaluates each product and platform
                we feature, ensuring you receive honest, comprehensive information to make informed decisions.
              </p>
            </div>
            <div className="content-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="values-grid">
            <div className="value-card scale-in">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>We provide honest, unbiased reviews and never compromise our editorial standards.</p>
            </div>

            <div className="value-card scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We curate only premium products and platforms that meet our high standards.</p>
            </div>

            <div className="value-card scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Expertise</h3>
              <p>Our team brings years of industry experience and deep product knowledge.</p>
            </div>

            <div className="value-card scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>We foster a community of like-minded individuals who value quality and refinement.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section about-section">
          <div className="section-content reverse">
            <div className="content-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Our workspace" />
            </div>
            <div className="content-text">
              <h2>Our Team</h2>
              <p>
                Trellis is powered by a diverse team of writers, editors, and industry experts passionate
                about helping you discover exceptional products and services. From tech enthusiasts to lifestyle
                connoisseurs, each team member brings unique perspectives and expertise.
              </p>
              <p>
                We're constantly testing, researching, and staying ahead of trends to bring you the most
                relevant and valuable content. Your trust is our most valuable asset, and we work tirelessly
                to maintain it.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-number">500+</div>
              <div className="stat-label">Products Reviewed</div>
            </div>
            <div className="stat-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">50K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">95%</div>
              <div className="stat-label">Reader Satisfaction</div>
            </div>
            <div className="stat-card fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Expert Contributors</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-card">
            <h2>Join Our Community</h2>
            <p>
              Stay updated with the latest reviews, insights, and exclusive recommendations.
              Subscribe to our newsletter and become part of the Trellis community.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe Now
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
