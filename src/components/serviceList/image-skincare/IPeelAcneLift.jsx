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

export default function IPeelAcneLift() {
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
      <ImageSkincareHeader activePage="I PEEL | ACNE LIFT® - AKNÉS BŐR KEZELÉSE" />

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
                I PEEL | ACNE LIFT® - Aknés bőr kezelése
              </h1>
              <Abstract />
            </div>

            <p>
              Az I PEEL | Acne Lift® az IMAGE Skincare által fejlesztett
              speciális hámlasztó kezelés, aknéra hajlamos, problémás bőrre.
              Erős alfa- és béta-hidroxi savak elegye növényi orgona
              őssejtekkel, csökkenti a pattanásokat, pirosságot, eltünteti az
              akne után visszamaradt sötét foltokat. Méregtelenítő ylan ylang és
              eukaliptusz tisztítja a zsíros bőrt, és hatékonyan gyógyítja az
              aknés elváltozást. A kezelés kombinálja a gyulladáscsökkentő és
              tisztító hatású savakat, amelyek hatékonyan küzdenek a pattanások
              és a zsíros bőr problémái ellen, miközben segítenek tisztább,
              simább arcbőrt elérni.
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
                Szalicilsav: Egy BHA (béta-hidroxi-sav), amely behatol a pórusok
                mélyére, tisztítja a felesleges olajat és eltávolítja az elhalt
                hámsejteket, így segít megelőzni az újabb pattanások
                kialakulását.
              </li>
              <li>
                Glikolsav: Egy AHA (alfa-hidroxi-sav), amely finoman hámlasztja
                a bőr felszínét, segít eltávolítani az elhalt hámréteget és
                elősegíti a bőr megújulását.
              </li>
              <li>
                Gyulladáscsökkentő összetevők: Segítenek csökkenteni a bőrpírt
                és a duzzanatot, ezáltal nyugtatják a gyulladt pattanásokat.
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
              A szalicilsav mélyen behatol a pórusokba, ahol feloldja a faggyút
              és a szennyeződéseket, míg a glikolsav eltávolítja a bőr felső
              rétegén található elhalt sejteket. Ez a kombináció lehetővé teszi
              a bőr számára, hogy megtisztuljon, miközben csökken a pórusok
              eltömődése.
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
                Pattanás és faggyútermelés csökkentése: A szalicilsav és a
                glikolsav együttes hatása segít megtisztítani a pórusokat és
                csökkenteni az aknés tüneteket.
              </li>
              <li>
                Egyenletesebb bőrfelszín: A rendszeres hámlasztás segít a
                pattanások utáni hegek és foltok halványításában, így a bőr
                simábbá válik.
              </li>
              <li>
                Gyulladáscsökkentő hatás: Az összetevők nyugtatják az irritált,
                gyulladt bőrt, így a kezelés kevésbé okoz irritációt az aknéra
                hajlamos bőrön.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik aknéval, mitesszerekkel
              vagy zsíros bőrrel küzdenek. Továbbá mindazoknak, akik a pórusok
              eltömődése, gyulladások és aknés foltok ellen keresnek hatékony
              kezelést.
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
              <div className={styles.priceItems}>
                <p>6 Alkalom esetén</p>
                <p>+ 1 alkalom AJÁNDÉK</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}