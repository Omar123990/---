import React from "react";
import { Link } from "react-router"; // تأكد من المسار الصحيح
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section position-relative overflow-hidden">
      <div className="footer-blob footer-blob-orange"></div>
      <div className="footer-blob footer-blob-yellow"></div>
      <div className="container">
        <div className="row gy-4">
          
          <div className="col-lg-4">
            <div className="footer-logo mb-2">
              <span className="text-white px-3 py-2 rounded-3 shadowSpan">ع</span> عدسة
            </div>

            <p className="footer-text">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارككم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="footer-social">
              <Link className="social-icon"><i className="fa-brands fa-youtube"></i></Link>
              <Link className="social-icon"><i className="fa-brands fa-linkedin-in"></i></Link>
              <Link className="social-icon"><i className="fa-brands fa-github"></i></Link>
              <Link className="social-icon"><i className="fa-brands fa-x-twitter"></i></Link>
            </div>
          </div>

          <div className="col-lg-2">
            <h5 className="footer-title">
              استكشف
            </h5>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/">المدونة</Link></li>
              <li><Link to="/">من نحن</Link></li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h5 className="footer-title">التصنيفات</h5>
            <ul className="footer-links">
              <li><Link to="/">إضاءة</Link></li>
              <li><Link to="/">بورتريه</Link></li>
              <li><Link to="/">مناظر طبيعية</Link></li>
              <li><Link to="/">تقنيات</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h5 className="footer-title">ابقَ على اطلاع</h5>
            <p className="footer-text">
              اشترك للحصول على أحدث المقالات والتحديثات
            </p>

            <div className="d-flex flex-column justify-content-center">
              <input
                type="email"
                className="footer-input"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button className="footer-btn text-white">اشترك</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 عدسة. صنع بكل <i className="fas fa-heart text-warning"></i>{" "}
            جميع الحقوق محفوظة.
          </span>
          <div className="footer-bottom-links">
            <Link to="/">سياسة الخصوصية</Link>
            <Link to="/">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}