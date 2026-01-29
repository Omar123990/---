import React from "react";
import styles from "./About.module.css";
import Values from "./Values/Values";
import AboutTeam from "./AboutTeam/AboutTeam";
import AboutCTA from "./AboutCTA/AboutCTA";

export default function About() {
  const stats = [
    { id: 1, num: "15+", label: "تصنيف", icon: "fa-solid fa-book-open" },
    { id: 2, num: "50+", label: "كاتب خبير", icon: "fa-solid fa-pen-nib" },
    {
      id: 3,
      num: "500+",
      label: "مقالة منشورة",
      icon: "fa-regular fa-newspaper",
    },
    { id: 4, num: "+2 مليون", label: "قارئ شهرياً", icon: "fa-solid fa-users" },
  ];

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.glowEffect}></div>

        <div className={styles.container}>
          <div className={styles.badge}>
            من نحن <i className="fas fa-circle fa-2xs"></i>{" "}
            <i className="fas fa-circle fa-2xs  fa-beat-fade"></i>
          </div>

          <h1 className={styles.title}>
            مهمتنا هي <span className={styles.highlight}>الإعلام والإلهام</span>
          </h1>

          <p className={styles.description}>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم خلال محتوى عالي الجودة.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.statCard}>
                <i className={`${stat.icon} ${styles.statIcon}`}></i>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Values />
      <AboutTeam />
      <AboutCTA />
    </>
  );
}
