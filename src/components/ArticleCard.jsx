import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article, featured = false }) => {
  return (
    <Link to={`/article/${article.slug}`} className={`article-card ${featured ? 'featured' : ''}`}>
      <div className="article-image-wrapper">
        <img src={article.image} alt={article.title} className="article-image" />
        <span className="article-category">{article.category}</span>
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span className="article-date">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="article-read-time">{article.readTime}</span>
        </div>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-footer">
          <span className="article-author">By {article.author}</span>
          <span className="read-more">Read More →</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
