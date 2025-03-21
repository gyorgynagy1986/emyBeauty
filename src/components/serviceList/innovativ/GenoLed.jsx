"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import InovativHeader from "./header/innovativHeader";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function GenoLedKezelés() {
  // Képernyőméret figyelése
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
    <>
      <InovativHeader activePage="GENO-LED alacsony intenzitású LED fény" />

      <section className={styles.container}>
        <div className={styles.helper}>
          {/* --- Fő cím + szöveg --- */}
          <div 
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.titleContainer}
          >
            <div className={styles.titleHelper}>
              <h1 className={styles.title}>
                GENO-LED alacsony intenzitású LED fény
              </h1>
              <Abstract />
            </div>

            <p>
              A GENO-LED alacsony intenzitású fényterápiája LED fénnyel oldja
              meg a komplikált bőrproblémákat. Elősegíti a bőr regenerálódását
              és nyugtatását, és különböző hullámhosszúságú fényt sugároz a
              bőrbe (423 és 640 nm között). Az eszköz 287 speciális, infravörös
              tartományhoz közeli SMD LED összetevőket alkalmaz, ezért kimagasló
              a hatást biztosít.
            </p>

            <div className={styles.buttonContainer}>
              <Button />
              <Button2 />
            </div>
          </div>

          {/* --- Kép --- */}
          <div 
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="true"
            className={styles.photoContainer}
          >
            <Image
              alt={alt.name}
              src={servicesPage.genoled}
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
            <h2 className={styles.title}>GENO-LED fényterápia</h2>
            <p>
              A GENO-LED fénysugárzó eszköz, mely fájdalommentesen és
              biztonságosan elejét veszi a hagyományos lézerforrások
              kockázatainak, pl. a hőkárosodásnak és a fény okozta öregedésnek.
              Egyik legfontosabb előnye például, hogy a szöveteket és a szemeket
              érő mellékhatás és károsítás minimális, az alacsony intenzitású
              energia révén.
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
              Az alacsony intenzitású LED fényterápia előnyei
            </h2>
            <ul>
              <li>
                Biztonságos: Fájdalommentesen és biztonsággal kezeli a
                bőrproblémákat, a bőr károsítása (pl. hőkárosodás, fény okozta
                öregedés) nélkül, melyek a hagyományos lézerek hátrányaként
                ismertek.
              </li>
              <li>
                Hatékony: Kiváló és erőteljes fényes forrás, a speciális
                infravörös fénytartományhoz közeli SM LED gondoskodik a
                kimagasló hatásról, felépülési idő nélkül.
              </li>
              <li>
                Okos: Többféle bőrproblémára alkalmazható: különböző
                hullámhosszúságú fényt sugároz a bőrbe. (423 és 640 nm között)
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
            <h2 className={styles.title}>A LED fényterápia hatása</h2>
            <p>
              A LED fény egy bizonyos frekvencián a bőr rétegeibe jutva
              megújulásra ösztönzi a bőrsejteket. Fokozza a kollagén termelését,
              melynek hatására a kor előre haladtának jelei csökkennek. A
              bizonyított anti-aging hatáson kívül javítja a bőr kondícióját, a
              nap okozta foltokat és a bőrkárosodást. Az arcon kívül az egész
              testen alkalmazható, hiszen számos pozitív hatása van a
              szervezetre is. Segítségével testünk képes előállítani D-vitamint,
              vitalizálja, energetizálja szervezetünket, és csökkenti az ízületi
              fájdalmakat, gyulladást.
            </p>
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
              Mi a különbség a LED terápiás fények között?
            </h2>
            <p>
              A LED fényterápiás színek nemcsak a hangulatunkra hatnak, hanem
              testi egészségünket is pozitívan befolyásolják.
            </p>
            <p>
              Az alacsony intenzitású LED-terápiában a leggyakrabban alkalmazott
              hullámhosszok a vörös, a sárga, zöld és a kék tartományokba esnek:
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
            <h2 className={styles.title}>Piros fény</h2>
            <ul className={styles.ul2Col}>
              <li>Hullámhossz: 640 nm</li>
              <li>Behatolási mélység: 1-6 mm</li>
              <li>Segíti a bőrsejtek regenerálódását</li>
              <li>Élénkíti a bőr vérkeringését, anyagcseréjét</li>
              <li>Bőrfiatalító</li>
              <li>Finomítja a felszíni és mélyebb ráncokat</li>
              <li>Fájdalomcsillapító</li>
              <li>﻿﻿Aktiválja a hatóanyagokat</li>
              <li>Kezeli a hajhullást</li>
              <li>Anti-aging kezeléshez tökéletes kiegészítés</li>
            </ul>
            <Abstract />
          </div>

          {/* --- 6. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Kék fény</h2>
            <ul className={styles.ul2Col}>
              <li>Hullámhossz: 423 nm</li>
              <li>Behatolási mélység: 1 mm</li>
              <li>Elpusztítja az aknét okozó baktériumokat</li>
              <li>Szabályozza a faggyúmirigyek működését</li>
              <li>Megelőzi a sebek fertőződését</li>
              <li>Csökkenti a pattanásokat</li>
              <li>Aknés, gyulladt bőr kezeléséhez</li>
            </ul>
            <p>
              Fontos megjegyzés a kék színű LED fénnyel kapcsolatosan: Az
              alacsony intenzitású LED fényterápiás eszközben NINCS UV fény! A
              LED fényterápia során használt kék fény nem összetévesztendő a
              nagy energiájú látható fénnyel, ami a Napból és a kék fényt
              kibocsátó eszközökből (mint mobiltelefon, elektromos berendezések)
              érkezik. A napfény káros sugarai ellen fényvédelemmel védekezünk.
              A LED terápiás maszk kék színe kíméletesen kezeli a bőrt.
            </p>
            <Abstract />
          </div>

          {/* --- 7. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Zöld fény</h2>
            <ul className={styles.ul2Col}>
              <li>Hullámhossz: 532 nm</li>
              <li>Behatolási mélység: 0,5-2 mm</li>
              <li>Nyugtat</li>
              <li>Javítja az érzékeny bőrt</li>
              <li>Csillapítja az elmét, ellazítja testét</li>
              <li>Javítja a nem kívánatos barna foltokat</li>
              <li>
                Ajánlott bőregységesítő, halványító kezelés kiegészítésére
              </li>
            </ul>
            <Abstract />
          </div>

          {/* --- 8. szekció --- */}
          <div 
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className={styles.sectionSubTitles}
          >
            <h2 className={styles.title}>Sárga fény</h2>
            <ul className={styles.ul2Col}>
              <li>Hullámhossz: 583 nm</li>
              <li>Behatolási mélység: 1-2 mm</li>
              <li>Csökkenti a bőrpírt</li>
              <li>Csökkenti az ödémát</li>
              <li>Korai szakaszában gyógyítja a herpeszt</li>
              <li>Gyulladásos, piros bőr kezelésére alkalmas</li>
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
            <h2 className={styles.title}>
              Mennyibe kerül a LED fényterápiás kezelés?
            </h2>
            <div className={styles.priceContainer}>
              <div className={styles.priceItems}>
                <p>Arc, nyak, dekoltázs (20 perc)</p>
                <p>14.000 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>
                  6 alkalmas bőrmegújító kezelés sorozat bérletben (20 perc)
                </p>
                <p>6+1 alkalom AJÁNDÉK</p>
              </div>
              <div className={styles.priceItems}>
                <p>
                  Bármely kezeléshez választható kiegészítő szolgáltatásként (20
                  perc)
                </p>
                <p>Legyen szépülésed, pihenésed még teljesebb!</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}