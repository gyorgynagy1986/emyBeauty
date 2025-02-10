import React from "react";
import styles from "@/components/layouts/home/services/Services.module.css";
import Object from "@/components/astract/Object";
import SliderServices from "@/components/sliders/SliderServices";
import Button from '@/components/button/Button3'

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Kiemelt szolgáltatásaim</h2>
          <Object />
        </div>
        <SliderServices />
        <div className={styles.btnContainer}>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Services;
