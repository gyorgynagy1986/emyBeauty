"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import ImageSkincareHeader from "../image-skincare/header/ImageSkincareHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

// Animation variants for more diversity
const animationVariants = [
  "fade-up", 
  "fade-right", 
  "fade-left", 
  "zoom-in", 
  "flip-up"
];

export default function IPeelBetaLift() {
  // Screen size tracking
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Screen size check function
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();
    
    // AOS initialization
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: false,
      disableHorizontalScroll: true // Prevent horizontal scroll
    });
    
    // Refresh AOS on mobile state change
    if (isMobile) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }

    // Event listener for screen size changes
    const resizeHandler = () => {
      const wasMobile = isMobile;
      checkIfMobile();
      
      // Only refresh AOS when switching between mobile/desktop
      if (wasMobile !== isMobile) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    };

    window.addEventListener('resize', resizeHandler);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isMobile]);

  return (
    <>
      <ImageSkincareHeader activePage="I PEEL | BETA LIFT - AKNÉKEZELŐ HÁMLASZTÁS" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div 
            data-aos={isMobile ? "fade" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                I PEEL | Beta Lift - Aknékezelő hámlasztás
              </h1>
              <Abstract />
            </div>

            <p>
              Az IMAGE Skincare kifejezetten aknéra hajlamos, olajos és
              problémás bőr számára fejlesztett orvosi szintű, tisztító hatású
              hámlasztója. Ez az erőteljes, tisztító kezelés kifejezetten a
              pattanásokra összpontosít, mélyen a pórusokba hatol, és segít
              megelőzni a további akne kialakulását.
            </p>

            <div className={styles.buttonContainer}>
              <Button />
              <Button2 />
            </div>
          </div>

          {/* --- Kép --- */}
          <div 
            data-aos={isMobile ? "fade" : "fade-left"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.slug1}
              sizes={size.fullsize}
            />
          </div>

          {/* --- 1. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>A kezelés főbb összetevői</h2>
            <ul>
              <li>
                Szalicilsav: Erőteljes BHA (béta-hidroxi-sav), amely mélyen
                behatol a pórusokba, feloldja a zsírt és a szennyeződéseket, és
                segít eltávolítani a pattanások és mitesszerek okozóját.
              </li>
              <li>
                Gyulladáscsökkentők: Enyhítik a bőrirritációt, csökkentik a
                gyulladást és megnyugtatják a bőrt.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 2. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>
              Milyen hatás érhető el ezzel az eljárással?
            </h2>
            <p>
              A szalicilsav mélyen tisztítja a bőrt és eltávolítja a faggyút,
              amely a pattanások elsődleges okozója. Ez az intenzív hámlasztás
              lehetővé teszi, hogy a pórusok tisztábbak legyenek, ezáltal
              csökkentve az újabb aknék kialakulását. A kezelés ugyanakkor segít
              csökkenteni a pórusok méretét és egyenletesebbé teszi a
              bőrfelszínt.
            </p>
            <Abstract />
          </div>

          {/* --- 3. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Milyen előnyei vannak?</h2>
            <ul>
              <li>
                Pattanások kezelése és megelőzése: A szalicilsav hatékonyan
                távolítja el a pórusokban felhalmozódott olajat és
                szennyeződéseket, megelőzve az újabb akne kialakulását.
              </li>
              <li>
                Gyulladás csökkentése: A kezelés gyulladáscsökkentő hatóanyagai
                enyhítik az irritációt, csökkentik a bőrpírt és a duzzanatot.
              </li>
              <li>
                Tisztább, matt bőrfelszín: A hámlasztás segít az olajtermelés
                szabályozásában, így a bőr kevésbé fénylik és tisztább, matt
                megjelenésű lesz.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik küzdenek aknéval,
              mitesszerekkel és zsíros bőrrel. Ideális választás mindazoknak,
              akik egy gyors, hatékony megoldást keresnek a pattanások
              kezelésére és megelőzésére.
            </p>
            <Abstract />
          </div>

          {/* --- Árazás --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kezelések ára</h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc kezelés 1 Alkalom</p>
                <p>29.000 Ft-tól</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}