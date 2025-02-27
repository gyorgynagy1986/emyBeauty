"use client";

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import styles from "./About.module.css";
import Ob from "@/components/astract/ObjectElement";
import Image from "next/image";

import { mainPage } from "@/data/photos";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import Button4 from "@/components/button/Button4";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Képernyőméret ellenőrzése és isMobile állapot beállítása
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();
    
    // AOS inicializálása
    AOS.init();
    
    // Mobilon frissítsük az AOS-t a state változás után
    if (isMobile) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }

    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener('resize', () => {
      const wasMobile = isMobile;
      checkIfMobile();
      
      // Ha változott a nézet típusa, frissítsük az AOS-t
      if (wasMobile !== isMobile) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
    
    // Komponens leválasztásakor takarítunk
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  return (
    <section className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.helper}>
          <div
            data-aos={isMobile ? "fade" : "fade-right"}
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

          <div
            data-aos={isMobile ? "fade" : "fade-left"}
            data-aos-offset="150"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              sizes={size.fullsize}
              src={mainPage.photoMainPage}
              alt={alt.name}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;