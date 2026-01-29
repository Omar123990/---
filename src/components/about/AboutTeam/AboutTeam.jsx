import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AboutTeam.module.css';

export default function AboutTeam() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('/posts.json')
      .then(res => {
        const posts = res.data.posts;
        
        const uniqueAuthors = [];
        const seenNames = new Set(); 

        posts.forEach(post => {
          const author = post.author;
          if (!seenNames.has(author.name)) {
            seenNames.add(author.name);
            uniqueAuthors.push(author);
          }
        });

        setTeam(uniqueAuthors);
      })
      .catch(err => console.error("Error fetching team:", err));
  }, []);

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.badge}>فريقنا <i className="fas fa-circle fa-2xs fa-fade"></i></span>
          <h2 className={styles.title}>تعرف على كتابنا</h2>
          <p className={styles.subtitle}>فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
        </div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              
              <div className={styles.avatarWrapper}>
                <img 
                  src={member.avatar || "https://i.pravatar.cc/150"} 
                  alt={member.name} 
                  className={styles.avatar} 
                />
                <div className={styles.verifiedBadge}>
                  <i className="fa-solid fa-check"></i>
                </div>
              </div>

              <h3 className={styles.name}>{member.name}</h3>
              <span className={styles.role}>{member.role}</span>

              <div className={styles.socials}>
                <a href="#" className={styles.socialIcon + " " + styles.linkedIn}><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className={styles.socialIcon + " " + styles.github}><i className="fa-brands fa-github"></i></a>
                <a href="#" className={styles.socialIcon + " " + styles.twitter}><i className="fa-solid fa-x"></i></a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}