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

export default function IPeelLighteningLift() {
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
      <ImageSkincareHeader activePage="I PEEL | LIGHTENING LIFT® - BŐRVILÁGOSÍTÓ HÁMLASZTÁS" />

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
                I PEEL | LIGHTENING LIFT® - Bőrvilágosító hámlasztás
              </h1>
              <Abstract />
            </div>

            <p>
              Az I PEEL | Lightening Lift® az IMAGE Skincare által kifejlesztett
              bőrhalványító és világosító hámlasztó eljárás. Ez a kezelés keveri
              a tejsavat, a kojiksavat természetes növényi őssejtekkel és
              C-vitaminnal, így gyengéden, de hatékonyan világosítja a bőrt.
              Gyengéd, mégis hatékony kezelés, amely a bőrt világosítja,
              egységesíti a tónusát és csökkenti a sötét foltokat, így friss,
              üde arcbőrt eredményez.
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
                Tejsav: Ez az AHA (alfa-hidroxi-sav) segít finoman hámlasztani a
                bőrt, elősegíti a sejtek megújulását, és hidratáló hatása miatt
                különösen jól tolerálható.
              </li>
              <li>
                Kojiksav: Természetesen világosító összetevő, amely csökkenti a
                hiperpigmentációt és az egyenetlen bőrtónust.
              </li>
              <li>
                C-vitamin: Egy erős antioxidáns, amely világosítja és ragyogóvá
                teszi a bőrt, valamint véd a szabadgyökök ellen.
              </li>
              <li>
                Növényi őssejtek: Ezek az összetevők segítik a bőr
                regenerálódását és védenek a környezeti káros hatások ellen.
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
              Az összetevők kombinációja gyengéden hámlasztja a bőrt, miközben
              világosítja a pigmentációs foltokat és egyenletesebbé teszi a
              bőrtónust. A kezelés serkenti a sejtek megújulását, így a bőr
              frissebb és simább lesz.
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
                Pigmentfoltok csökkentése: A kojiksav és a tejsav segít
                halványítani a pigmentfoltokat és csökkenteni a
                hiperpigmentációt.
              </li>
              <li>
                Ragyogóbb, világosabb bőrtónus: A kezelés segít elérni az
                egyenletes, egészséges és ragyogó arcbőrt.
              </li>
              <li>
                Hidratálás és bőrvédelem: A tejsav hidratáló hatású, míg a
                növényi őssejtek és a C-vitamin antioxidáns védelmet nyújtanak.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik hiperpigmentációval,
              napkárosodással vagy egyenetlen bőrtónussal küzdenek. Kiváló
              minden bőrtípusra, beleértve az érzékeny bőrt is, mivel gyengéd,
              de hatékony összetevőket tartalmaz.
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
                <p>1 Kezelés Arc</p>
                <p>29.900 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}