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

export default function IPeelLighteningLiftForte() {
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
      <ImageSkincareHeader activePage="I PEEL | LIGHTENING LIFT® FORTE - INTENZÍV BŐRVILÁGOSÍTÓ HÁMLASZTÁS" />

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
                I PEEL | LIGHTENING LIFT® FORTE - Intenzív bőrvilágosító
                hámlasztás
              </h1>
              <Abstract />
            </div>

            <p>
              Az IMAGE Skincare világosító hámlasztó kezelésének intenzívebb
              változata, amely kifejezetten a makacsabb hiperpigmentációra,
              sötét foltokra és egyenetlen bőrtónusra lett kifejlesztve. A FORTE
              változat magasabb koncentrációban tartalmazza az aktív világosító
              összetevőket, így hatékonyabban kezeli az erősebb pigmentációs
              problémákat.
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
                Magasabb koncentrációjú tejsav: Erőteljes hámlasztást biztosít,
                amely gyorsítja a sejtek megújulását és világosítja a
                pigmentfoltokat.
              </li>
              <li>
                Emelt szintű kojiksav: Hatékonyan halványítja a
                hiperpigmentációt és az egyenetlen bőrtónust.
              </li>
              <li>
                C-vitamin: Ragyogóvá és világosabbá teszi a bőrt, miközben
                antioxidáns védelmet nyújt.
              </li>
              <li>
                Erősebb növényi őssejtek: Támogatják a bőr regenerációját és
                védik a környezeti káros hatásoktól.
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
              Ez az intenzívebb kezelés mélyebb hámlasztást biztosít, amely
              serkenti a bőr megújulását és hatékonyan halványítja a
              pigmentfoltokat. A magasabb hatóanyag-koncentráció miatt a bőr
              világosabb, egyenletesebb tónusú lesz.
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
                Erőteljes pigmentfolt halványítás: A magasabb tejsav- és
                kojiksav-koncentráció hatékonyan kezeli a makacs
                hiperpigmentációt.
              </li>
              <li>
                Egyenletesebb, ragyogóbb bőrtónus: Csökkenti az egyenetlen
                bőrtónust és ragyogóbbá teszi az arcbőrt.
              </li>
              <li>
                Regeneráció és védelem: A növényi őssejtek és a C-vitamin
                fokozzák a bőr természetes védekezőképességét és segítik a
                megújulást.
              </li>
            </ul>
            <p>
              Ez a kezelés ideális azok számára, akik erősebb pigmentációs
              problémákkal küzdenek, és tartós, makacs foltokat szeretnének
              halványítani. Tapasztaltabb peeling használóknak ajánlott, mivel
              az erősebb koncentráció intenzívebb hatást biztosít.
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