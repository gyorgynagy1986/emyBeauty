"use client";

import React, { useEffect, useState } from "react";
import Button2 from "@/components/button/Button2";
import Button from "@/components/button/Button";
import Image from "next/image";
import Abstract from "@/components/astract/ObjectElement";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { servicesPage } from "@/data/photos";
import styles from "./serviceList.module.css";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function Sminktetovalas() {
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
    window.addEventListener("resize", () => {
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
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  return (
    <>
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
                Sminktetoválás Szegeden és Budapesten
              </h1>
              <Abstract />
            </div>

            <p>Tartós Szépség, Természetes Hatás</p>

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
            <Image alt={alt.name} src={servicesPage.smink2} sizes={size.fullsize} />
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
            <h2 className={styles.title}>Üdvözöllek</h2>
            <p>
              Ha szeretnéd kiemelni természetes szépségedet, de időt spórolnál a
              mindennapi sminkeléssel, a sminktetoválás tökéletes választás
              számodra. Több mint 20 éves tapasztalattal várlak Szegeden és
              Budapesten, ahol professzionális technikákkal készítek:
            </p>
            <ul>
              <li>
                Szemöldöktetoválást – Finom, természetes hatású púderes
                technikával.
              </li>
              <li>
                Szemhéjtetoválást – Látványos vagy visszafogott kontúr a
                ragyogóbb tekintetért.
              </li>
              <li>
                Ajaktetoválást – Természetes tónusok vagy élénkebb színek a
                tökéletes ajkakért.
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
              Miért érdemes sminktetoválást választanod?
            </h2>
            <ul>
              <li>
                ✨ Mindig ápolt és harmonikus megjelenés – Friss, üde kinézet
                éjjel-nappal.
              </li>
              <li>
                ⏳ Időmegtakarítás – Nincs többé reggeli sminkelés és elkenődött
                smink.
              </li>
              <li>
                💧 Vízhatlan, tartós megoldás – Sportolás, úszás vagy nyári
                melegben is tökéletes marad.
              </li>
              <li>
                👁 Kiemeli a természetes szépségedet – Egyénre szabott forma és
                színválasztás.
              </li>
              <li>
                💄 Smink nélküli önbizalom – Akár teljesen natúr arccal is
                magabiztos lehetsz.
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
            <h2 className={styles.title}>Szemöldök tetoválás</h2>
            <ul>
              <li>Nem egyforma a szemöldököd?</li>
              <li>
                Hiába próbálod visszanöveszteni, nem sikerül vagy esetleg
                teljesen kikopott?
              </li>
              <li>
                Egy sérülés következtében egy bizonyos részen nem nő szőr? /pl:
                heg/
              </li>
              <li>Világos a színe, és te sötétebbet szeretnél?</li>
              <li>Nem tetszik az íve?</li>
              <li>Unod a mindennapos rajzolást?</li>
              <li>Szereted, ha szemöldököd hangsúlyosabb?</li>
            </ul>
            <Abstract />
          </div>
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
            <Image alt={alt.name} src={servicesPage.t2} sizes={size.fullsize} />
          </div>{" "}
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
            <h2 className={styles.title}>Szemhéj tetoválás</h2>
            <ul>
              <li>Unod a mindennapos sminkelést?</li>
              <li>Nem tudod egyformára megrajzolni a tusvonalat?</li>
              <li>
                Szeretnéd a szemedet kihangsúlyozni, de nem tudod hogyan kell?
              </li>
              <li>
                El szeretnéd kerülni, hogy sminked elmaszatolódjon, elkenődjön?
              </li>
              <li>Esetleg szemüveges vagy, és nehezen megy a sminkelés!</li>
            </ul>
            <Abstract />
          </div>
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
            <Image alt={alt.name} src={servicesPage.t3} sizes={size.fullsize} />
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
            <h2 className={styles.title}>Ajak tetoválás</h2>
            <ul>
              <li>
                Ha vékony ajkaid vannak, de tartasz a plasztikai
                beavatkozásoktól
              </li>
              <li>
                Ha egyenletlen a száj széle /akár a sok herpesztől, vagy a kor
                előre haladtával/
              </li>
              <li>Ha fakónak, színtelennek találod a szádat</li>
              <li>Ha sokat rúzsozod magad</li>
              <li>
                Ha nem tetszik a szád formája vagy nem egyforma a szád íve
              </li>
              <li>
                Ha sokat sportolsz vagy, ha esetleg olyan a munkád, hogy fontos
                a megjelenésed
              </li>
            </ul>
            <Abstract />
          </div>
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
            <Image alt={alt.name} src={servicesPage.t1} sizes={size.fullsize} />
          </div>{" "}
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
            <h2 className={styles.title}>Segítek a legjobb megjelenésben</h2>
            <p>
              A sminktetoválás segít, hogy minden nap a legjobb formádat hozd,
              felesleges macera nélkül. Ha szeretnéd megtudni, melyik technika
              illik hozzád a legjobban, keress bizalommal Szegeden vagy
              Budapesten!
            </p>
         
            <p>Szeretettel várlak a szépülésre!</p>
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
            <h2 className={styles.title}>Tetoválás eltávolítás</h2>
            <p>
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
                  src={servicesPage.t4}
                  sizes={size.fullsize}
                />
              </div>{" "}
            </p>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}
