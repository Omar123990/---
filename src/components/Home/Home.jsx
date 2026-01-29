import React from "react";
import "./Home.css";
import Blog from "./../Blog/Blog";
import CategoriesSection from "./../CategoriesSection/CategoriesSection";
import LatestArticles from "../LatestArticles/LatestArticles";
import Newsletter from "../Newsletter/Newsletter";
export default function Hero() {
  return (
    <>
      <section className="hero-section d-flex align-items-center text-center">
        <div className="blob blob-orange"></div>
        <div className="blob blob-yellow"></div>
        <div className="hero-blob-center"></div>

        <div className="container position-relative z-1">
          <div className="hero-badge mb-3">
            <i className="fa-solid fa-circle fa-2xs ms-1"></i>
            <i className="fa-solid fa-circle fa-2xs ms-1 fa-beat"></i>
            <span className="text-white"> مرحبًا بك في عدسة</span>
          </div>
          <br />

          <span className="hero-title">
            اكتشف <span>فن</span>
            <br /> التصوير الفوتوغرافي
          </span>

          <p className="hero-desc mt-3 h5">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-orange px-4 text-white hero-btn">
              استكشف المقالات
              <i className="fa-solid fa-arrow-left me-2 arrow-icon"></i>
            </button>
            <button className="btn hero-btn-outline px-4">
              <i className="fa-solid fa-circle-info ms-2"></i>اعرف المزيد
            </button>
          </div>

          <div className="row justify-content-center mt-5 g-3">
            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="fa-solid fa-newspaper stat-icon"></i>
                <h3>+50</h3>
                <p>مقالة</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="fa-solid fa-users stat-icon"></i>
                <h3>+10ألف</h3>
                <p>قارئ</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="fa-solid fa-folder-open stat-icon"></i>
                <h3>4</h3>
                <p>تصنيفات</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card">
                <i className="fa-solid fa-pen-nib stat-icon"></i>
                <h3>6</h3>
                <p>كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <CategoriesSection />
      <LatestArticles />
      <Newsletter />
    </>
  );
}
