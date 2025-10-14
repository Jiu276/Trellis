import { useState, useMemo } from 'react';
import { articles, categories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './Blog.css';

const ARTICLES_PER_PAGE = 6;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  // Reset to first page when filters change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1 className="page-title fade-in">Articles & Reviews</h1>
          <p className="page-subtitle fade-in">
            Explore our curated collection of insights and reviews
          </p>
        </div>
      </div>

      <div className="container">
        <div className="blog-controls">
          {/* Search Bar */}
          <div className="search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p>
            Showing {paginatedArticles.length} of {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Articles Grid */}
        {paginatedArticles.length > 0 ? (
          <>
            <div className="articles-grid">
              {paginatedArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  ←
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="pagination-ellipsis">...</span>;
                  }
                  return null;
                })}

                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
