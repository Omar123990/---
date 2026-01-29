import React from "react";
import { NavLink } from "react-router";
import "./CategoriesSection.css";

export default function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge mb-3 d-inline-block">
            <i className="fas fa-circle fa-2xs ms-1"></i>
            <i className="fas fa-circle fa-2xs ms-1 fa-beat"></i>
            التصنيفات
          </span>
          <h2 className="section-title">استكشف حسب الموضوع</h2>
          <p className="section-subtitle">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3">
            <NavLink to="/blog" className="category-card">
              <div className="icon-box">
                <i className="fa-solid fa-sliders"></i>
              </div>
              <h5>تقنيات</h5>
              <span>5 مقالات</span>
            </NavLink>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <NavLink to="/blog" className="category-card">
              <div className="icon-box">
                <i className="fa-regular fa-image"></i>
              </div>
              <h5>مناظر طبيعية</h5>
              <span>2 مقالات</span>
            </NavLink>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <NavLink to="/blog" className="category-card">
              <div className="icon-box">
                <i className="fa-solid fa-user"></i>
              </div>
              <h5>بورتريه</h5>
              <span>3 مقالات</span>
            </NavLink>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <NavLink to="/blog" className="category-card">
              <div className="icon-box">
                <i className="fa-solid fa-gear"></i>
              </div>
              <h5>إضاءة</h5>
              <span>3 مقالات</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
