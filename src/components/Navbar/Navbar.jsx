import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-navbar fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="d-flex imgHover align-items-center gap-2">
                <img className="w-48 h-48" src="/logo-GdqARQRt.png" alt="Logo" />
                <div className="d-flex flex-column">
                    <span className="fs-6 fw-bold text-white">عدسة</span>
                    <span className="fs-6 fw-lighter primary-color">عالم التصوير الفوتوغرافي</span>
                </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white text-opacity-50"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 border border-1 border-secondary rounded-5 d-flex justify-content-center  p-2">
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link active " : "nav-link"} aria-current="page" to="/">
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link active" : "nav-link"} to="/blog">المدونة</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? "nav-link active" : "nav-link"} to="/about">من نحن</NavLink>
              </li>
            </ul>
            <div className="p-2 rounded-2 ms-2 serchHover">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button className="navbarButton" type="submit">ابدأ القراءة</button>
          </div>
        </div>
      </nav>
    </>
  );
}
