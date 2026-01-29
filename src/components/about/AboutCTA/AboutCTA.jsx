import React from 'react';
import styles from './AboutCTA.module.css';

export default function AboutCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        
        <h2 className={styles.title}>لديك أسئلة؟ دعنا نتحدث!</h2>
        
        <p className={styles.description}>
          تحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>
        
        <div className={styles.btnGroup}>
          <button className={`${styles.btn} ${styles.btnBlack}`}>
            <i className="fa-regular fa-envelope"></i>
            تواصل معنا
          </button>

          <button className={`${styles.btn} ${styles.btnOutline}`}>
            تصفح المقالات
          </button>
        </div>

      </div>
    </section>
  );
}