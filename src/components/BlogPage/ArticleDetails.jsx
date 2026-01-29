import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router'; // تأكد إنها dom
import axios from 'axios';
import styles from './ArticleDetails.module.css';
import ArticleCard from '../BlogPage/ArticleCard';

export default function ArticleDetails() {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const articleContent = [
    { title: 'التواصل مع الموضوع', content: 'قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.' },
    { title: 'اختيار العدسة المناسبة', content: 'عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.' },
    { title: 'الإضاءة الطبيعية', content: 'النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.' },
    { title: 'التركيز على العيون', content: 'العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة ومركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.' },
    { title: 'الخلفية والتكوين', content: 'اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.' },
    { title: 'الخلاصة', content: 'البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios.get('/posts.json').then((res) => {
      const allPosts = res.data.posts;
      const currentPost = allPosts.find(p => p.title.replaceAll(' ', '-') === title);
      setPost(currentPost);
      if (currentPost) {
        const related = allPosts
          .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      setLoading(false);
    });
  }, [title]);

  if (loading) return <div className="text-center text-white py-5 mt-5">جارٍ التحميل...</div>;
  if (!post) return <div className="text-center text-white py-5 mt-5">عفواً، المقال غير موجود</div>;

  return (
    <div className={styles.pageWrapper} dir="rtl">

      <div className={styles.heroWrapper}>
        <div className={styles.heroImageBg} style={{ backgroundImage: `url(${post.image})` }}></div>
        <div className={styles.heroOverlay}></div>

        <div className={`container ${styles.heroContentContainer}`}>
          <div className={styles.breadcrumbs}>
             <Link to="/">الرئيسية</Link> <i className="fa-solid fa-chevron-left mx-2 small"></i>
             <Link to="/blog">المدونة</Link> <i className="fa-solid fa-chevron-left mx-2 small"></i>
             <span className="text-warning">{post.category}</span>
          </div>

          <div className="text-center position-relative z-2 mt-5">
            <div className="d-inline-flex align-items-center gap-3 mb-4">
              <span className={styles.heroBadge}>{post.category}</span>
              <span className="text-white-50 small"><i className="fa-regular fa-calendar ms-2"></i> {new Date(post.date).toLocaleDateString('ar-EG')}</span>
              <span className="text-white-50 small"><i className="fa-regular fa-clock ms-2"></i> {post.readTime}</span>
            </div>

            <h1 className={styles.heroTitle}>{post.title}</h1>

            <div className={styles.floatingAuthorBox}>
              <img src={post.author.avatar} alt={post.author.name} />
              <div className="text-end">
                <h6 className="m-0 fw-bold">{post.author.name}</h6>
                <small className="text-white-50">محرر {post.category}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row g-5">
          
          <div className="col-lg-4 order-2 order-lg-2">
            <div className={styles.stickySidebar} style={{ alignSelf: 'flex-start' }}>
              
              <div className={styles.sidebarCard}>
                <h5 className="text-white fw-bold mb-4 border-bottom border-secondary pb-3">
                  <i className="fa-solid fa-list-ul ms-2 text-warning"></i> محتويات المقال
                </h5>
                <ul className={styles.tocList}>
                  {articleContent.map((sec, idx) => (
                    <li key={idx}>
                      <a href={`#sec-${idx}`} className={styles.tocLink}>
                        <span className={styles.tocNumber}>{idx + 1}</span> {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="row g-2 mb-4">
                <div className="col-6">
                  <div className={styles.statBox}>
                     <i className="fa-regular fa-calendar text-warning mb-2 h4 d-block"></i>
                     <span className="text-secondary small d-block">تاريخ النشر</span>
                     <span className="fw-bold text-white small">{new Date(post.date).toLocaleDateString('ar-EG')}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.statBox}>
                     <i className="fa-regular fa-clock text-warning mb-2 h4 d-block"></i>
                     <span className="text-secondary small d-block">وقت القراءة</span>
                     <span className="fw-bold text-white small">{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.sidebarCard} text-center`}>
                 <div className={styles.mailIconBox}>
                    <i className="fa-solid fa-envelope"></i>
                 </div>
                 <h5 className="fw-bold text-white mb-2">لا تفوت جديدنا</h5>
                 <p className="text-secondary small mb-3">اشترك للحصول على أحدث المقالات.</p>
                 <button className={styles.subscribeBtn}>تصفح المزيد</button>
              </div>

            </div>
          </div>

          {/* --- Main Content --- */}
          <div className="col-lg-8 order-1 order-lg-1">
             {/* Quote */}
             <div className={styles.quoteBox}>
                <p>"{post.excerpt}"</p>
             </div>

             {/* Article Body */}
             <div className={styles.articleText}>
                <p className="lead mb-5">تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة...</p>
                {articleContent.map((section, idx) => (
                 <div key={idx} id={`sec-${idx}`} className="mb-5">
                    <h3 className={styles.contentTitle}>
                      <i className="fa-solid fa-camera text-warning ms-2"></i> {section.title} 
                    </h3>
                    <p>{section.content}</p>
                 </div>
               ))}
             </div>

             {/* Tags Box */}
             <div className={styles.tagsBox}>
                <span className="text-warning fw-bold ms-3">
                  <i className="fa-solid fa-tags ms-2"></i> الوسوم
                </span>
                <div className="d-flex gap-2 flex-wrap">
                   <span className={styles.tagBadge}>#{post.category}</span>
                   <span className={styles.tagBadge}>#تصوير_احترافي</span>
                   <span className={styles.tagBadge}>#إضاءة</span>
                </div>
             </div>

             {/* Share Box */}
             <div className={styles.shareBox}>
                <span className="text-white fw-bold ms-3">
                  <i className="fa-solid fa-share-nodes ms-2 text-warning"></i> شارك المقال
                </span>
                <div className="d-flex gap-2">
                   <button className={styles.shareBtn}><i className="fa-solid fa-link"></i></button>
                   <button className={styles.shareBtn}><i className="fa-brands fa-whatsapp"></i></button>
                   <button className={styles.shareBtn}><i className="fa-brands fa-linkedin-in"></i></button>
                   <button className={styles.shareBtn}><i className="fa-brands fa-twitter"></i></button>
                </div>
             </div>

             {/* Large Author Box */}
             <div className={styles.authorBoxLarge}>
                <div className="d-flex align-items-center gap-4">
                   <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatarLg} />
                   <div>
                      <span className="text-warning small fw-bold mb-1 d-block">كاتب المقال</span>
                      <h4 className="text-white fw-bold mb-2">{post.author.name}</h4>
                      <p className="text-white-50 small m-0">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- Related Posts --- */}
       <div className="container py-5 mt-5 border-top border-secondary border-opacity-25">
         <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-white m-0">مقالات قد تعجبك</h3>
            <Link to="/blog" className="text-warning text-decoration-none small fw-bold">
               عرض الكل <i className="fa-solid fa-arrow-left ms-1"></i>
            </Link>
         </div>
         <div className="row g-4">
            {relatedPosts.map(p => (
               <div key={p.id} className="col-md-4">
                  <ArticleCard post={p} viewMode="grid" />
               </div>
            ))}
         </div>
       </div>

    </div>
  );
}