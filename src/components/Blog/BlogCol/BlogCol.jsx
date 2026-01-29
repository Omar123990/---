import React from "react";
import { Link } from "react-router"; // 1. استيراد Link
import "./BlogCol.css";

export default function BlogCol({ post }) {
  if (!post) return null;

  const articleSlug = post.title.replaceAll(' ', '-');

  return (
    <Link to={`/blog/${articleSlug}`} className="custom-row text-decoration-none">
      
      <div className="custom-col p-0 overflow-hidden">
        <img className="image-cover" src={post?.image} alt={post?.title} />
        {post.featured && (
          <div className="badge-container">
            <span className="badge">جديد</span>
          </div>
        )}
      </div>

      <div className="custom-col d-flex flex-column">
        <div className="d-flex align-items-center g-3 mb-3">
          <span className="spanColor ms-1">{post.category}</span>
          <span className="text-secondary">
            <i className="fas fa-clock"></i> {post.readTime}
          </span>
        </div>

        <h2 className="h4 text-white mb-3">
          {post.title}
        </h2>

        <p className="text-secondary">
          {post.excerpt}
        </p>

        <div className="d-flex align-items-center justify-content-between mt-auto">
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <img
                className="w-48 h-48 rounded-circle"
                src={post.author.avatar}
                alt={post.author.name}
              />
              <div className="dot-badge"></div>
            </div>

            <div className="d-flex flex-column">
              <span className="fw-bold text-white">
                {post.author.name}
              </span>
              <p className="text-secondary mb-0">
                {post.date}
              </p>
            </div>
          </div>

          <div className="group">
            <span className="link-inline ms-2">اقرأ المزيد</span>
            <i className="fas fa-arrow-left" style={{ color: "#f97316" }}></i>
          </div>
        </div>
      </div>
    </Link>
  );
}