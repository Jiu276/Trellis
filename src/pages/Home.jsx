import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

const Home = () => {
  const featuredArticles = articles.filter(article => article.featured).slice(0, 3);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title fade-in">
            Discover Premium<br />Lifestyle & Reviews
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Curated insights on luxury products, platforms, and technology
          </p>
          <div className="hero-buttons fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/blog" className="btn btn-primary">
              Explore Articles
            </Link>
            <Link to="/products" className="btn btn-secondary">
              View Products
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">
              Handpicked stories and reviews for discerning readers
            </p>
          </div>

          <div className="featured-grid">
            {featuredArticles.map((article, index) => (
              <div
                key={article.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard article={article} featured />
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Trellis */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Trellis</h2>
          <div className="why-grid">
            <div className="why-card scale-in">
              <div className="why-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Expert Reviews</h3>
              <p>In-depth analysis and honest reviews from industry professionals</p>
            </div>

            <div className="why-card scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="why-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>Curated content focusing on luxury and high-end products</p>
            </div>

            <div className="why-card scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="why-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Latest Trends</h3>
              <p>Stay updated with the newest products and technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <h2>Stay Informed</h2>
            <p>Subscribe to receive the latest reviews and recommendations directly to your inbox</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
