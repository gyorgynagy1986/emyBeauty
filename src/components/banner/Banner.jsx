import React from "react";
import Link from "next/link";
import styles from "./BannerText.module.css";

import { bannertext } from "@/data/Banner";

const BannerText = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.scrollText}>
          <div className={styles.textGroup}>
            {bannertext.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.link}>
                  <p className={`${styles.p} ${item.dot === false && styles.p2} ${styles.linkText}`}>
                    {item.name}
                  </p>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerText;