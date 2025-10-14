import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb fade-in">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="product-detail-content">
          <div className="product-detail-image fade-in">
            <img src={product.image} alt={product.name} />
            <span className="product-detail-badge">{product.category}</span>
          </div>

          <div className="product-detail-info fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="product-detail-title">{product.name}</h1>

            <div className="product-detail-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-number">{product.rating}</span>
              <span className="rating-text">(Based on expert review)</span>
            </div>

            <div className="product-detail-price">
              <span className="price-label">Price:</span>
              <span className="price-value">{product.price}</span>
            </div>

            <div className="product-detail-description">
              <h2>Description</h2>
              <p>{product.description}</p>
            </div>

            <div className="product-detail-features">
              <h2>Key Features</h2>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-detail-actions">
              <button className="btn btn-primary btn-large" onClick={() => window.open(product.link, '_blank')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View on Retailer Site
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => navigate('/products')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Products
              </button>
            </div>

            {/* Share Section */}
            <div className="product-share">
              <h3>Share this product</h3>
              <div className="share-buttons">
                <button className="share-btn twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${product.name}`, '_blank')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </button>
                <button className="share-btn facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </button>
                <button className="share-btn linkedin" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </button>
                <button className="share-btn pinterest" onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${window.location.href}&description=${product.name}`, '_blank')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.66 7.91 6.42 9.38-.09-.78-.17-2 .04-2.86.19-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.25 1.03.52 1.87 1.54 1.87 1.85 0 3.27-1.95 3.27-4.76 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.7 2.22-4.7 4.51 0 .89.34 1.85.77 2.37.08.1.09.19.07.29-.08.31-.25 1.02-.28 1.16-.04.19-.14.23-.33.14-1.29-.6-2.1-2.48-2.1-3.99 0-3.26 2.37-6.26 6.83-6.26 3.59 0 6.38 2.56 6.38 5.97 0 3.56-2.24 6.43-5.35 6.43-1.04 0-2.03-.54-2.36-1.18 0 0-.52 1.97-.64 2.45-.23.89-.86 2-1.28 2.68A10 10 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <section className="product-specs fade-in">
          <h2 className="section-title">Product Information</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-label">Category</span>
              <span className="spec-value">{product.category}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Rating</span>
              <span className="spec-value">{product.rating} / 5.0</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Price Range</span>
              <span className="spec-value">Premium</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Availability</span>
              <span className="spec-value">In Stock</span>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2 className="section-title">Related Products</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="related-product-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <div className="related-product-info">
                    <span className="related-product-category">{relatedProduct.category}</span>
                    <h3>{relatedProduct.name}</h3>
                    <div className="related-product-footer">
                      <span className="related-product-price">{relatedProduct.price}</span>
                      <div className="related-product-rating">
                        <span className="star filled">★</span>
                        <span>{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
