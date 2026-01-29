import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./BlogPage.module.css";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    axios.get("/posts.json").then((res) => {
      setPosts(res.data.posts);
      setFilteredPosts(res.data.posts);
    });
  }, []);

  useEffect(() => {
    let result = posts;
    if (activeCategory !== "الكل") {
      result = result.filter((post) => post.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter((post) => post.title.includes(searchQuery));
    }
    setFilteredPosts(result);
    setCurrentPage(1);
  }, [activeCategory, searchQuery, posts]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["grid-background"]}></div>

      <div className={styles["header-section"]}>
        <div className="container">
          <span className={styles["blog-badge"]}>
            <i className="fa-solid fa-bolt me-2"></i> مدونتنا
          </span>
          <h2 className="display-4 fw-bold text-white mb-3">استكشف <span className="text-warning">مقالاتنا</span></h2>
          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "600px", fontSize: "1.1rem" }}
          >
            اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الفوتوغرافي الحديث
          </p>
        </div>
      </div>

      <div className="container pb-5 position-relative z-1">
        <div className={styles["filter-bar"]}>
          <div className={styles["search-wrapper"]}>
            <i
              className={`fa-solid fa-magnifying-glass ${styles["search-icon"]}`}
            ></i>
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              className={styles["search-input"]}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="d-flex flex-wrap gap-2">
            {[
              "الكل",
              "إضاءة",
              "بورتريه",
              "مناظر طبيعية",
              "معدات",
              "تقنيات",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles["category-btn"]} ${activeCategory === cat ? styles["category-btn-active"] : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles["controls-bar"]}>
          <span className="text-secondary small fw-bold">
            عرض {currentItems.length} مقالات
          </span>

          <div className={styles["view-toggles"]}>
            <button
              className={`${styles["toggle-icon"]} ${viewMode === "list" ? styles["toggle-active"] : ""}`}
              onClick={() => setViewMode("list")}
            >
              <i className="fa-solid fa-list"></i>
            </button>
            <button
              className={`${styles["toggle-icon"]} ${viewMode === "grid" ? styles["toggle-active"] : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <i className="fa-solid fa-border-all"></i>
            </button>
          </div>
        </div>

        <div className="row g-4">
          {currentItems.map((post) => (
            <div
              key={post.id}
              className={viewMode === "grid" ? "col-md-6 col-lg-4" : "col-12"}
            >
              <ArticleCard post={post} viewMode={viewMode} />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
