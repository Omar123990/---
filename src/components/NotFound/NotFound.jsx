import React from "react";
import { Link } from "react-router";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.blobTop}></div>
      <div className={styles.blobBottom}></div>

      <h1 className={styles.errorCode}>404</h1>

      <div className={styles.iconCircle}>
        <i className={`fa-regular fa-face-frown ${styles.sadIcon}`}></i>
      </div>

      <h2 className={styles.title}>عفواً! الصفحة غير موجودة</h2>
      <p className={styles.description}>
        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
        الصحيح.
      </p>

      <div className={styles.btnGroup}>
        <Link to="/" className={`${styles.btn} ${styles.primaryBtn}`}>
          <i className="fa-solid fa-house"></i>
          الذهاب للرئيسية
        </Link>

        <Link to="/blog" className={`${styles.btn} ${styles.outlineBtn}`}>
          <i className="fa-regular fa-newspaper"></i>
          تصفح المقالات
        </Link>
      </div>

      <div className={styles.footerLinks}>
        <span className={styles.footerLabel}>قد تجد هذه مفيدة:</span>
        <div className={styles.linksWrapper}>
          <Link to="/blog" className={styles.link}>
            المدونة
          </Link>
          <span style={{ color: "#333" }}>•</span>
          <Link to="/about" className={styles.link}>
            من نحن
          </Link>
          <span style={{ color: "#333" }}>•</span>
          <Link to="/privacy" className={styles.link}>
            الخصوصية
          </Link>
        </div>
      </div>
    </div>
  );
}
