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
import InovativHeader from "@/components/serviceList/innovativ/header/innovativHeader";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

export default function GenosysSnowcell() {
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
      <InovativHeader activePage="Genosys SNOWCELL" />

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
              <h1 className={styles.title}>Genosys SNOWCELL</h1>
              <Abstract />
            </div>

            <p>
              Ragyogó és egységes, fiatalos bőr, pigmentáció nélkül – az ÚJ
              Genosys SnowCell eljárással!
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
              src={servicesPage.kek2}
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
            <h2 className={styles.title}>Genosys SNOWCELL</h2>
            <p>
              Egyenetlen a bőröd tónusa? Hiperpigmentációval küzdesz? Idősödés
              jeleit tapasztalod? Az innovatív pigmentációkezelő és fiatalító
              Genosys SnowCell megoldást nyújt számodra. Ez az innovatív,
              biztonságos és akár nyáron is alkalmazható kezelésrendszer
              peelinggel ötvözve frissíti a bőrfelszínt és egységesíti a bőr
              tónusát, halványítja a pigmentációt, gyorsítja a bőrsejtek
              cserélődését és támogatja a kollagén termelődését.
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
            <h2 className={styles.title}>A Genosys SnowCell újdonsága</h2>
            <p>
              A Genosys SnowCell újdonsága és hatékonysága abban rejlik, hogy
              gátolja a melanin termelődését, amely a bőrön megjelenő sötét
              foltokért és szeplőkért felel. Sőt! Másik nagy előnye, hogy
              kíméletesen hámlasztja a bőrfelszínt, így fényvédelemmel együtt
              egész évben, nyáron is biztonsággal alkalmazható. A
              melanintermelés korlátozásán kívül egyenletes bőrtextúrát
              eredményez, stimulálja a kollagéntermelődést, felgyorsítja a
              sejtek cserélődésének ütemét C-vitaminnal, tejsavval, kojiksavval,
              fermentált ginzenggel és többféle peptiddel kezeli a bőrt.
              Hatékonyan csökkenti a gyulladásokat és antioxidánsokkal védi a
              bőrt.
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
            <h2 className={styles.title}>Mik a kezelés előnyei?</h2>
            <ul>
              <li>Csökkenti a meglévő hiperpigmentációt</li>
              <li>
                Megakadályozza a pigmentanyagok lerakódását a bőr felső
                rétegében
              </li>
              <li>
                Meggátolja a melanin termelődését, így megelőzi az újabb foltok
                megjelenését
              </li>
              <li>Fiatalítja a bőrt</li>
              <li>Stimulálja a kollagén termelődését</li>
              <li>Biztonságosan hámlasztja a felszíni hámsejteket</li>
              <li>Frissíti a bőrfelszínt és egységesíti a bőr tónusát</li>
              <li>
                Kezeli a szeplőket, öregségi foltokat, gyulladás utáni
                hiperpigmentációt is
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
              Az új innovatív Genosys SnowCell eljárás tökéletes választás lehet
              mindazoknak, akik szeretnék csökkenteni a hiperpigmentációt,
              helyreállítani a bőr egészségét, egyenletesebb bőrtónusra vágynak
              vagy egyszerűen csak fiatalítanák és megújítanák a bőrüket.
              Kifejezetten ajánlott pigmentált bőrre, de bármely bőrtípus és
              korosztály számára kiválóan alkalmazható.
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
            <h2 className={styles.title}>
              Hogyan történik egy kezelés és mennyi időt vesz igénybe?
            </h2>
            <p>
              A kezelést megelőzően összekeverjük a por állagú hatóanyagokat az
              aktivátorral. Ezt visszük fel az alaposan megtisztított arcbőrre.
              Az oldatot 10 percig a páciens bőrén hagyjuk, majd egy világosító
              regeneratív oldatot viszünk fel. Ezután egy peptides gélmaszkot
              helyezünk a bőrre. A kezelés egyben relaxációs élményt is nyújt,
              miközben szakértő kezek dolgoznak azon, hogy visszaadják bőröd
              egészségét és természetes ragyogását. Kiegészíthető LED-lámpás
              kezeléssel is.
            </p>
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
            <h2 className={styles.title}>
              Hány alkalom szükséges a látványos eredmény eléréséhez?
            </h2>
            <p>
              A kezelést kúrában javasolt alkalmazni, és hetente ismételhető.
              4-7 kezelés javasolt, a bőr állapotától függően. A hatást hosszú
              ideig élvezhetjük, az elért látható eredmények megőrzésére pedig
              ajánlott specifikus termékkel ápolni otthon a bőrt, melynek
              kötelező eleme a fényvédelem.
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
            <h2 className={styles.title}>
              Mire kell figyelni a kezelés előtt és a kezelés után?
            </h2>
            <p>
              Kiemelten fontos, hogy a kezelések között megfelelően hidratáljuk
              a bőrt és gondoskodjunk a fényvédelemről.
            </p>
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
            <h2 className={styles.title}>
              Milyen esetekben nem ajánlott a kezelés?
            </h2>
            <p>
              A hatóanyagokra való esetleges allergia esetén nem ajánlott a
              kezelés.
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
                <p>1 Alkalmas Kezelés</p>
                <p>29.900 Ft</p>
              </div>
              <div className={styles.priceItems}>
                <p>4 Alkalmas bérlet</p>
                <p>99.000 Ft</p>
              </div>
            </div>

            <Abstract />
          </div>
        </div>
      </section>
    </>
  );
}