"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Contact.module.css";
import Ob from "@/components/astract/ObjectElement";
import Button from "@/components/button/Button";
import Button2 from "@/components/button/Button2";
import Button3 from "@/components/button/Button4";



const Contact = () => {
  // Initialize AOS only on client-side after component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.helper}>
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h2
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                Időpontfoglalás
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className={styles.text}
            >
              <p>
                Kezeléseim kizárólag előzetes bejelentkezés alapján érhetők el.
                Minden vendégem teljes figyelmet és személyre szabott törődést
                kap a lefoglalt időpontban.
              </p>
            </div>
            <Ob />
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className={styles.btnContainer}
            >
              <Button />
              <Button2 />
            </div>
          </div>

          <div className={styles.textContainer2}>
            <div className={styles.titleContainer}>
              <h2
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="0"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                Elérhetőségeim
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className={styles.text}
            >
              <p>
                Két városban is elérhető vagyok, hogy közelebb hozhassam
                számodra a szépség és harmónia élményét. Fordulj hozzám
                bizalommal, és foglalj időpontot személyre szabott kezelésre egy
                nyugodt, igényes környezetben!
              </p>
            </div>
            <Ob />
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              style={{ marginTop: "0px" }}
              className={styles.btnContainer}
            >
              <Button3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;