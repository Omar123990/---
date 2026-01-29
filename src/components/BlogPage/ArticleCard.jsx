import React from 'react';
import { Link } from 'react-router'; // أو react-router زي ما عندك
import styles from './BlogPage.module.css';

const ArticleCard = ({ post, viewMode }) => {
  const isList = viewMode === 'list';
  const articleSlug = post.title.replaceAll(' ', '-');

  return (
    <Link 
      to={`/blog/${articleSlug}`}
      className={`card h-100 bg-dark text-white border-secondary overflow-hidden position-relative text-decoration-none ${styles['custom-card']} ${isList ? styles['list-view-card'] : ''}`}
    >
      
      <div 
        className={`${styles['card-img-wrapper']} ${isList ? styles['list-view-img-wrapper'] : 'position-relative'}`}
        style={{ height: isList ? 'auto' : '240px' }}
      >
        <img 
          src={post.image} 
          className="w-100 h-100 object-fit-cover" 
          alt={post.title} 
        />
        <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3 rounded-pill px-3 fw-bold shadow-sm">
          {post.category}
        </span>
      </div>

      <div className={`card-body d-flex flex-column ${isList ? styles['list-view-body'] : 'p-4'}`}>
        
        <div className="d-flex align-items-center gap-3 text-secondary small mb-3">
          <span><i className="far fa-clock text-warning ms-1"></i> {post.readTime}</span>
          <span className="opacity-25">|</span>
          <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
        </div>

        <h4 className="card-title fw-bold mb-3 text-white">
          {post.title}
        </h4>

        <p className="text-secondary flex-grow-1 small" style={{ lineHeight: '1.7' }}>
          {post.excerpt}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-secondary border-opacity-25 w-100 position-relative">
          <div className="d-flex align-items-center gap-2">
            <img 
              src={post.author.avatar} 
              className="rounded-circle border border-secondary" 
              width="30" height="30" 
              alt={post.author.name} 
            />
            <div className="small fw-bold">{post.author.name}</div>
          </div>

          <div className={styles['arrow-btn']}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;