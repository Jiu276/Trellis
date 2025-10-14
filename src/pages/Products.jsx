import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products, productCategories } from '../data/products';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <main className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1 className="page-title fade-in">Premium Products</h1>
          <p className="page-subtitle fade-in">
            Curated collection of luxury and high-quality products
          </p>
        </div>
      </div>

      <div className="container">
        <div className="products-controls">
          {/* Category Filter */}
          <div className="filter-section">
            <label className="filter-label">Category</label>
            <div className="category-filter">
              {productCategories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="sort-section">
            <label htmlFor="sort" className="filter-label">Sort By</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Count */}
        <div className="results-info">
          <p>
            Showing {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredAndSortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card-full fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <span className="product-category-badge">{product.category}</span>
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                      ★
                    </span>
                  ))}
                  <span className="rating-value">{product.rating}</span>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="no-products">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM4 3h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3>No products found</h3>
            <p>Try selecting a different category</p>
            <button
              className="btn btn-primary"
              onClick={() => setSelectedCategory('All')}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
