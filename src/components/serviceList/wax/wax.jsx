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

export default function Szortelenites() {
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
                Szőrtelenítés prémium wax technológiával
              </h1>
              <Abstract />
            </div>

            <p>Sima, Ápolt Bőr, Irritáció Nélkül</p>

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
            <Image alt={alt.name} src={servicesPage.w1} sizes={size.fullsize} />
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
              Szalonomban a waxolás professzionális formáját kínálom, hogy bőröd sima, 
              ápolt és irritációmentes maradjon. A hagyományos gyantázással szemben a waxolás 
              kíméletesebb eljárás, amely kevesebb fájdalommal jár, és érzékeny bőrre is kiváló választás.
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
              Miért érdemes a waxolást választanod?
            </h2>
            <ul>
              <li>
                 Kíméletesebb a bőrhöz – A speciális összetételű wax nem tapad a bőrhöz, 
                így elkerülhetők a sérülések és a kipirosodás.
              </li>
              <li>
                 Hosszabb hatás – A szőrszálakat a gyökérrel együtt távolítja el, 
                így akár 3-4 hétig tartó simaságot biztosít.
              </li>
              <li>
                 Kevesebb fájdalom – A meleg wax jobban körbeöleli a szőrszálakat, 
                így kevesebb kellemetlenséggel jár a szőrtelenítés.
              </li>
              <li>
                 Kevesebb benőtt szőrszál – A rendszeres waxolás csökkenti a benőtt 
                szőrszálak kialakulását.
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
          <Image alt={alt.name} src={servicesPage.w4} sizes={size.fullsize} />
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
            <h2 className={styles.title}>Szolgáltatásaim</h2>
            <ul>
              <li>
                 Arc és szemöldök waxolás – Kíméletes eljárás az arcbőr érzékeny területeire.
              </li>
              <li>
                 Hónalj és kar waxolás – Selymes és sima bőr irritáció nélkül.
              </li>
              <li>
                 Láb és comb waxolás – Hosszabb ideig tartó szőrtelenítés, puha tapintású bőrrel.
              </li>
              <li>
                 Bikini és intim terület waxolás – Diszkrét, higiénikus és profi megoldás az érzékeny területeken.
              </li>
              <li>
                 Férfi szőrtelenítés – Váll, hát, mellkas
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
            <Image alt={alt.name} src={servicesPage.w2} sizes={size.fullsize} />
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
            <h2 className={styles.title}>Hogyan készülj a kezelésre?</h2>
            <ul>
              <li>A legjobb eredmény érdekében a szőrszálak legalább 4-5 mm hosszúak legyenek.</li>
              <li>Kerüld a krémek és olajok használatát a kezelés előtt.</li>
              <li>A szőrtelenítés utáni 24 órában ajánlott kerülni a szaunát, szoláriumot és az izzadással járó tevékenységeket.</li>
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
            <Image alt={alt.name} src={servicesPage.w3} sizes={size.fullsize} />
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
            <p>Várlak szeretettel!</p>
            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}