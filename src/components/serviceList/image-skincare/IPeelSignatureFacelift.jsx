"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import ImageSkincareHeader from "./header/ImageSkincareHeader";
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

export default function IPeelSignatureFacelift() {
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
      <ImageSkincareHeader activePage="I PEEL | SIGNATURE FACELIFT® - C VITAMIN SPECIALISTA" />

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
                I PEEL | SIGNATURE FACELIFT®- C vitamin specialista
              </h1>
              <Abstract />
            </div>

            <p>
              Legismertebb, eredményorientált kezelésünk C-vitamint,
              hidroxisavakat és enzimeket alkalmaz a sejtmegújulás gyorsítására.
              Az új technológiás Centella őssejtek segítik a rosaceas vagy
              kipirosodásra hajlamos bőrt, míg a növényi méregtelenítő és
              energetizáló komplex már egy kezelés alatt látható eredményeket
              biztosít.
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
            <h2 className={styles.title}>
              C-Vitaminos enzimes hámlasztó kezelés
            </h2>
            <p>
              Az Image Skincare C-Vitaminos enzimes hámlasztó kezelés egy
              kíméletes, de hatékony bőrfeszesítő és ragyogásfokozó arckezelés.
              C-vitamint és természetes enzimeket alkalmaz a bőr megújítására és
              ragyogásának fokozására. Serkenti a sejtek megújulását, lehetővé
              téve, hogy a friss, új bőrréteg kerüljön felszínre.
            </p>
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
              A C-Vitaminos enzimes hámlasztó kezelés részletei
            </h2>
            <ul>
              <li>
                Aloe Gel alapban található 30 %-os stabilizált C-vitamin. A
                legerőteljesebb antioxidáns, amely védelmet nyújt a szabadgyökök
                káros hatásaival szemben, fokozza a kollagéntermelést és
                halványítja a pigmentfoltokat, így a bőr ragyogóbbá válik.
              </li>
              <li>
                Természetes enzimek: Gyümölcsalapú enzimek finoman hámlasztják a
                bőrt, eltávolítva az elhalt hámsejteket és elősegítve a bőr
                megújulását.
              </li>
            </ul>
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
            <h2 className={styles.title}>A kezelés főbb előnyei</h2>
            <ul>
              <li>
                Ragyogás és egységes bőrtónus: A C-vitamin halványítja a sötét
                foltokat és a bőr fakóságát, így ragyogóbb, egységesebb arcbőrt
                eredményez.
              </li>
              <li>
                Kollagénstimuláló hatás: A C-vitamin serkenti a
                kollagéntermelést, segít feszesebbé tenni a bőrt és csökkenti a
                finom vonalak megjelenését.
              </li>
              <li>
                {" "}
                Gyengéd hámlasztás: A természetes enzimek kíméletes hámlasztást
                biztosítanak, így a kezelés ideális érzékeny bőrre is, és azok
                számára, akik gyengéd megoldást keresnek a bőr felfrissítésére.
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 4. szekció --- */}
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
              Milyen esetekben ajánlott a kezelés?
            </h2>
            <ul>
              <li>Érzékeny, rosaceas bőrön is kiváló hatású</li>
              <li>
                Fakó bőr, egyenetlen bőrtónus, enyhe pigmentáció vagy az
                öregedés korai jelei ellen küzdőknek
              </li>
              <li>
                Minden bőrtípusra alkalmas, nőknek, férfiaknak és tinédzsereknek
                is, ideális a hidratáló, kíméletesen hámlasztó és bőrvilágosító
                kezelésre vágyók számára
              </li>
            </ul>
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
                <p>Arc+ nyak + dekoltázs 1 Alkalom</p>
                <p>35.000 Ft-tól</p>
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