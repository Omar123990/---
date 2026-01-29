import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Newsletter.css";

const Newsletter = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    axios
      .get("/posts.json")
      .then((response) => {
        if (response.data && response.data.posts) {
          const authorsImages = response.data.posts
            .slice(0, 3)
            .map((post) => post.author.avatar);

          setAvatars(authorsImages);
        }
      })
      .catch((error) => {
        console.error("Error loading avatars:", error);
      });
  }, []);

  return (
    <section className="newsletter-section" dir="rtl">
      <div className="glow-blob"></div>
      <div className="container">
        <div className="newsletter-card">
          <div className="icon-wrapper">
            <i className="fa-regular fa-envelope"></i>
          </div>

          <h2 className="newsletter-title">اشترك في نشرتنا الإخبارية</h2>
          <p className="newsletter-desc">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="input-group-custom">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
              <button type="submit" className="btn custom-btn">
                اشترك الآن
              </button>
            </div>
          </form>

          <div className="social-proof">
            <div className="avatars">
              {avatars.length > 0 ? (
                avatars.map((imgUrl, index) => (
                  <img key={index} src={imgUrl} alt="subscriber" />
                ))
              ) : (
                <span className="text-secondary small">جاري التحميل...</span>
              )}
            </div>

            <div className="proof-text">
              <span className="text-white fw-bold">انضم لـ +10,000 مصور</span>
              <span className="separator">.</span>
              <span className="text-grey">بدون إزعاج</span>
              <span className="separator">.</span>
              <span className="text-grey">إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
