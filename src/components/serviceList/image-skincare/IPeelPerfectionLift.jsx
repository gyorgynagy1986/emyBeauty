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

export default function IPeelPerfectionLift() {
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
      <ImageSkincareHeader activePage="I PEEL | PERFECTION LIFT™ - BŐRMEGÚJÍTÓ KEZELÉS" />

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
                I PEEL | PERFECTION LIFT™ - Bőrmegújító kezelés
              </h1>
              <Abstract />
            </div>

            <p>
              Egy erőteljes, orvosi szintű hámlasztó kezelés az IMAGE
              Skincare-től, amely a bőr különböző problémáira – például aknéra,
              hiperpigmentációra, finom vonalakra és textúra-egyenetlenségekre –
              nyújt megoldást. Ez a kezelés tökéletes azok számára, akik
              látványos bőrfeszesítő és fiatalító eredményt szeretnének elérni.
              Erősebb összetevőket tartalmaz, így a problémás bőrre és érettebb
              bőrtípusokra is kiváló. Hatékony és intenzív kezelés, amely segít
              a bőr megfiatalításában, a pattanások és foltok halványításában,
              és a bőr ragyogásának visszaállításában.
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
                Szalicilsav: Mélyen tisztítja a pórusokat, eltávolítja a
                felesleges olajat és segít a pattanások elleni küzdelemben.
              </li>
              <li>
                Glikolsav: Hatékonyan hámlaszt, eltávolítja az elhalt
                hámsejteket, és elősegíti a bőr megújulását, így simább
                bőrfelszínt biztosít.
              </li>
              <li>
                Retinol: Erőteljes anti-aging összetevő, amely serkenti a
                kollagéntermelést, csökkenti a ráncokat és a finom vonalakat,
                valamint segít egyenletesebbé tenni a bőrtónust.
              </li>
              <li>
                Antioxidánsok és Gyulladáscsökkentők: Nyugtatják és védik a bőrt
                a környezeti károktól, miközben segítenek a gyulladások
                csökkentésében.
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
              A kezelés a különféle savak és a retinol kombinációjával
              intenzíven hámlasztja a bőrt, miközben serkenti a sejtek
              megújulását. Az elhalt hámsejtek eltávolítása lehetővé teszi az
              új, fiatalosabb bőrréteg megjelenését. Az aktív összetevők
              csökkentik a hiperpigmentációt, a pattanások utáni hegeket és az
              öregedés jeleit.
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
                Ráncok és finom vonalak csökkentése: A retinol és a glikolsav
                kombinációja kisimítja a bőrt, csökkentve a finom vonalak és
                ráncok megjelenését.
              </li>
              <li>
                Akne és hiperpigmentáció kezelése: A szalicilsav és a retinol
                hatékonyan kezeli a pattanásokat, miközben halványítja a
                hiperpigmentációs foltokat és hegeket.
              </li>
              <li>
                Egyenletes, ragyogó bőrtónus: Az intenzív hámlasztás
                egyenletesebb és ragyogóbb bőrt eredményez.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik öregedésgátló, pattanások
              elleni vagy hiperpigmentáció-csökkentő kezelést keresnek,
              különösen azok számára, akik mélyebb és látványosabb bőrmegújító
              kezelésre vágynak.
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