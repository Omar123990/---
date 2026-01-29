import React from 'react';
import styles from './BlogPage.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
      
      <button 
        className={styles['pagination-btn']} 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          className={`${styles['pagination-btn']} ${currentPage === number ? styles['pagination-active'] : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button 
        className={styles['pagination-btn']} 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

    </div>
  );
};

export default Pagination;