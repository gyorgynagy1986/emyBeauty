"use client";

import React from "react";
import styles from "@/components/layouts/home/services/Services.module.css";
import Ob from "@/components/astract/ObjectElement";
import SliderServices from "@/components/sliders/SliderServices";
import Button from "@/components/button/Button3";
import "aos/dist/aos.css";
import AOS from "aos";

const Services = () => {
  AOS.init();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div
          data-aos="fade"
          data-aos-offset="250"
          data-aos-delay="150"
          data-aos-duration="1500"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          className={styles.titleContainer}
        >
          <h2>Kiemelt szolgáltatásaim</h2>
          <Ob />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <SliderServices />
        </div>
        <div className={styles.btnContainer}>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Services;
