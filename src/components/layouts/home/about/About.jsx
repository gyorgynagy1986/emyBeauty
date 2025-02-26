"use client";

import React from "react";
import styles from "./About.module.css";
import Ob from "@/components/astract/Object";
import Image from "next/image";
import Link from "next/link";

import { mainPage } from "@/data/photos";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import Button4 from "@/components/button/Button4";

import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  AOS.init();
  return (
    <section className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.helper}>
          <div
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.textContainer}
          >
            <div className={styles.titleContainer}>
              <h2>Rólam</h2>
              <Ob />
            </div>
            <div className={styles.text}>
              <p>
                <span> Hajduné Fekete Emilia</span> vagyok, mesterkozmetikus,
                bőresztéta és esztétikai sminktetováló, az Emy Beauty Estetics
                megálmodója.
              </p>
              <p>
                Szenvedélyem a nők testi-lelki harmóniájának megteremtése és
                bőrük egészségének ápolása. Személyre szabott kezeléseimmel és a
                legmodernebb technológiákkal segítek, hogy a szépség és az
                önbizalom természetes ragyogása életre keljen.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Button4 />
            </div>
          </div>

          <div  data-aos="fade-left"
            data-aos-offset="150"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true" className={styles.photoContainer}>
            <Image
              sizes={size.fullsize}
              src={mainPage.photoMainPage}
              alt={alt.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
