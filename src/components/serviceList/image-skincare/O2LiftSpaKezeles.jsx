"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import icon from "../../../../public/assets/icon/right.svg";
import Link from "next/link";
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

export default function O2LiftSpaKezeles() {
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
      <div className={styles.topBar}>
        <div className={styles.items}>
          <Link href="/">FŐOLDAL</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link href="/szolgaltatasok">SZOLGÁLTATÁSOK</Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link href="/szolgaltatasok/image-skincare-protokolok">
            IMAGE SKINCARE PROTOKOLOK
          </Link>
          <Image
            style={{ marginBottom: "1px" }}
            alt={alt.name}
            size={size.fullsize}
            src={icon}
          />
          <Link className={styles.active} href="/szolgaltatasok">
            O2LIFT SPA VÖRÖS SZŐNYEG KEZELÉS
          </Link>
        </div>
      </div>

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
              <h1 className={styles.title}>O2LIFT SPA vörös szőnyeg kezelés</h1>
              <Abstract />
            </div>

            <p>
              Az Image Skincare O2 Lift kezelés egy luxus, oxigénalapú
              arckezelés, amely mélyen tisztítja, hidratálja és élénkíti a bőrt.
              Különösen népszerű azok körében, akik azonnali ragyogást és
              frissességet szeretnének elérni, például különleges alkalmak
              előtt.
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
            <h2 className={styles.title}>Mi az O2 Lift kezelés?</h2>
            <p>
              Az O2 Lift egy több lépésből álló kezelés, amely oxigénnel
              dúsított termékeket, enzimes hámlasztást és peptideket használ a
              bőr mélytisztítására és táplálására. Az oxigénes bőrápolás
              serkenti a sejtek megújulását, így a bőr élettel telivé és üdévé
              válik. Az O2 Lift a friss, lélegző bőr élményét nyújtja, hámlaszt,
              oxigénizál és ragyogóvá teszi a bőrt.
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
            <h2 className={styles.title}>A kezelés lépései</h2>
            <ul>
              <li>
                Tisztítás: Sav- és szulfátmentes O2 Lift Gel to Milk Cleanser
                lemosóval
              </li>
              <li>
                Enzimes lifting hámlasztás: Ananászból, papayából és más
                gyümölcsökből származó enzimekkel távolítják el az elhalt
                hámsejteket, hogy simább, tisztább alapot biztosítsanak.
              </li>
              <li>
                Oxigénes maszk: Az oxigénes maszk mélyen hidratálja és
                felfrissíti a bőrt, segítve a sejtek oxigénellátását, ami a bőr
                ragyogóbb megjelenését eredményezi.
              </li>
              <li>
                Fiatalítás (Peptidekkel gazdagított szérumok): A kezelés során
                felvitt peptidek támogatják a bőr kollagéntermelését, feszesebb
                és fiatalosabb megjelenést kölcsönözve.
              </li>
              <li>
                Befejező ápolás (Fényvédelem): A befejező ápolást a színezett
                fényvédő koronázza meg, mely ragyogást és védelmet nyújt.
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
            <h2 className={styles.title}>A kezelés előnyei</h2>
            <ul>
              <li>
                Azonnali hidratálás és ragyogás: Az O2 Lift azonnal feltölti a
                bőrt nedvességgel, ami különösen hatékony a fáradt vagy
                dehidratált bőr számára. Természetes növényi őssejtes
                hatóanyaggal fiatalít, és megelőzi az öregedés jeleit. Őssejtes
                fokozója egyedülállóan 5 fajta növény őssejtjét tartalmazza.
              </li>
              <li>
                Ránctalanító hatás: Az oxigén és a peptidek serkentik a
                kollagéntermelést, így a finom vonalak halványodhatnak.
              </li>
              <li>
                Egységesebb bőrtónus: Segít csökkenteni a bőrpírt és javítja az
                arcbőr összképét.
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
            <h2 className={styles.title}>Kinek ajánlott?</h2>
            <p>
              Az O2 Lift szinte minden bőrtípusra alkalmas, beleértve az
              érzékeny bőrt is, hiszen nem alkalmazunk erős kémiai hámlasztókat.
              Kifejezetten ajánlott azoknak, akik gyors és hatékony megoldást
              keresnek a bőrük felfrissítésére, például egy esemény előtt.
            </p>
            <Abstract />
          </div>

          {/* --- 5. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Mire lehet számítani?</h2>
            <p>
              Ez az eljárás tiszta oxigénnel látja el a bőrt, energiát ad a
              sejteknek, és támogatja azok regenerációját. Javítja a keringést,
              fehérít és méregtelenít, növényi őssejtek, peptidek és koncentrált
              növényi enzimek segítségével. A kezelés után a bőr ragyogó,
              hidratált és üde lesz, mellékhatások nélkül. Ideális választás
              azonnali eredményekhez, leállási idő nélkül. Nem csak szép, de
              egészséges bőrt is eredményez.
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
                <p>Kezelés 1 alkalom (45 perc)</p>
                <p>19.990 Ft-tól</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}