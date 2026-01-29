import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import "./Blog.css";
import BlogCol from "./BlogCol/BlogCol";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts.json")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="blog-section">
      <div className="gradient-overlay"></div>

      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
          <div>
            <div className="benefitSpan mb-3">
              <span>
                <i className="fa-solid fa-circle fa-2xs ms-1"></i>
                <i className="fa-solid fa-circle fa-2xs ms-1 fa-beat"></i>
                مميز
              </span>
            </div>

            <h2 className="text-white h1 display-4 fw-bold">
              مقالات مختارة
            </h2>
            <p className="text-secondary mb-0 mt-3">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          <Link to="/blog" className="btn gradient-btn d-inline-flex align-items-center gap-2 px-5 py-2 text-decoration-none text-white">
            عرض الكل
            <i className="fa-solid fa-arrow-left me-2 arrow-icon"></i>
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-secondary">جاري التحميل...</p>
        ) : (
          posts.slice(0, 3).map((post) => (
            <BlogCol key={post.id} post={post} />
          ))
        )}
      </div>
    </section>
  );
}