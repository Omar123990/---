import React from 'react';
import styles from './Values.module.css';

export default function Values() {
  
  const valuesData = [
    {
      id: 1,
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة",
      icon: "fa-solid fa-bullseye" 
    },
    {
      id: 2,
      title: "تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: "fa-solid fa-bolt" 
    },
    {
      id: 3,
      title: "المجتمع",
      desc: "تعلم مع آلاف المصورين",
      icon: "fa-solid fa-handshake"
    },
    {
      id: 4,
      title: "دائماً محدث",
      desc: "أحدث الاتجاهات وأفضل الممارسات",
      icon: "fa-solid fa-arrows-rotate"
    }
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.pipe}>|</span>
             قيمنا 
            <span className={styles.pipe}>|</span>
          </h2>
          <p className={styles.subtitle}>المبادئ التي توجه كل ما نقوم بإنشائه</p>
        </div>

        <div className={styles.grid}>
          {valuesData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.icon}>
                <i className={item.icon}></i>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}