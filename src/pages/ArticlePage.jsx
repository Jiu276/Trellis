import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import './ArticlePage.css';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <main className="article-page">
      {/* Article Header */}
      <div className="article-header" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="article-header-overlay"></div>
        <div className="container">
          <div className="article-header-content fade-in">
            <span className="article-category-badge">{article.category}</span>
            <h1 className="article-page-title">{article.title}</h1>
            <div className="article-meta-info">
              <span className="article-author-name">By {article.author}</span>
              <span className="meta-separator">•</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="meta-separator">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="article-body">
        <div className="container">
          <div className="article-content-wrapper">
            <article className="article-main-content fade-in">
              <div
                className="article-text"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Featured Products */}
              {article.products && article.products.length > 0 && (
                <div className="featured-products">
                  <h2>Featured Products</h2>
                  <div className="products-grid">
                    {article.products.map((product, index) => (
                      <div key={index} className="product-card scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                          <h3>{product.name}</h3>
                          <div className="product-rating">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                                ★
                              </span>
                            ))}
                            <span className="rating-value">{product.rating}</span>
                          </div>
                          <div className="product-footer">
                            <span className="product-price">{product.price}</span>
                            <a href={product.link} className="btn btn-small btn-primary">View Product</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="article-share">
                <h3>Share this article</h3>
                <div className="share-buttons">
                  <button className="share-btn twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`, '_blank')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                    Twitter
                  </button>
                  <button className="share-btn facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                    Facebook
                  </button>
                  <button className="share-btn linkedin" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="sidebar-section author-bio">
                <h3>About the Author</h3>
                <p><strong>{article.author}</strong></p>
                <p className="author-description">
                  Expert writer specializing in {article.category.toLowerCase()} and lifestyle trends.
                </p>
              </div>

              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="sidebar-categories">
                  <Link to="/blog?category=Product Reviews" className="sidebar-category">Product Reviews</Link>
                  <Link to="/blog?category=Platform Reviews" className="sidebar-category">Platform Reviews</Link>
                  <Link to="/blog?category=Technology" className="sidebar-category">Technology</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <div className="container">
            <h2 className="section-title">Related Articles</h2>
            <div className="related-grid">
              {relatedArticles.map((relatedArticle, index) => (
                <Link
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.slug}`}
                  className="related-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={relatedArticle.image} alt={relatedArticle.title} />
                  <div className="related-content">
                    <span className="related-category">{relatedArticle.category}</span>
                    <h3>{relatedArticle.title}</h3>
                    <p>{relatedArticle.excerpt.substring(0, 100)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ArticlePage;
